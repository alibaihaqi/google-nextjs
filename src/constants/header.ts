import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai'

import { IHeaderOption } from '@/interfaces/common/header'

export const HEADER_OPTIONS: IHeaderOption[] = [
  {
    name: 'All',
    icon: AiOutlineSearch,
    pathname: '/search/web',
  },
  {
    name: 'Images',
    icon: AiOutlineCamera,
    pathname: '/search/image',
  },
]