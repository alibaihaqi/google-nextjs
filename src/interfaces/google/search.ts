export interface ISearchItem {
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

export interface IWebSearchProps {
  items: ISearchItem[]
}