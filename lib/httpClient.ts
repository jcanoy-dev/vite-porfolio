const DEFAULT_TIMEOUT_MS = 10_000
const DEFAULT_MAX_RETRIES = 3

interface ApiErrorInit {
  status?: number
  statusText?: string
  body?: unknown
}

interface HttpClientOptions {
  baseUrl?: string
  headers?: Record<string, string>
  timeout?: number
  maxRetries?: number
}

interface RequestOptions {
  method?: string
  body?: unknown
  headers?: Record<string, string>
  retries?: number
}

export class ApiError extends Error {
  status?: number
  statusText?: string
  body?: unknown

  constructor(message: string, { status, statusText, body }: ApiErrorInit = {}) {
    super(message)
    this.name = "ApiError"
    this.status = status
    this.statusText = statusText
    this.body = body
  }

  get isClientError() { return (this.status ?? 0) >= 400 && (this.status ?? 0) < 500 }
  get isServerError() { return (this.status ?? 0) >= 500 }
  get isTimeout() { return this.status === 408 }
}

export class HttpClient {
  baseUrl: string
  defaultHeaders: Record<string, string>
  timeout: number
  maxRetries: number

  constructor({ baseUrl = "", headers = {}, timeout = DEFAULT_TIMEOUT_MS, maxRetries = DEFAULT_MAX_RETRIES }: HttpClientOptions = {}) {
    this.baseUrl = baseUrl
    this.defaultHeaders = headers
    this.timeout = timeout
    this.maxRetries = maxRetries
  }

  async request(endpoint: string, { method = "GET", body, headers = {}, retries = this.maxRetries }: RequestOptions = {}): Promise<unknown> {
    const url = `${this.baseUrl}${endpoint}`
    const init: RequestInit = {
      method,
      headers: { "Content-Type": "application/json", ...this.defaultHeaders, ...headers },
      ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
    }

    for (let attempt = 0; attempt <= retries; attempt++) {
      const controller = new AbortController()
      const timer = setTimeout(() => controller.abort(), this.timeout)

      try {
        const res = await fetch(url, { ...init, signal: controller.signal })

        if (!res.ok) {
          const errBody = await res.json().catch(() => null)
          throw new ApiError(`${method} ${endpoint} failed`, {
            status: res.status,
            statusText: res.statusText,
            body: errBody,
          })
        }

        const contentType = res.headers.get("content-type")
        return contentType?.includes("application/json") ? res.json() : res.text()
      } catch (err) {
        if ((err as Error).name === "AbortError") {
          throw new ApiError(`${method} ${endpoint} timed out`, { status: 408 })
        }

        // Don't retry 4xx — those are caller errors, retrying won't help
        const shouldRetry = attempt < retries && !(err instanceof ApiError && err.isClientError)
        if (!shouldRetry) throw err

        await new Promise((r) => setTimeout(r, Math.min(500 * 2 ** attempt, 8_000)))
      } finally {
        clearTimeout(timer)
      }
    }
  }

  get(endpoint: string, options: Omit<RequestOptions, "method" | "body"> = {}) {
    return this.request(endpoint, { ...options, method: "GET" })
  }

  post(endpoint: string, body: unknown, options: Omit<RequestOptions, "method" | "body"> = {}) {
    return this.request(endpoint, { ...options, method: "POST", body })
  }

  put(endpoint: string, body: unknown, options: Omit<RequestOptions, "method" | "body"> = {}) {
    return this.request(endpoint, { ...options, method: "PUT", body })
  }

  patch(endpoint: string, body: unknown, options: Omit<RequestOptions, "method" | "body"> = {}) {
    return this.request(endpoint, { ...options, method: "PATCH", body })
  }

  delete(endpoint: string, options: Omit<RequestOptions, "method" | "body"> = {}) {
    return this.request(endpoint, { ...options, method: "DELETE" })
  }
}
