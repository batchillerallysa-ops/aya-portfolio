import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, Geist_Mono } from 'next/font/google'
import { FireflyBackground } from '@/components/firefly-background'
import { FireflyCursor } from '@/components/firefly-cursor'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Allysa Marie Batchiller — Workflow & AI Automations Specialist',
  description:
    'Workflow and AI automations specialist helping teams save time with Zapier, Make.com, n8n, and GoHighLevel. 10+ years in data analysis and process optimization.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#10171f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} bg-background scroll-smooth`}
    >
      <body className="font-sans antialiased overflow-x-hidden">
        <FireflyBackground />
        <FireflyCursor />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
