import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins, Gugi } from "next/font/google"

// Gugi font for "Spiel Portal" text
const gugi = Gugi({
  weight: ["400"], // Gugi only has one weight
  subsets: ["latin"],
  variable: "--font-gugi",
  display: "swap",
})

// Poppins as a fallback for Colophon Foundry
// Note: Colophon Foundry would need to be added as a custom font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-colophon",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Spiel Portal",
  description: "Salesman Registration & Verification",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${gugi.variable} font-colophon`}>{children}</body>
    </html>
  )
}
