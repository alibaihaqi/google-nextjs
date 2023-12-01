'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { AiOutlineSearch } from 'react-icons/ai'

import { HEADER_OPTIONS } from '@/constants/header'
import { IHeaderOption } from '@/interfaces/common/header'

export default function HeaderSearchOptions() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const term = searchParams.get('searchTerm')

  const onHeaderOptionClick = (header: IHeaderOption) => {
    if (header.pathname === pathname) return

    router.push(`${header.pathname}?searchTerm=${term}`)
  }

  return (
    <div
      className={`
        flex space-x-2 justify-center md:justify-start
        pt-5 md:pl-32 border-b-[0.5px]
      `}
    >
      { HEADER_OPTIONS.map((header) => {
        const isActivePathname = pathname === header.pathname
        return (
          <div
            key={header.name}
            className={`
              flex items-center pb-3 px-2 space-x-1
              border-b-4 border-transparent
              active:text-blue-500 cursor-pointer
              ${isActivePathname && '!text-blue-600 !border-blue-600'}
            `}
            onClick={() => onHeaderOptionClick(header)}
          >
            <AiOutlineSearch className="text-md" />
            <p>{ header.name }</p>
          </div>

        )
      }) }
    </div>
  )
}
