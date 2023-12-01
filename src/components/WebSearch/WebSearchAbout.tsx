
interface ISearchInfo {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string
}

interface IWebSearchAboutProps {
  searchInfo: ISearchInfo
}

export default function WebSearchAbout({ searchInfo }: IWebSearchAboutProps) {
  const renderSearchInfo = () => {
    if (searchInfo.formattedSearchTime && searchInfo.formattedTotalResults) {
      return (
        <p className="text-xs text-gray-500">
          About {searchInfo?.formattedTotalResults} results ({ searchInfo?.formattedSearchTime } seconds)
        </p>
      )
    }

    return null
  }
  return (
    <>
      { renderSearchInfo() }
    </>
  )
}
