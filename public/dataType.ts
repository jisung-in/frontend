export interface Book {
  id: number;
  rank: number;
  image: string;
  title: string;
  publisher: string;
  author: string;
  year: number;
}

export interface Recommend {
  id: number;
  image: string;
  title: string;
  author: string;
  talkTitle: string;
  userName: string;
  comment: string;
}

export interface TalkRoom {
  id: number;
  image: string;
  title: string;
  author: string;
  talkTitle: string;
  userName: string;
  comment: string;
}
