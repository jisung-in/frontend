import {
  dehydrate,
  QueryClient,
  QueryFunction,
  QueryKey,
} from "@tanstack/react-query";

interface QueryOptions<TQueryFnData = unknown> {
  queryKey: QueryKey;
  queryFn: QueryFunction<TQueryFnData>;
}

let queryClient: QueryClient | null = null;

const getQueryClient = (): QueryClient => {
  if (!queryClient) {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 5000, // 5초 마다 신선한 데이터로 교체
          throwOnError: true,
          gcTime: 5 * 60 * 1000, // 캐시 데이터 5분 유지
          refetchOnWindowFocus: false, // 포커스 전환 시 리패칭 방지
          refetchOnMount: false, // 컴포넌트가 마운트될 때 리패칭 방지
        },
      },
    });
  }
  return queryClient;
};
export default getQueryClient;

// 단일 쿼리에 대한 dehydrated 쿼리 검색
export const getDehydratedQuery = async <TQueryFnData>({
  queryKey,
  queryFn,
}: QueryOptions<TQueryFnData>) => {
  const queryClient = getQueryClient();
  try {
    await queryClient.prefetchQuery({ queryKey, queryFn, staleTime: 5000 });

    const { queries } = dehydrate(queryClient);
    if (!queries) {
      throw new Error(`쿼리를 찾을 수 없습니다: ${queryKey}`);
    }
    return dehydrate(queryClient);
  } catch (error) {
    console.error(`쿼리 ${queryKey} 프리페치 중 오류 발생:`, error);
    throw error;
  }
};

// 여러 쿼리에 대한 dehydrated 쿼리 객체들을 검색
export const getDehydratedQueries = async <T extends QueryOptions[]>(
  queries: T,
) => {
  const queryClient = getQueryClient();
  try {
    await Promise.all(
      queries.map(({ queryKey, queryFn }) =>
        queryClient.prefetchQuery({ queryKey, queryFn }),
      ),
    );
    return dehydrate(queryClient);
  } catch (error) {
    console.error("쿼리 프리페치 중 오류 발생:", error);
    throw error;
  }
};
