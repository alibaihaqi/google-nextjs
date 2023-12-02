import Link from 'next/link'

export default function SearchEmpty() {
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
