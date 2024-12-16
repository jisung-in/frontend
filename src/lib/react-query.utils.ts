import { dehydrate, QueryClient, QueryKey } from "@tanstack/react-query";

interface QueryProps {
  queryKey: QueryKey;
  queryFn: () => Promise<ResponseType>;
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

export const getDehydratedQuery = async <Q extends QueryProps[]>(
  queries: Q,
) => {
  const queryClient = getQueryClient();
  await Promise.all(
    queries.map(({ queryKey, queryFn }) =>
      queryClient.prefetchQuery({ queryKey, queryFn }),
    ),
  );

  return dehydrate(queryClient);
};
