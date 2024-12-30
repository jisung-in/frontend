import TalkRoomService from "./TalkRoomService";
import {
  RelatedTalkRoomsRequestProps,
  TalkRoomRequestProps,
} from "./TalkRoomService.types";

export const TalkRoomQueryOptions = {
  getTalkRooms: ({
    page,
    size,
    order,
    search,
    sortbydate,
  }: TalkRoomRequestProps) => ({
    queryKey: ["talkrooms", { page, size, order, search, sortbydate }],
    queryFn: () =>
      TalkRoomService.getTalkRooms({
        page,
        size,
        order,
        search,
        sortbydate,
      }),
    staleTime: 5000, // 5초 마다 신선한 데이터로 교체
    gcTime: 5 * 60 * 1000, // 캐시 데이터 5분 유지
  }),
  getRelatedTalkRooms: ({
    isbn,
    page,
    size,
  }: RelatedTalkRoomsRequestProps) => ({
    queryKey: ["related-talkrooms", isbn, page, size],
    queryFn: () =>
      TalkRoomService.getRelatedTalkRooms({
        isbn,
        page,
        size,
      }),
    staleTime: 5000, // 5초 마다 신선한 데이터로 교체
    gcTime: 5 * 60 * 1000, // 캐시 데이터 5분 유지
  }),
};
