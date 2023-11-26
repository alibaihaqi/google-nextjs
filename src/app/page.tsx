import HomeContent from '@/components/Home/HomeContent'
import HomeHeader from '@/components/Home/HomeHeader'

export default function Home() {
  return (
    <main className='flex flex-col min-h-[100svh]'>
      <HomeHeader />
      <HomeContent />
    </main>
  )
}
