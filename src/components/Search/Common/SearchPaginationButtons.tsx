'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

export default function SearchPaginationButtons({ queries }: any) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const term = searchParams.get('searchTerm') || ''
  const currentIndex = queries.request[0].startIndex || 1

  const renderPreviousButton = () => {
    if (currentIndex === 1) return null

    return (
      <Link
        href={`${pathname}?searchTerm=${term}&start=${queries?.previousPage[0].startIndex}`}
        className='flex items-center space-x-2'
      >
        <BsChevronLeft />
        <p>Previous</p>
      </Link>
    )
  }

  return (
    <section className='flex justify-center space-x-4 pt-4 pb-10'>
      { renderPreviousButton() }

      <Link
        href={`${pathname}?searchTerm=${term}&start=${queries?.nextPage[0].startIndex}`}
        className='flex items-center space-x-2'
      >
        <p>Next</p>
        <BsChevronRight />
      </Link>
    </section>
  )
}
