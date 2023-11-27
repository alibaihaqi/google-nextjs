import Image from 'next/image'

import HomeSearch from '@/components/Home/HomeSearch'
import { GOOGLE_LOGO } from '@/constants/logo'

export default function HomeContent() {
  return (
    <section className='flex flex-1 flex-col items-center mt-32 pb-32'>
      <Image
        alt={GOOGLE_LOGO.alt}
        src={GOOGLE_LOGO.url}
        width={272}
        height={92}
        priority
      />

      <HomeSearch />
    </section>
  )
}
