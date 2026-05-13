"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
]

export function Navigation() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav 
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(-10px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
      }}
    >
      <div className="max-w-2xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-medium text-foreground hover:text-accent transition-colors">
            NS
          </Link>
          
          <ul className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <li 
                key={item.href}
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(-5px)",
                  transition: `opacity 0.5s ease-out ${150 + index * 50}ms, transform 0.5s ease-out ${150 + index * 50}ms`,
                }}
              >
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
