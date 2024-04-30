import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

interface param {
  page: number;
  size: number;
  order?: string;
  search?: string;
}
// export const useGetTalkRoomPopular = () => {
//   return useQuery<any>({
//     queryKey: ["talkroom", "popular"],
//     queryFn: () =>
//       axiosInstance
//         .get("/v1/talk-rooms?page=1&size=10&order=RECENT&search=")
//         .then(({ data }) => data.response),
//     throwOnError: true,
//   });
// };
export const useGetTalkRoomPopular = ({
  page = 1,
  size = 10,
  order = "RECENT",
  search = "",
}: param) => {
  return useQuery<any>({
    queryKey: ["talkroom", "popular"],
    queryFn: () =>
      axiosInstance
        .get(
          `/v1/talk-rooms?page=${page}&size=${size}&order=${order}&search=${search}`,
        )
        .then(({ data }) => data),
    throwOnError: true,
  });
};
