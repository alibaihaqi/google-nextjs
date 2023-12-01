import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

import HeaderSearch from '@/components/HeaderSearch'
import Footer from '@/components/Shared/Footer'
import { getIpData } from '@/services/location'

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
    <main className='flex flex-col min-h-[100svh]'>
      <HeaderSearch />
      { children }
      <Footer data={response} />
    </main>
  )
}
