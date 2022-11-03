export interface Review {
  idx: number;
  subjectIdx: number;
  title: string;
  userId: string;
  content: string;
  raiting: number;
  scores: Score[];
}

export interface Score {
  idx: number;
  reviewIdx: number;
  name: string;
  score: number;
}
