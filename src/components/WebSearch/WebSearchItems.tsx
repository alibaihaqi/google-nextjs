import Link from 'next/link'
import { IWebSearchProps } from '@/interfaces/google/search'

export default function WebSearchItems({ items }: IWebSearchProps) {
  const renderSearchItems = (): JSX.Element | JSX.Element[] => {
    if (!items?.length) {
      return (
        <div className='flex flex-col pt-10 space-y-4 items-center text-center'>
          <h1 className='text-2xl'>
            No results found
          </h1>
          
          <p className='text-sm'>
            Try search for something else or back to the homepage.
          </p>

          <Link
            className='bg-blue-500 px-8 py-2 rounded'
            href={"/"}
          >
            Home  
          </Link>
        </div>
      )
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
            <p className='text-lg truncate text-blue-300 hover:underline'>
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
    <section className="flex flex-1 flex-col pt-4 pb-10 space-y-5 w-full sm:max-w-[75%]">
      { renderSearchItems() }
    </section>
  )
}
