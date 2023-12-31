import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TanstackProvider from '@/providers/TanStackProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Google NextJS',
  description: 'Clone Google with NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="/favicon.svg"
          rel="icon"
          sizes="any"
        />
      </head>

      <body className={inter.className}>
        <TanstackProvider>
          { children }
        </TanstackProvider>
      </body>
    </html>
  )
}
