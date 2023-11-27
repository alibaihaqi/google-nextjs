import { FOOTER_LIST } from '@/constants/footer'

interface IFooterProps {
  data: any;
}

export default function Footer({ data }: IFooterProps) {
  const countryName = data.success ? data.location?.countryName : 'Country'

  return (
    <footer
      className={`
        absolute bottom-0 text-sm text-gray-500
        bg-[#f2f2f2] min-w-full
      `}
    >
      <p className='px-8 py-3 border'>
        { countryName }
      </p>

      <div
        className={`
          flex flex-col sm:flex-row justify-between
          px-8 py-3 space-y-7s sm:space-y-0
        `
      }>
        { FOOTER_LIST.map((info, idx) => {
          return (
            <ul
              key={idx}
              className='flex items-center space-x-6 py-2 sm:py-0'
            >
              { info.map((data, dtidx) => {
                return (
                  <li key={dtidx}>
                    { data.title }
                  </li>
                )
              }) }
            </ul>
          )
        }) }
      </div>
    </footer>
  )
}
