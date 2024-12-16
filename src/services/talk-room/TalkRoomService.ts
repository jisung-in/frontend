import Service from "../Service";
import { TalkRoomRequestProps, TalkRoomsProps } from "./TalkRoomService.types";

class TalkRoomService extends Service {
  async getRecentTalkRooms({
    size = 4,
    order = "recent",
    search = "",
    sortbydate = "",
  }: TalkRoomRequestProps) {
    const { data } = await this.http.get<TalkRoomsProps>(
      `/v1/talk-rooms?page=1&size=${size}&order=${order}&search=${search}&day=${sortbydate}`,
    );
    return data;
  }

  async getRecommendTalkRooms({
    size = 4,
    order = "recommend",
    search = "",
    sortbydate = "",
  }: TalkRoomRequestProps) {
    const { data } = await this.http.get<TalkRoomsProps>(
      `/v1/talk-rooms?page=1&size=${size}&order=${order}&search=${search}&day=${sortbydate}`,
    );
    return data;
  }
}

const talkRoomService = new TalkRoomService();
export default talkRoomService;
