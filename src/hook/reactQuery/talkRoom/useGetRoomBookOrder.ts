import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type param = {
  page: number;
  size: number;
  order?: string;
};

type TalkRoomBookOrder = {
  isbn: string;
  title: string;
  publisher: string;
  thumbnail: string;
  authors: string[];
  dateTime: string;
};

export const useGetRoomBookOrder = ({
  page = 1,
  size = 10,
  order = "recent",
}: param) => {
  return useQuery<TalkRoomBookOrder[]>({
    queryKey: ["talkroom", "order", page, size, order],
    queryFn: () =>
      axiosInstance
        .get(`/v1/books?page=${page}&size=${size}&order=${order}`)
        .then(({ data }) => data.queryResponse),
    throwOnError: true,
    // 데이터 및 캐시 유효 시간 설정
    staleTime: 1000 * 60 * 30, // 최신 데이터 유지 시간 30분, 어느정도 활성화 시 5분, 많아지면 제거(기본 값 즉시)
    gcTime: 1000 * 60 * 60, // 캐시 데이터의 유효 시간 60분, 어느정도 활성화 시 10분, 사용자가 많아지면 제거(기본 값 5분)
    refetchOnWindowFocus: false, // 포커스 전환 시 리패칭 방지
    refetchOnMount: false, // 컴포넌트가 마운트될 때 리패칭 방지
  });
};
