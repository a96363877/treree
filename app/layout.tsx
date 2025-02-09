import { InsuranceProvider } from "@/context/insurance-context"
import type React from "react"
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <InsuranceProvider>{children}</InsuranceProvider>
      </body>
    </html>
  )
}

