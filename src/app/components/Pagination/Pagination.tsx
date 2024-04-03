"use client";
import NextArrow from "@/assets/img/next-arrow.svg";
import PrevArrow from "@/assets/img/prev-arrow.svg";
import Link from "next/link";
import { useState } from "react";

interface PagiNationProps {
  totalItems?: number;
  pageCount?: number;
  postPage?: number;
  link?: string;
}

const Pagination = ({
  totalItems = 0,
  pageCount = 0,
  postPage = 0,
  link = "",
}: PagiNationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const pageSize = 5;
  const currentPageGroup = Math.ceil(currentPage / pageSize);
  const startPage = (currentPageGroup - 1) * pageSize + 1;
  const endPage = Math.min(
    currentPageGroup * pageSize,
    Math.ceil(totalItems / postPage),
  );

  const changePage = (number: number) => {
    setCurrentPage(number);
  };

  const pageNumber = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumber.push(i);
  }

  return (
    <div className="flex items-center justify-center mt-[59px] mb-[70px]">
      <div className="mr-[17px]">
        {pageCount > 1 && currentPage !== 1 && (
          <Link
            href={`${link}page=${currentPage - 1}`}
            onClick={() => changePage(currentPage - 1)}
            passHref
          >
            <PrevArrow />
          </Link>
        )}
      </div>
      {[
        pageNumber.map((pageNum: number) => (
          <>
            {
              <div
                key={pageNum}
                className="mr-[17px] text-[15px] text-[#A3A3A3]"
              >
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
                    href={`${link}page=${pageNum}`}
                    onClick={() => changePage(pageNum)}
                    passHref
                  >
                    {pageNum}
                  </Link>
                )}
              </div>
            }
          </>
        )),
      ]}
      <div>
        {currentPage < pageCount && (
          <Link
            href={`${link}page=${currentPage + 1}`}
            onClick={() => changePage(currentPage + 1)}
            passHref
          >
            <NextArrow />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;
