import HomeContent from '@/components/Home/HomeContent'
import HomeHeader from '@/components/Home/HomeHeader'
import Footer from '@/components/Shared/Footer'

export default async function Home() {
  return (
    <main className='flex flex-col min-h-[100svh]'>
      <HomeHeader />
      <HomeContent />
      <Footer />
    </main>
  )
}
