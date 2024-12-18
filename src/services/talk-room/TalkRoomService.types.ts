export interface EachTalkRoomProps {
  id: number;
  profileImage: string;
  username: string;
  title: string;
  content: string;
  bookName: string;
  bookAuthor: string;
  bookThumbnail: string;
  likeCount: number;
  readingStatuses: string[];
  registeredDateTime: string;
  creatorId: number;
}

export interface TalkRoomRequestProps {
  page: number;
  size?: number;
  order?: string;
  search?: string;
  sortbydate?: "1m" | "1w" | "1d" | "";
}

export interface TalkRoomInfoProps {
  content: EachTalkRoomProps[];
  hasContent: boolean;
  number: number;
  size: number;
  isFirst: boolean;
  isLast: boolean;
}

export interface TalkRoomsProps {
  code: number;
  data: TalkRoomInfoProps;
  message: string;
  status: string;
}
