import { IWebSearchAboutProps } from "@/interfaces/google/search"

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
