'use client'
import Link from "next/link"

const AppHeader = () => {
  return (
    <header className="sticky top-0 z-20 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-center h-15 gap-8 sm:gap-12 px-4 py-4 text-sm sm:text-lg font-medium">
        <Link href="/" className="hover:text-gray-600">Portfolio</Link>
        <Link href="/about" className="hover:text-gray-600">About</Link>
        <Link href="/contact" className="hover:text-gray-600">Contact</Link>
      </div>
    </header>
  )
}

export default AppHeader
