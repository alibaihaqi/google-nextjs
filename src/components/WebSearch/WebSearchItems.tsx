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
        <div key={idx}>
          <Link href={item.link}>
            <p>{ item.title }</p>
          </Link>
        </div>
      )
    })
  }

  return (
    <section className="flex flex-1 flex-col py-2">
      { renderSearchItems() }
    </section>
  )
}
