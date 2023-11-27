import HomeContent from '@/components/Home/HomeContent'
import HomeHeader from '@/components/Home/HomeHeader'
import Footer from '@/components/Shared/Footer'

import { getIpData } from '@/service/location'

export default async function Home() {
  const response = await getIpData()

  return (
    <main className='flex flex-col'>
      <HomeHeader />
      <HomeContent />
      <Footer data={response} />
    </main>
  )
}
