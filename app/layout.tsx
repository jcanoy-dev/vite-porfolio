// app/layout.tsx
import type { ReactNode } from "react";
import { DM_Sans } from "next/font/google";
import { AnalyticsProvider } from "@/lib/AnalyticsContext";
import StoreProvider from "@/lib/StoreProvider";
import "./globals.css";
import AppLayout from "@/components/layout/AppLayout";


const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <body suppressHydrationWarning className="font-serif bg-gray-teal-pale text-gray-teal">
        <StoreProvider>
          <AnalyticsProvider>
            <AppLayout>{children}</AppLayout>
          </AnalyticsProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
