import SearchAbout from '@/components/Search/Common/SearchAbout'
import WebSearchItems from '@/components/Search/Web/WebSearchItems'
import { GoogleCustomSearchApi } from '@/services/google/search'

export default async function SearchWebPage(ctx: any) {
  const getSearchData = await GoogleCustomSearchApi({
    query: ctx.searchParams?.searchTerm || '',
  })

  return (
    <main className='flex flex-1 flex-col px-8'>
      <SearchAbout searchInfo={getSearchData?.searchInformation} />

      <WebSearchItems items={getSearchData.items} />
    </main>
  )
}
