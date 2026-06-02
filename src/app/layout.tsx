import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Script from 'next/script'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Aussie Games List — Australian Tabletop Games & Stories',
  description: 'Aussie Games List is your guide to Australian tabletop games — original, independent board games inspired by Australian landscapes, culture, and storytelling. No big brands, just real play.',
  keywords: ['Australian board games', 'aussie tabletop games', 'indie board games Australia', 'Australian game design', 'tabletop culture Australia', 'aussiegameslist'],
  authors: [{ name: 'Aussie Games List' }],
  metadataBase: new URL('https://aussiegameslist.com'),
  openGraph: {
    title: 'Aussie Games List — Australian Tabletop Games & Stories',
    description: 'Original Australian board games, stories, and tabletop culture. Inspired by the land, made for the table.',
    url: 'https://aussiegameslist.com',
    siteName: 'Aussie Games List',
    locale: 'en_AU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <Script src="/link-handler.js" strategy="beforeInteractive" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
