'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV_LINKS = [
  { href: "/", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const AppHeader = () => {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-20 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-4 lg:px-10">

        <nav className="flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`relative text-lg font-medium tracking-wide transition-colors duration-200 group ${
                  isActive ? "text-gray-900" : "text-gray-teal hover:text-gray-900"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-gray-teal transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default AppHeader
