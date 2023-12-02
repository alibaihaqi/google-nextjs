import SearchAbout from '@/components/Search/Common/SearchAbout'
import SearchPaginationButtons from '@/components/Search/Common/SearchPaginationButtons'
import WebSearchItems from '@/components/Search/Web/WebSearchItems'

import { GoogleCustomSearchApi } from '@/services/google/search'

export default async function SearchWebPage(ctx: any) {
  const getSearchData = await GoogleCustomSearchApi({
    query: ctx.searchParams?.searchTerm || '',
    start: ctx.searchParams?.start || 1,
  })

  return (
    <main className='flex flex-1 flex-col px-8'>
      <SearchAbout searchInfo={getSearchData?.searchInformation} />

      <WebSearchItems items={getSearchData.items} />

      <SearchPaginationButtons queries={getSearchData.queries} />
    </main>
  )
}
