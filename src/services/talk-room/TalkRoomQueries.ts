import TalkRoomService from "./TalkRoomService";

const talkRoomServiceQueryKey = {
  getRecentTalkRooms: ["recent-talkroom"] as const,
  getRecommendTalkRooms: ["recommend-talkroom"] as const,
};

export const TalkRoomQueryOptions = {
  getRecentTalkRooms: ({ size = 4, order = "recent", search = "" }) => ({
    queryKey: talkRoomServiceQueryKey.getRecentTalkRooms,
    queryFn: () =>
      TalkRoomService.getRecentTalkRooms({
        size,
        order,
        search,
        sortbydate: "",
      }),
    staleTime: 5000, // 5초 마다 신선한 데이터로 교체
    gcTime: 5 * 60 * 1000, // 캐시 데이터 5분 유지
    refetchOnWindowFocus: false, // 포커스 전환 시 리패칭 방지
    refetchOnMount: false, // 컴포넌트가 마운트될 때 리패칭 방지
  }),
  getRecommendTalkRooms: ({ size = 4, order = "recommend", search = "" }) => ({
    queryKey: talkRoomServiceQueryKey.getRecommendTalkRooms,
    queryFn: () =>
      TalkRoomService.getRecommendTalkRooms({
        size,
        order,
        search,
        sortbydate: "",
      }),
    staleTime: 5000, // 5초 마다 신선한 데이터로 교체
    gcTime: 5 * 60 * 1000, // 캐시 데이터 5분 유지
    refetchOnWindowFocus: false, // 포커스 전환 시 리패칭 방지
    refetchOnMount: false, // 컴포넌트가 마운트될 때 리패칭 방지
  }),
};
