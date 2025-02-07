import type { Metadata } from "next"
import { IBM_Plex_Sans_Arabic } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Tree Insurance",
  description: "Car insurance made easy",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={arabic.className}>{children}</body>
    </html>
  )
}

