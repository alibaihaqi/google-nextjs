import Link from 'next/link'

import SearchEmpty from '@/components/Search/Common/SearchEmpty'
import { ISearchItemsProps, IImageSearchItem } from '@/interfaces/google/search'

export default function ImageSearchItems({ items }: ISearchItemsProps<IImageSearchItem>) {
  const renderSearchItems = (): JSX.Element | JSX.Element[] => {
    if (!items?.length) {
      return <SearchEmpty />
    }

    return items.map((item, idx: number) => {
      return (
        <div
          key={idx}
          className=''
        >
          <div className='group'>
            <Link href={item.image.contextLink}>
              <img
                alt={item.title}
                className='h-80 sm:h-60 group-hover:shadow-xl w-full object-contain transition-shadow'
                src={item.link}
              />
            </Link>

            <Link href={item.image.contextLink}>
              <h2 className="group-hover:underline truncate text-lg pt-2 m-0">
                { item.title }
              </h2>
            </Link>

            <Link href={item.image.contextLink}>
              <p className="group-hover:underline text-sm text-gray-600">
                {item.displayLink}
              </p>
            </Link>
          </div>
        </div>
      )
    })
  }

  return (
    <div className='sm:pb-24 pb-40  mt-8'>
      <section
        className={`
          grid grid-cols sm:grid-cols-3 lg:grid-cols-4
          xl:grid-cols-5 space-x-4 px-3 sm:gap-x-4 gap-y-8
        `}
      >
        { renderSearchItems() }
      </section>
    </div>
  )
}
