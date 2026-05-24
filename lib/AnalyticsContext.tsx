'use client'
import { createContext, useContext, useMemo, type ReactNode } from "react"
import { HttpClient } from "./httpClient"

interface AnalyticsContextValue {
  client: HttpClient
}

const AnalyticsContext = createContext<AnalyticsContextValue | null>(null)

export const AnalyticsProvider = ({ children }: { children: ReactNode }) => {
  const client = useMemo(
    () =>
      new HttpClient({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? "/api",
        // headers: {
        //   "x-vercel-protection-bypass": process.env.NEXT_PUBLIC_ANALYTICS_API_KEY,
        // },
      }),
    []
  )

  return (
    <AnalyticsContext.Provider value={{ client }}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export const useAnalytics = (): AnalyticsContextValue => {
  const ctx = useContext(AnalyticsContext)
  if (!ctx) throw new Error("useAnalytics must be used within AnalyticsProvider")
  return ctx
}
