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
  }),
};
