import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react'

import Footer from '@/components/footer'
import Header from '@/components/header/header'
import Providers from '@/store/providers'
import { SITE_URL, cn } from '@/utils'

import { raleway } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  description:
    "Hi, my name is Anton Bochkovskyi and I'm a Full-Stack Developer focused on scalable web apps, AI platforms, and cloud-based systems - from frontend UX to serverless backends and deployment workflows.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    images: {
      alt: 'Anton Bochkovskyi - Full-Stack Developer',
      height: 630,
      type: 'image/png',
      url: `${SITE_URL}/api/og?title=Anton%20Bochkovskyi&description=Full-Stack%20Developer`,
      width: 1200,
    },
  },
  title: {
    default: 'Anton Bochkovskyi - Full-Stack Developer',
    template: '%s | Anton Bochkovskyi - Full-Stack Developer',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('flex min-h-screen flex-col', raleway.className)}>
        <Providers>
          <Header />
          <main className="shrink grow basis-0">{children}</main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
