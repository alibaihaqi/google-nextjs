import WebSearchAbout from '@/components/WebSearch/WebSearchAbout'
import WebSearchItems from '@/components/WebSearch/WebSearchItems'
import { GoogleCustomSearchApi } from '@/services/google/search'

export default async function SearchWebPage(ctx: any) {
  const getSearchData = await GoogleCustomSearchApi(ctx.searchParams?.searchTerm || '')

  return (
    <main className='flex flex-1 flex-col px-8'>
      <WebSearchAbout searchInfo={getSearchData?.searchInformation} />

      <WebSearchItems items={getSearchData.items} />
    </main>
  )
}
