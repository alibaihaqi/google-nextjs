'use client'

import { useQuery } from '@tanstack/react-query'

import { FOOTER_LIST } from '@/constants/footer'
import { GetClientCountryApi } from '@/services/location';

export default function Footer() {
  const { isLoading, data } = useQuery({
    queryKey: ['country'],
    queryFn: GetClientCountryApi,
  })

  return (
    <footer
      className={'s-footer'}
    >
      <p className='px-8 py-3 border-b border-[#3c4043]'>
        { isLoading || !data?.country ? 'Country' : data?.country }
      </p>

      <div
        className={`
          flex flex-col sm:flex-row justify-around
          px-8 py-3 space-y-7s sm:space-y-0
        `
      }>
        { FOOTER_LIST.map((info, idx) => {
          return (
            <ul
              key={idx}
              className='flex flex-wrap justify-center items-center space-x-6 py-2 sm:py-0'
            >
              { info.map((data, dtidx) => {
                return (
                  <li
                    key={dtidx}
                    className='py-2 sm:py-0'
                  >
                    { data.title }
                  </li>
                )
              }) }
            </ul>
          )
        }) }
      </div>
    </footer>
  )
}
