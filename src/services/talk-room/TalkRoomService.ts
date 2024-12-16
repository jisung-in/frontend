import Service from "../Service";

export interface TalkRoomProps {
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

interface TalkRoomRequestProps {
  page?: number;
  size?: number;
  order?: string;
  search?: string;
  sortbydate?: "1m" | "1w" | "1d" | "";
}

interface ManyTalkRoomRequestProps {
  page?: number;
  size?: number;
  order?: string;
}

interface ManyTalkRoomProps {
  isbn: string;
  title: string;
  publisher: string;
  thumbnail: string;
  authors: string[];
  dateTime: string;
}

class TalkRoomService extends Service {
  async getRecentTalkRooms({
    size = 4,
    order = "recent",
    search = "",
    sortbydate = "",
  }) {
    const { data } = await this.http.get(
      `/v1/talk-rooms?page=1&size=${size}&order=${order}&search=${search}&day=${sortbydate}`,
    );
    return data;
  }

  async getRecommendTalkRooms({
    size = 4,
    order = "recommend",
    search = "",
    sortbydate = "",
  }) {
    const { data } = await this.http.get(
      `/v1/talk-rooms?page=1&size=${size}&order=${order}&search=${search}&day=${sortbydate}`,
    );
    return data;
  }
}

const talkRoomService = new TalkRoomService();
export default talkRoomService;
