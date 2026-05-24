// app/layout.tsx
import type { ReactNode } from "react";
import { DM_Sans } from "next/font/google";
import { AnalyticsProvider } from "../lib/AnalyticsContext";
import "./globals.css";
import AppLayout from "./_layout/AppLayout";


const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <body suppressHydrationWarning className="font-serif bg-[var(--color-gray-teal-pale)] text-[var(--color-gray-teal)]">
        <AnalyticsProvider>
          <AppLayout>{children}</AppLayout>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
