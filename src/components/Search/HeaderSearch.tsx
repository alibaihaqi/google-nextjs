import Image from 'next/image'
import Link from 'next/link'
import { RiSettings3Line } from 'react-icons/ri'
import { TbGridDots } from 'react-icons/tb'

import HeaderSearchBox from '@/components/Search/HeaderSearchBox'
import HeaderSearchOptions from '@/components/Search/HeaderSearchOptions'
import { GOOGLE_LOGO } from '@/constants/logo'

export default function HeaderSearch() {
  return (
    <header className='flex flex-col p-5 text-sm'>
      <div className='flex items-center justify-between space-x-4'>
        <Link href={'/'}>
          <Image
            alt={GOOGLE_LOGO.alt}
            src={GOOGLE_LOGO.url}
            height={30}
            width={92}
            priority
          />
        </Link>

        <div className='flex-1'>
          <HeaderSearchBox />
        </div>

        <div className='flex space-x-2 hidden md:inline-flex'>
          <RiSettings3Line className='s-header-icon' />
          <TbGridDots className='s-header-icon' />
        </div>

        <button
          className={`
            hidden sm:inline-flex bg-blue-500 text-white px-6 py-2 ml-2
            font-medium rounded-md hover:brightness-105
            hover:shadow-md transition-all
          `}>
          Sign In
        </button>
      </div>

      <HeaderSearchOptions />
    </header>
  )
}
