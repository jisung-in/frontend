"use client";
import NextArrow from "@/assets/img/next-arrow.svg";
import PrevArrow from "@/assets/img/prev-arrow.svg";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface PagiNationProps {
  totalItems: number;
  postPage: number;
  link: string;
}

const Pagination = ({ totalItems, postPage, link }: PagiNationProps) => {
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
  }, [totalItems, postPage, totalPages]);

  const pageSize = 5;
  const currentPageGroup = Math.ceil(currentPage / pageSize);
  const startPage = (currentPageGroup - 1) * pageSize + 1;
  const endPage = Math.min(currentPageGroup * pageSize, totalPages);

  const changePage = (number: number) => {
    if (number < 1 || number > totalPages) return;
    setCurrentPage(number);
    const newLink = `${link.split("&page=")[0]}&page=${number}`;
    router.push(newLink);
  };

  const pageNumber = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumber.push(i);
  }

  return (
    <div className="flex items-center justify-center mt-[59px] mb-[70px]">
      <div className="mr-[17px]">
        {currentPage > 1 && (
          <Link
            href={`${link.split("&page=")[0]}&page=${currentPage - 1}`}
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
            <Link
              className="bg-[#80685D] rounded-[5px] text-white px-[17px] py-[12px]"
              passHref
              href="#"
            >
              {pageNum}
            </Link>
          ) : (
            <Link
              className="px-[17px] py-[12px]"
              href={`${link.split("&page=")[0]}&page=${pageNum}`}
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
            href={`${link.split("&page=")[0]}&page=${currentPage + 1}`}
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
