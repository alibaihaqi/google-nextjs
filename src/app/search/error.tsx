'use client'

import { useEffect } from 'react'

interface IErrorSearchProps {
  error: Error;
  reset: () => void;
}

export default function ErrorSearch({ error, reset }: IErrorSearchProps) {
  useEffect(() => {
    console.log('Error: ', error)
  }, [error])

  return (
    <div className='flex flex-1 flex-col items-center justify-center space-y-4'>
      <h1>Something went wrong</h1>

      <p className='text-sm text-red-700'>Error: { error.message }</p>
      
      <button
        className='bg-blue-500 px-4 py-2 rounded text-white'
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  )
}
