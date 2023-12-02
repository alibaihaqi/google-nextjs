export interface ISearchRequest {
  query: string;
  isSearchImage?: boolean;
  start?: number,
}

export interface ISearchInfo {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string
}

export interface IWebSearchAboutProps {
  searchInfo: ISearchInfo
}

export interface IWebSearchItem {
  cacheId: string;
  displayLink: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  htmlSnippet: string;
  htmlTitle: string;
  kind: string;
  link: string;
  pagemap: any;
  snippet: string;
  title: string;
}

export interface IImageInfo {
  contextLink: string;
  height: number;
  width: number;
  byteSize: number;
  thumbnailLink: string;
  thumbnailHeight: number;
  thumbnailWidth: number;
}

export interface IImageSearchItem {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  mime: string;
  fileFormat: string;
  image: IImageInfo;
}

export type ISearchItemsProps<T> = {
  items: T[]
}