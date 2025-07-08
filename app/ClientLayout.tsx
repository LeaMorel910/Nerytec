"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { PageTransition } from "@/components/page-transition"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <style jsx global>{`
          @keyframes slideInBottom {
            from {
              transform: translateY(100%) translateX(-50%);
              opacity: 0;
            }
            to {
              transform: translateY(0%) translateX(-50%);
              opacity: 1;
            }
          }

          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
            }
            50% {
              box-shadow: 0 0 25px rgba(147, 51, 234, 0.6);
            }
          }

          .promotional-banner-desktop {
            animation: slideInBottom 1s ease-out 2s both, pulse-glow 3s ease-in-out infinite;
          }
        `}</style>

        <PageTransition>{children}</PageTransition>

        {/* Promotional Banner - Desktop (fixed at bottom) */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block promotional-banner-desktop">
          <div className="bg-[#0078BE] hover:bg-[#006bb0] transition-colors duration-200 text-white px-6 py-3 rounded-t-lg shadow-2xl">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-sm font-bold whitespace-nowrap">
                🎉 Quand NERYTEC vous trouve un job, NERYTEC vous offre 1000€ ! 🎉
              </span>
              <span className="text-xs whitespace-nowrap opacity-80">
                <Link href="/gift-cards" className="underline hover:text-blue-200 transition-colors duration-200 cursor-pointer">
                  *en chèque cadeau de votre choix
                </Link>
              </span>
            </div>
          </div>
        </div>

        {/* Promotional Banner - Mobile (fixed at top) */}
        <div className="fixed top-0 left-0 right-0 z-50 lg:hidden">
          <div className="bg-[#0078BE] hover:bg-[#006bb0] transition-colors duration-200 text-white px-4 py-2 text-center shadow-lg">
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold">🎉 NERYTEC vous offre 1000€ quand on vous trouve un job ! 🎉</span>
              <span className="text-xs opacity-80">*en chèque cadeau de votre choix</span>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
