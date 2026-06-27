import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ali Raza - Full Stack AI Engineer | Upwork',
  description: 'Full Stack AI Engineer specializing in automation, machine learning, and intelligent solutions. Available on Upwork.',
  keywords: ['AI Engineer', 'Full Stack', 'Python', 'React', 'Machine Learning', 'Automation'],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950">
        {children}
      </body>
    </html>
  )
}
