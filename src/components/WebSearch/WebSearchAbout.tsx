
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
  return (
    <>
      <p className="text-xs text-gray-600">
        About {searchInfo.formattedTotalResults} results ({ searchInfo.formattedSearchTime } seconds)
      </p>
    </>
  )
}
