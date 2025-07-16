"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 300)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-900 to-cyan-600 flex flex-col items-center justify-center h-screen w-screen overflow-x-hidden">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mb-4" />
          <p className="text-white text-lg font-medium text-center">Chargement...</p>
        </div>
      )}
      <div className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}>{children}</div>
    </>
  )
}
