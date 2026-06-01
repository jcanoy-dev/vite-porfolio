// app/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Jeffrey Canoy",
    default: "Jeffrey Canoy — Full Stack Engineer",
  },
  description: "Full Stack Software Engineer with 12+ years of experience building scalable web applications with React, Next.js, TypeScript, GraphQL, and Shopify.",
  authors: [{ name: "Jeffrey Canoy" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: "Jeffrey Canoy",
  },
  twitter: {
    card: "summary",
  },
};
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
