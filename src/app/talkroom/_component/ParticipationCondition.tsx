"use client";

import { Button } from "@/app/components/Button/Button";
import { useGetBookState } from "@/hook/reactQuery/book/useGetBookState";
import { useGetOneRoom } from "@/hook/reactQuery/talkRoom/useGetOneRoom";
import { useLogin } from "@/hook/useLogin";
import Link from "next/link";
import React from "react";

interface ParticipationConditionProps {
  id: number;
}

interface BookProps {
  id: number;
  bookIsbn: string;
  status: string;
}

const ParticipationCondition: React.FC<ParticipationConditionProps> = ({
  id,
}) => {
  const { isLoggedIn } = useLogin();
  const { data: getBookState } = isLoggedIn ? useGetBookState() : { data: [] };
  const { data: talkroomOne, isLoading: isTalkroomOne } = useGetOneRoom({
    talkRoomId: id,
  });

  const isCondition = () =>
    Array.isArray(getBookState) &&
    getBookState.some(
      (book: BookProps) =>
        book.bookIsbn === talkroomOne?.bookIsbn &&
        talkroomOne?.readingStatuses.includes(book.status),
    );
  return (
    <>
      {isLoggedIn && isCondition() ? (
        <>
          <h3 className="text-center font-SpoqaHanSansNeo font-bold text-[#80685D] 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base 2xl:mb-10 xl:mb-8 lg:mb-6 mb-4">
            참가 조건에 부합하여 의견 작성이 가능합니다
          </h3>
          <Button className="2xl:w-[350px] 2xl:h-[70px] xl:w-[300px] xl:h-[65px] lg:w-[250px] lg:h-[60px] md:w-[200px] md:h-[50px] sm:h-10 font-Pretendard font-semibold 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg">
            <Link className="w-full" href={`/talkroom/comment/${id}`}>
              등록하기
            </Link>
          </Button>
        </>
      ) : (
        <>
          <h3 className="font-SpoqaHanSansNeo font-bold text-[#656565] 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm 2xl:mb-10 xl:mb-8 lg:mb-6 mb-4">
            참가 조건에 부합하지 않습니다
          </h3>
          <Button
            variant={"notCondition"}
            className="2xl:w-[350px] 2xl:h-[70px] xl:w-[300px] xl:h-[65px] lg:w-[250px] lg:h-[60px] md:w-[200px] md:h-[50px] sm:h-10 font-Pretendard font-semibold 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg"
          >
            등록하기
          </Button>
        </>
      )}
    </>
  );
};

export default ParticipationCondition;
