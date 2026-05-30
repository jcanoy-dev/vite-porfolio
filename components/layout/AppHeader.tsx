'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { Moon, Sun } from "lucide-react"
import { toggleTheme } from "@/store/themeSlice"
import type { RootState } from "@/store"

const NAV_LINKS = [
  { href: "/", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const AppHeader = () => {
  const pathname = usePathname()
  const dispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.theme.mode)

  return (
    <header className="sticky top-0 z-20 w-full">
      <div className="relative mx-auto flex max-w-7xl items-center justify-end px-6 py-4 lg:px-10">
        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
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

        <button
          onClick={() => dispatch(toggleTheme())}
          aria-label="Toggle theme"
          className="p-2 rounded-full text-gray-teal hover:bg-gray-teal-soft transition-colors duration-200"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  )
}

export default AppHeader
