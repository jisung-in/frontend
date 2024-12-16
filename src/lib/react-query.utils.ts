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
          staleTime: 60 * 1000, // 1분
          throwOnError: true,
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
    await queryClient.prefetchQuery({ queryKey, queryFn });

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
