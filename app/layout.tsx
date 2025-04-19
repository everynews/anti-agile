import type React from 'react'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Dear Vercel, I'll quit being Anti-Agile",
  description: "An interactive essay on why I'll quit being Anti-Agile",
  openGraph: {
    images: [
      {
        url: '/antiagile.png',
        width: 3456,
        height: 1984,
        alt: 'Dear Vercel, I\'ll quit being Anti-Agile',
      },
    ],
    videos: [
      {
        url: '/antiagile.mp4',
        width: 1920,
        height: 1080,  
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
