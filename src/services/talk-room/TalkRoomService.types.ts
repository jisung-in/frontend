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
  page?: number;
  size?: number;
  order?: string;
  search?: string;
  sortbydate?: "1m" | "1w" | "1d" | "";
}

export interface TalkRoomsProps {
  code: number;
  data: {
    content: EachTalkRoomProps[];
    hasContent: boolean;
    isFirst: boolean;
    isLast: boolean;
    number: number;
    size: number;
  };
  message: string;
  status: string;
}
