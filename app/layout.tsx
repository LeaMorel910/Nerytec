import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./ClientLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NERYTEC Consulting",
  description:
    "Cabinet spécialisé dans le recrutement De Sales - Managers - Directeurs - Dirigeants pour les ESN et sociétés de Conseil en technologies",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
