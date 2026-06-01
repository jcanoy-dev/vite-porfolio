import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: { absolute: "Jeffrey Canoy — Full Stack Engineer" },
  description: "Full Stack Software Engineer with 12+ years of experience building scalable web applications with React, Next.js, TypeScript, GraphQL, and Shopify.",
};

export default function Page() {
  return <HomePage />;
}
