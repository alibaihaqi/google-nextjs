import SearchAbout from '@/components/Search/Common/SearchAbout'
import ImageSearchItems from '@/components/Search/Image/ImageSearchItems'
import { GoogleCustomSearchApi } from '@/services/google/search'

export default async function SearchImagePage(ctx: any) {
  const getSearchData = await GoogleCustomSearchApi({
    query: ctx.searchParams?.searchTerm || '',
    isSearchImage: true,
  })

  return (
    <main className='flex flex-1 flex-col px-8'>
      <SearchAbout searchInfo={getSearchData?.searchInformation} />

      <ImageSearchItems items={getSearchData?.items} />
    </main>
  )
}
