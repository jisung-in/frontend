import TalkRoomService from "./TalkRoomService";
import { TalkRoomRequestProps } from "./TalkRoomService.types";

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
    refetchOnWindowFocus: false, // 포커스 전환 시 리패칭 방지
    refetchOnMount: false, // 컴포넌트가 마운트될 때 리패칭 방지
  }),
};
