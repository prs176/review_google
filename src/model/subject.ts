export interface Subject {
  idx: number;
  image: string;
  category: CategoryToNumber;
  title: string;
  from: string;
  count: number;
}

export enum Category {
  FOOD = "음식" as any,
  STUFF = "물건" as any,
  MOVIE = "영화" as any,
  GAME = "게임" as any,
  PLACE = "장소" as any,
  PERSON = "사람" as any,
  ETC = "기타" as any,
}

export enum CategoryToNumber {
  FOOD = 1,
  STUFF = 2,
  MOVIE = 3,
  GAME = 4,
  PLACE = 5,
  PERSON = 6,
  ETC = 7,
}

export enum CategoryToColor {
  FOOD = "#F1C38D",
  STUFF = "#EC8D8D",
  MOVIE = "#76BDE5",
  GAME = "#F479E8",
  PLACE = "#93D492",
  PERSON = "#B792D4",
  ETC = "#CBCBCB",
}
