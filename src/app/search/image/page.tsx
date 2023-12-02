import SearchAbout from '@/components/Search/Common/SearchAbout'
import SearchPaginationButtons from '@/components/Search/Common/SearchPaginationButtons'
import ImageSearchItems from '@/components/Search/Image/ImageSearchItems'

import { GoogleCustomSearchApi } from '@/services/google/search'

export default async function SearchImagePage(ctx: any) {
  const getSearchData = await GoogleCustomSearchApi({
    query: ctx.searchParams?.searchTerm || '',
    start: ctx.searchParams?.start || 1,
    isSearchImage: true,
  })

  return (
    <main className='flex flex-1 flex-col px-8'>
      <SearchAbout searchInfo={getSearchData?.searchInformation} />

      <ImageSearchItems items={getSearchData?.items} />

      <SearchPaginationButtons queries={getSearchData.queries} />
    </main>
  )
}
