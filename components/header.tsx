"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image" // Import Image component
import { Menu } from "lucide-react" // Globe icon removed
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Découvrir NERYTEC", href: "/about" },
    { name: "Vous cherchez un job ?", href: "/jobs" },
    { name: "Vous recrutez ?", href: "/recruit" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo-nerytec-rs-002-1.jpeg"
              alt="NERYTEC Consulting Logo"
              width={125} // Augmenter la largeur
              height={60} // Augmenter la hauteur
              priority // Preload the logo as it's above the fold
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/jobs">
              <Button
                variant="outline"
                size="sm"
                className="border-blue-500 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                Candidat
              </Button>
            </Link>
            <Link href="/recruit">
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                Recruteur
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <Link href="/jobs">
                    <Button variant="outline" size="sm" className="border-blue-500 text-blue-600 bg-transparent">
                      Candidat
                    </Button>
                  </Link>
                  <Link href="/recruit">
                    <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-500">
                      Recruteur
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
