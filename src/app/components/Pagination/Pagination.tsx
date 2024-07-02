import NextArrow from "@/assets/img/next-arrow.svg";
import PrevArrow from "@/assets/img/prev-arrow.svg";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface PaginationProps {
  totalItems: number;
  postPage: number;
  link: string;
}

const Pagination = ({ totalItems, postPage, link }: PaginationProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageParam = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState<number>(
    Number(pageParam) || 1,
  );
  useEffect(() => {
    const pageParam = searchParams.get("page");
    if (pageParam) {
      setCurrentPage(Number(pageParam));
    }
  }, [searchParams]);

  const totalPages = Math.ceil(totalItems / postPage);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const changePage = (number: number) => {
    if (number < 1 || number > totalPages) return;
    setCurrentPage(number);
    const baseLink = link.split("?")[0];
    const params = new URLSearchParams(link.split("?")[1]);
    params.set("page", number.toString());

    const newLink = `${baseLink}?${params.toString()}`;
    router.push(newLink);
  };

  const pageSize = 5;
  const currentPageGroup = Math.ceil(currentPage / pageSize);
  const startPage = (currentPageGroup - 1) * pageSize + 1;
  const endPage = Math.min(currentPageGroup * pageSize, totalPages);

  const pageNumber = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumber.push(i);
  }

  return (
    <div className="flex items-center justify-center mt-[59px] mb-[70px]">
      <div className="mr-[17px]">
        {currentPage > 1 && (
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changePage(currentPage - 1);
            }}
            passHref
            key="prev"
          >
            <PrevArrow />
          </Link>
        )}
      </div>
      {pageNumber.map((pageNum: number) => (
        <div key={pageNum} className="mr-[17px] text-[15px] text-[#A3A3A3]">
          {currentPage === pageNum ? (
            <span className="text-[#80685D] bg-[#fff] border border-[#80685D] rounded-[5px] px-[17px] py-[12px]">
              {pageNum}
            </span>
          ) : (
            <Link
              className="px-[17px] py-[12px] border border-transparent rounded-[5px] hover:border-[#EAEAEA]"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                changePage(pageNum);
              }}
              passHref
            >
              {pageNum}
            </Link>
          )}
        </div>
      ))}

      <div>
        {currentPage < totalPages && (
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              changePage(currentPage + 1);
            }}
            passHref
            key="next"
          >
            <NextArrow />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;
