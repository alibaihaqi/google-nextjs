'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState, ChangeEvent, MouseEvent } from 'react'

import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'

import { getGeneratedWord } from '@/utils/words'

export default function HomeSearch() {
  const router = useRouter()
  const [input, setInput] = useState('')
  const [isDisableButton, setIsDisableButton] = useState(false)
  
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const onSubmitFormHandler = (event: ChangeEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (!input.trim()) return

    router.push(`/search/web?searchTerm=${input}`)
  }

  const onHandleRandomSearch = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsDisableButton(true)

    router.push(`/search/web?searchTerm=${getGeneratedWord}`)
    setIsDisableButton(false)
  }
  
  return (
    <>
      <form
        autoComplete={'off'}
        className={'s-form-search'}
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

        <button
          className='s-button'
          disabled={isDisableButton}
          onClick={onHandleRandomSearch}
        >
          {
            isDisableButton ? (
              <Image
                alt='spinner'
                className='s-spinner'
                src={'/spinner.svg'}
                height={24}
                width={24}
              />
            ) : <span>I&apos;m Feeling Lucky</span>
          }
        </button>
      </div>
    </>
  )
}
