import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

import Footer from '@/components/Shared/Footer'
import { getIpData } from '@/service/location'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Google NextJS',
  description: 'Clone Google with NextJS',
}

export default async function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const response = await getIpData()

  return (
    <>
      { children }
      <Footer data={response} />
    </>
  )
}
