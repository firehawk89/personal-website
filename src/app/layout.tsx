import type { Metadata } from 'next'

import Footer from '@/components/footer'
import Header from '@/components/header/header'
import Providers from '@/store/providers'
import { SITE_URL, cn } from '@/utils'

import { raleway } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  description:
    "Hi, my name is Anton Bochkovskyi and I'm a Front-End Developer specializing in React, Next.js, and Tailwind CSS, with a keen focus on crafting responsive and visually stunning web applications.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    images: {
      alt: 'Anton Bochkovskyi - Front-End Developer',
      height: 630,
      type: 'image/png',
      url: `${SITE_URL}/api/og?title=Anton%20Bochkovskyi&description=Front-End%20Developer`,
      width: 1200,
    },
  },
  title: {
    default: 'Anton Bochkovskyi - Front-End Developer',
    template: '%s | Anton Bochkovskyi - Front-End Developer',
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
          <main className="flex-shrink flex-grow basis-0">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
