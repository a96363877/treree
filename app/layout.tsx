  import './globals.css';
  import type { Metadata } from "next"

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
        <body >{children}</body>
      </html>
    )
  }
  
  