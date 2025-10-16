import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Eleke Ernestine | Juriste & Conseil en Propriété Intellectuelle",
  description:
    "Juriste spécialisée en propriété intellectuelle et conseil juridique. Protection des marques et brevets.",
  keywords: "juriste, propriété intellectuelle, conseil juridique, Cameroun, droit des affaires, marques, brevets",
  authors: [{ name: "Eleke Ernestine" }],
  openGraph: {
    title: "Eleke Ernestine | Juriste & Conseil en Propriété Intellectuelle",
    description: "Juriste spécialisée en propriété intellectuelle et conseil juridique.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <Navigation />
          {children}
          <Footer />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
