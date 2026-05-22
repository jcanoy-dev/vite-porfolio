const DEFAULT_TIMEOUT_MS = 10_000
const DEFAULT_MAX_RETRIES = 3

export class ApiError extends Error {
  constructor(message, { status, statusText, body } = {}) {
    super(message)
    this.name = "ApiError"
    this.status = status
    this.statusText = statusText
    this.body = body
  }

  get isClientError() { return this.status >= 400 && this.status < 500 }
  get isServerError() { return this.status >= 500 }
  get isTimeout() { return this.status === 408 }
}

export class HttpClient {
  constructor({ baseUrl = "", headers = {}, timeout = DEFAULT_TIMEOUT_MS, maxRetries = DEFAULT_MAX_RETRIES } = {}) {
    this.baseUrl = baseUrl
    this.defaultHeaders = headers
    this.timeout = timeout
    this.maxRetries = maxRetries
  }

  async request(endpoint, { method = "GET", body, headers = {}, retries = this.maxRetries } = {}) {
    const url = `${this.baseUrl}${endpoint}`
    const init = {
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
        if (err.name === "AbortError") {
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

  get(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: "GET" })
  }

  post(endpoint, body, options = {}) {
    return this.request(endpoint, { ...options, method: "POST", body })
  }

  put(endpoint, body, options = {}) {
    return this.request(endpoint, { ...options, method: "PUT", body })
  }

  patch(endpoint, body, options = {}) {
    return this.request(endpoint, { ...options, method: "PATCH", body })
  }

  delete(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: "DELETE" })
  }
}
