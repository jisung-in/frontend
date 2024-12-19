import Service from "../Service";
import {
  RelatedTalkRoomsRequestProps,
  RelatedTalkRoomsTotalData,
  TalkRoomRequestProps,
  TalkRoomsTotalData,
} from "./TalkRoomService.types";

class TalkRoomService extends Service {
  async getTalkRooms({
    page,
    size,
    order,
    search,
    sortbydate,
  }: TalkRoomRequestProps) {
    const { data } = await this.http.get<TalkRoomsTotalData>(
      `/v1/talk-rooms?page=${page}&size=${size}&order=${order}&search=${search}&day=${sortbydate}`,
    );
    return data;
  }
  async getRelatedTalkRooms({
    isbn,
    page,
    size,
  }: RelatedTalkRoomsRequestProps) {
    const { data } = await this.http.get<RelatedTalkRoomsTotalData>(
      `/v1/books/${isbn}/talk-rooms?page=${page}&size=${size}`,
    );
    return data;
  }
}

const talkRoomService = new TalkRoomService();
export default talkRoomService;
