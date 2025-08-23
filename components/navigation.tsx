"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/what-is-sustainable-school", label: "What is a Sustainable School?" },
    { href: "/environmental-sustainability", label: "Environmental Sustainability" },
    { href: "/importance", label: "Importance" },
    { href: "/developers", label: "Developers" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3 transition-transform duration-300 transform-gpu hover:scale-[1.02]">
            <Image
              src="/images/wizard-logo.png"
              alt="Wizard News Logo"
              width={40}
              height={40}
              className="rounded-full ring-0 transition-all duration-300 group-hover:ring-2 group-hover:ring-primary/30 group-hover:shadow-md"
            />
            <span className="font-heading font-bold text-xl text-primary/90 transition-colors duration-300 group-hover:text-primary">
              Wizard News
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative inline-flex items-center py-2 text-foreground/85 transition-colors duration-200 hover:text-foreground"
              >
                <span className="font-medium">{item.label}</span>
                {/* Animated underline */}
                <span className="pointer-events-none absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/0 via-primary to-primary/0 transition-all duration-300 group-hover:w-4/5" />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative block px-3 py-2 rounded-md text-card-foreground/90 hover:text-card-foreground transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-medium">{item.label}</span>
                  <span className="pointer-events-none absolute -bottom-0.5 left-3 right-3 h-0.5 w-0 rounded-full bg-gradient-to-r from-primary/0 via-primary to-primary/0 transition-all duration-300 group-hover:w-[90%]" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
