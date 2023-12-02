import Link from 'next/link'

import SearchEmpty from '@/components/Search/Common/SearchEmpty'
import { ISearchItemsProps, IWebSearchItem } from '@/interfaces/google/search'

export default function WebSearchItems({ items }: ISearchItemsProps<IWebSearchItem>) {
  const renderSearchItems = (): JSX.Element | JSX.Element[] => {
    if (!items?.length) {
      return <SearchEmpty />
    }

    return items.map((item, idx: number) => {
      return (
        <div
          key={idx}
          className='flex flex-col space-y-1'
        >
          <p className='text-xs text-gray-400 text-ellipsis overflow-hidden'>
            { item.formattedUrl }
          </p>

          <Link href={item.link}>
            <p className='text-lg truncate text-blue-500 hover:underline'>
              { item.title }
            </p>
          </Link>

          <p className='text-sm'>
            { item.snippet }
          </p>
        </div>
      )
    })
  }

  return (
    <section
      className={`
        flex flex-1 flex-col pt-4 pb-10
        space-y-5 w-full sm:max-w-[75%]
      `}
    >
      { renderSearchItems() }
    </section>
  )
}
