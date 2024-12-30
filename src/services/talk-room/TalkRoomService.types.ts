export interface EachTalkRoomData {
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

export interface AllTalkRoomData {
  content: EachTalkRoomData[];
  hasContent: boolean;
  number: number;
  size: number;
  isFirst: boolean;
  isLast: boolean;
}

export interface TalkRoomsTotalData {
  code: number;
  data: AllTalkRoomData;
  message: string;
  status: string;
}

export interface RelatedTalkRoomsRequestProps {
  isbn: string;
  page: number;
  size: number;
}

export interface AllRelatedTalkRoomsData {
  queryResponse: [
    {
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
      registeredDateTime?: string;
      creatorId: number;
    },
  ];
  totalCount: number;
  size: number;
}

export interface RelatedTalkRoomsTotalData {
  code: number;
  data: AllRelatedTalkRoomsData;
  message: string;
  status: string;
}
