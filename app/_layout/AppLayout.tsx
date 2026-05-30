'use client'
import { type ReactNode, useEffect } from "react"
import { usePathname } from "next/navigation"
import { useSelector } from "react-redux"
import AppHeader from "./AppHeader"
import { useAnalytics } from "@/lib/AnalyticsContext"
import type { RootState } from "@/store"

const env = process.env.NODE_ENV || "development";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  const { client } = useAnalytics()
  const theme = useSelector((state: RootState) => state.theme.mode)

  useEffect(() => {
    if (env === "development") return;
    client.post("/analytics", {
      page_path: pathname,
      referrer: document.referrer || null,
      event_category: "page_view",
      event_action: "visited",
      event_label: pathname,
    }).catch(() => {})
  }, [pathname, client])

  return (
    <div className={`h-screen xl:flex bg-gray-teal-muted overflow-hidden pb-10 ${theme === 'dark' ? ' dark' : ''}`}>
      <div className="relative w-full max-w-8xl h-full">
        <AppHeader />

        <div className="absolute bg-gray-teal-soft transform rotate-1 z-0 rounded-2xl
          top-0 left-0 right-0
          m-5 mt-14 h-[calc(100%-4.5rem)]
          lg:mx-10 lg:mb-10 lg:mt-15 lg:h-[calc(100%-4.25rem)]
          shadow-lg">
        </div>

        <div className="relative z-10 px-5 pb-5 h-[calc(100%-3rem)] lg:px-10 lg:pb-10 lg:h-[calc(100%-1.5rem)]">
          <div className="bg-gray-teal-light rounded-2xl shadow-md overflow-auto h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppLayout
