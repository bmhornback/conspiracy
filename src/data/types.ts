export type Category = 'conspiracy' | 'cryptid' | 'paranormal' | 'ufo' | 'government' | 'historical';

export type ClearanceLevel = 'unclassified' | 'confidential' | 'secret' | 'top-secret';

export interface Source {
  title: string;
  author?: string;
  publication?: string;
  year?: number;
  url?: string;
  type: 'book' | 'article' | 'government' | 'documentary' | 'witness' | 'academic' | 'news';
}

export interface Theory {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  clearanceLevel: ClearanceLevel;
  tags: string[];
  dateAdded: string;
  caseNumber: string;
  mainstreamDescription: string;
  confidentialDescription: string;
  forArguments: string[];
  againstArguments: string[];
  sources: Source[];
  thumbnailIcon: string;
}
