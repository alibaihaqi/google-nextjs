import Image from 'next/image'
import HomeSearch from '@/components/Home/HomeSearch'

export default function HomeContent() {
  return (
    <section className='flex flex-1 flex-col items-center mt-32'>
      <Image
        alt={'Google Logo'}
        src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png'}
        width={272}
        height={92}
      />

      <HomeSearch />
    </section>
  )
}
