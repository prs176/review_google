import { Score } from "./score";
import { Subject } from "./subject";
import { SimpleUser } from "./user";

export interface Review {
  id: number;
  title: string;
  content: string;
  raiting: number;
  scores: Score[];
  user: SimpleUser;
  good: number;
  bad: number;
  isMine: boolean;
  isGood: boolean;
  isBad: boolean;
}

export interface ReviewIncludeSubject {
  id: number;
  title: string;
  content: string;
  raiting: number;
  scores: Score[];
  user: SimpleUser;
  subject: Subject;
  good: number;
  bad: number;
  isMine: boolean;
  isGood: boolean;
  isBad: boolean;
}
