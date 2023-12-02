'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'

export default function HeaderSearchBox() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get('searchTerm')

  const [term, setTerm] = useState(searchTerm || '')

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target?.value)
  }

  const onSubmitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!term.trim()) return
    router.push(`/search/web?searchTerm=${term}`)
  }

  const onDeleteTerm = () => {
    setTerm('')
  }

  return (
    <form
      className={'s-header-search-box'}
      onSubmit={onSubmitHandler}
    >
      <input
        className={`
          bg-transparent outline-none flex-1
        `}
        onChange={onChangeInputHandler}
        type='text'
        value={term}
      />
      <RxCross2
        className={`
          text-2xl text-gray-500 cursor-pointer
          sm:mr-2 ${ !term ? 'hidden' : null }
        `}
        onClick={onDeleteTerm}
      />
      <BsFillMicFill
        className={`
          text-4xl text-blue-500 pl-4 sm:mr-2
          border-l-2 border-gray-300 hidden sm:inline-flex
        `}  
      />
      <AiOutlineSearch
        className="text-2xl text-blue-500 cursor-pointer hidden sm:inline-flex" />
    </form>
  )
}
