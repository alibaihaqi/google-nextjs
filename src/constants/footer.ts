interface IFooterInfo {
  title: string;
  url?: string; // No include for now
}

export const FOOTER_LIST: IFooterInfo[][] = [
  [
    { title: 'About', url: '' },
    { title: 'Advertising', url: '' },
    { title: 'Business', url: '' },
    { title: 'How Search works', url: '' },
  ],
  [
    { title: 'Privacy', url: '' },
    { title: 'Terms', url: '' },
    { title: 'Settings', url: '' },
  ],
]