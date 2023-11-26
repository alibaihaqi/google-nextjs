'use client'

import { useRouter } from 'next/navigation'
import { useState, ChangeEvent, MouseEvent } from 'react'

import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'

export default function HomeSearch() {
  const router = useRouter()
  const [input, setInput] = useState('')
  
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const onSubmitFormHandler = (event: ChangeEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (!input.trim()) return

    router.push(`/search/web?searchTerm=${input}`)
  }
  
  return (
    <>
      <form
        className={
          `flex items-center w-full my-5 mx-auto  px-5 py-3
           border border-gray-200 rounded-full
           max-w-[90%] sm:max-w-xl lg:max-w-2xl
           focus-within:bg-[#303134] hover:bg-[#303134]
           hover:shadow-md transition-shadow`
        }
        onSubmit={(event: ChangeEvent<HTMLFormElement>) => onSubmitFormHandler(event)}
      >
        <AiOutlineSearch className={'text-xl text-gray-500 mr-3'} />

        <input
          className='flex-1 focus:outline-none bg-inherit'
          id='search'
          name='search'
          onChange={onChangeInputHandler}
          type='text'
          value={input}
        />

        <BsFillMicFill className={"text-lg"} />
      </form>

      <div className='flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row justify-center mt-3'>
        <button
          className='s-button'
          onClick={(event: MouseEvent<HTMLButtonElement>) => onSubmitFormHandler(event)}
        >
          Google Search
        </button>

        <button className='s-button'>
          I&apos;m Feeling Lucky
        </button>
      </div>
    </>
  )
}
