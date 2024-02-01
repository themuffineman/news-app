export interface latestNewsTypes {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  categories: string | string[]; 
  relevance_score: number | null; 
  locale?: string;
}

export interface HeadlineItem {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}


export interface NewsCardProps {
  news: latestNewsTypes;
}

export interface SourcesCardProps{
  onClick?: ()=> void
  url?: string
  faviconUrl?: string
}

export interface Source {
  source_id: string;
  domain: string;
  language: string;
  locale: string | null;
  categories: string[];
  faviconUrl?: string;
}

export type SourceList = Source[];

export interface DropdownLinks {
  name: string;
  svg?: string;
  onClick?: string;
}

export interface User {
  userId?: number;
  name?: string;
  email?: string;
  password?: string;
}
