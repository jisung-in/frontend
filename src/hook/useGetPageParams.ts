import { usePathname, useSearchParams } from "next/navigation";

export const useGetPageParams = () => {
  const currentUrl = usePathname();
  const params = useSearchParams();
  const pageParams = params.get("page");
  const page = Number(pageParams) ?? 1;

  return { currentUrl: currentUrl, page: page };
};
