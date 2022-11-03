export interface Sentence {
  sentence: string;
  keywords: Keyword[];
}

export interface Keyword {
  word: string;
  freq: number;
}
