import { Keyword } from "../../model/keyword";
import { Score } from "../../model/score";

export interface ReviewRequest {
  subjectId: number;
  title: string;
  content: string;
  raiting: number;
  scores: Score[];
  keywords: Keyword[];
}
