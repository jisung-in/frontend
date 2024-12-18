import Service from "../Service";
import { TalkRoomRequestProps, TalkRoomsProps } from "./TalkRoomService.types";

class TalkRoomService extends Service {
  async getTalkRooms({
    page,
    size,
    order,
    search,
    sortbydate,
  }: TalkRoomRequestProps) {
    const { data } = await this.http.get<TalkRoomsProps>(
      `/v1/talk-rooms?page=${page}&size=${size}&order=${order}&search=${search}&day=${sortbydate}`,
    );
    return data;
  }
}

const talkRoomService = new TalkRoomService();
export default talkRoomService;
