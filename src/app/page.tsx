"use client";

import { BookMain } from "@/app/components/Book/Book";
import { CardMain } from "@/app/components/Card/Card";
import { CardHeaderMain } from "@/app/components/CardHeader/CardHeader";
import { ThemeMain } from "@/app/components/Theme/Theme";
import Profile from "@/assets/img/profile.png";
import Star from "@/assets/img/star.svg";
import Image from "next/image";
import { useState } from "react";
import { CardFooterMain } from "./components/CardFooter/CardFooter";
import CommentLikeButton from "./components/CommentLikeButton/CommentLikeButton";
import LikeButton from "./components/LikeButton/LikeButton";
import { TalkCommentMain } from "./components/TalkComment/TalkComment";

const page = () => {
  const [isLike, setIsLike] = useState<Boolean>(false);

  const changeLike = () => {
    setIsLike(!isLike);
  };

  return (
    <>
      <div className="mt-[55px] ml-[120px]">
        <ThemeMain.MainTheme theme={"토크해요"} />
        <div className="w-[547px] h-[230px] bg-[#FFF] border border-solid rounded-[17px]">
          <div className="mt-[22px] ml-[26px] w-auto">
            <CardMain>
              <CardHeaderMain>
                <CardHeaderMain.Profile>
                  <Image
                    src={Profile}
                    alt="프로필"
                    width={24}
                    height={24}
                    priority
                  />
                </CardHeaderMain.Profile>
                <CardHeaderMain.Name>
                  <div className="text-[17px] ml-[6px]">이름</div>
                </CardHeaderMain.Name>
                <CardHeaderMain.LikeNumbers>
                  <LikeButton
                    isLike={isLike}
                    onClick={changeLike}
                    width={21}
                    height={19}
                  />
                  <div className="w-[50px] h-[16px] font-Pretendard font-Regular text-[13px] text-[#656565]">
                    999+
                  </div>
                </CardHeaderMain.LikeNumbers>
              </CardHeaderMain>
              <BookMain>
                <BookMain.BookCover>
                  <div className="w-[95px] h-[135px] mt-[14px] mr-[26px] bg-[#000]"></div>
                </BookMain.BookCover>
              </BookMain>
              <CardMain.OpinionTitle>
                <div className="text-[20px] mt-[14px]">토크방 제목</div>
              </CardMain.OpinionTitle>
              <CardMain.BookTitle>책 제목</CardMain.BookTitle>
              <CardMain.AttendCondition>
                <div className="mb-[5px]">참가조건</div>
              </CardMain.AttendCondition>
              <CardMain.Status>읽고 싶은</CardMain.Status>
              <CardMain.Status>읽는 중</CardMain.Status>
              <CardMain.Status>읽음</CardMain.Status>
              <CardMain.Status>잠시 멈춘</CardMain.Status>
              <CardMain.Status>중단</CardMain.Status>
            </CardMain>
          </div>
        </div>
      </div>

      <div className="mt-[55px] ml-[120px]">
        <BookMain>
          <BookMain.BookCover>
            <div className="w-[320px] h-[460px] bg-black rounded-[10px]" />
          </BookMain.BookCover>
          <BookMain.RankBox>1</BookMain.RankBox>
          <BookMain.BookTitle className="text-[#656565]">
            책 제목
          </BookMain.BookTitle>
        </BookMain>
      </div>

      <div className="mt-[55px] ml-[120px]">
        <ThemeMain.MainTheme theme={"토크해요"} />
        <div className="w-[830px] h-[380px] bg-[#FFF] border border-solid rounded-[17px]">
          <div className="mt-[26px] ml-[26px] w-auto">
            <CardMain>
              <CardHeaderMain>
                <CardHeaderMain.Profile>
                  <Image
                    src={Profile}
                    alt="프로필"
                    width={40}
                    height={40}
                    priority
                  />
                </CardHeaderMain.Profile>
                <CardHeaderMain.Name>
                  <div className="text-[20px] ml-[10px]">이름</div>
                </CardHeaderMain.Name>
                <CardHeaderMain.StarRating>
                  <div className="w-[51px] h-[24px] mx-[8px] my-[4px] flex items-center font-Pretendard font-Regular text-[18px] text-[#80685D]">
                    <Star />
                    <div className="ml-[3px]">4.5</div>
                  </div>
                </CardHeaderMain.StarRating>
              </CardHeaderMain>

              <BookMain>
                <BookMain.BookCover>
                  <div className="w-[140px] h-[200px] mt-[19px] mr-[26px] bg-[#000]"></div>
                </BookMain.BookCover>
              </BookMain>
              <CardMain.OpinionTitle>
                <div className="text-[20px] mt-[28px] mb-[13px]">
                  토크방 제목
                </div>
              </CardMain.OpinionTitle>
              <CardMain.BookTitle>
                <div className="mb-[13px]">책 제목</div>
              </CardMain.BookTitle>
              <CardMain.AttendCondition>
                참가조건
                <div className="flex flex-row ml-[15px]">
                  <CardMain.Status>읽고 싶은</CardMain.Status>
                  <CardMain.Status>읽는 중</CardMain.Status>
                  <CardMain.Status>읽음</CardMain.Status>
                  <CardMain.Status>잠시 멈춘</CardMain.Status>
                  <CardMain.Status>중단</CardMain.Status>
                </div>
              </CardMain.AttendCondition>
            </CardMain>
          </div>
        </div>
      </div>

      <div className="mt-[55px] ml-[120px]">
        <ThemeMain.MainTheme theme={"토크해요"} />
        <div className="w-[830px] h-[380px] bg-[#FFF] border border-solid rounded-[17px]">
          <div className="mt-[24px] ml-[26px] w-auto">
            <CardMain>
              <CardHeaderMain>
                <CardHeaderMain.Profile>
                  <Image
                    src={Profile}
                    alt="프로필"
                    width={40}
                    height={40}
                    priority
                  />
                </CardHeaderMain.Profile>
                <CardHeaderMain.Name>
                  <div className="text-[20px] ml-[6px]">이름</div>
                </CardHeaderMain.Name>
                <CardHeaderMain.LikeNumbers>
                  <LikeButton
                    isLike={isLike}
                    onClick={changeLike}
                    width={26}
                    height={24}
                  />
                  <div className="w-[50px] h-[16px] font-Pretendard font-Regular text-[13px] text-[#656565]">
                    999+
                  </div>
                </CardHeaderMain.LikeNumbers>
              </CardHeaderMain>

              <BookMain>
                <BookMain.BookCover>
                  <div className="w-[140px] h-[200px] mt-[14px] mb-[12px] mr-[26px] bg-[#000]"></div>
                </BookMain.BookCover>
              </BookMain>
              <CardMain.OpinionTitle>
                <div className="text-[20px] mt-[23px] mb-[13px]">
                  토크방 제목
                </div>
              </CardMain.OpinionTitle>
              <CardMain.BookTitle>
                <div className="mb-[13px]">책 제목</div>
              </CardMain.BookTitle>
              <CardMain.AttendCondition>
                <div className="mb-[13px]">참가조건</div>
              </CardMain.AttendCondition>
              <CardMain.Status>읽고 싶은</CardMain.Status>
              <CardMain.Status>읽는 중</CardMain.Status>
              <CardMain.Status>읽음</CardMain.Status>
              <CardMain.Status>잠시 멈춘</CardMain.Status>
              <CardMain.Status>중단</CardMain.Status>
              <CardFooterMain>
                <CardFooterMain.LikeNumbers>23</CardFooterMain.LikeNumbers>
                <CardFooterMain.Line>
                  <hr className="mt-[5px] mb-[10px] mr-[26px]" />
                </CardFooterMain.Line>
                <CardFooterMain.LikeButton>
                  <div>좋아요</div>
                </CardFooterMain.LikeButton>
              </CardFooterMain>
            </CardMain>
          </div>
        </div>
      </div>

      <div className="mt-[55px] ml-[120px]">
        <ThemeMain.MainTheme theme={"의견작성"} />
        <div className="w-[1418px] h-[213px] bg-[#EFEFEF] border border-solid rounded-[13px]">
          <div className="mt-[26px] ml-[26px] w-auto">
            <CardMain>
              <TalkCommentMain>
                <TalkCommentMain.Numbering>1 넘버링</TalkCommentMain.Numbering>
                <TalkCommentMain.TimesAgo>
                  <div className="mr-[24px]">20시간 전</div>
                </TalkCommentMain.TimesAgo>
              </TalkCommentMain>
              <CardHeaderMain>
                <CardHeaderMain.Profile>
                  <Image
                    src={Profile}
                    alt="프로필"
                    width={40}
                    height={40}
                    priority
                  />
                </CardHeaderMain.Profile>
                <CardHeaderMain.Name>
                  <div className="text-[20px] ml-[6px]">이름</div>
                </CardHeaderMain.Name>
              </CardHeaderMain>
              <CardMain.Opinion>
                <div className="w-full">응애</div>
              </CardMain.Opinion>
              <CardFooterMain className="flex flex-row">
                <CardFooterMain.LikeNumbers>
                  <div className="flex grow items-center">
                    <CommentLikeButton
                      isLike={isLike}
                      onClick={changeLike}
                      width={16}
                      height={15}
                    />
                    <div className="ml-[5px]">23</div>
                    <div className="ml-[11px]">
                      <CardFooterMain.LikeButton>
                        좋아요
                      </CardFooterMain.LikeButton>
                    </div>
                  </div>
                  <div className="mr-[26px]">
                    <CardFooterMain.DeleteButton>
                      삭제
                    </CardFooterMain.DeleteButton>
                  </div>
                </CardFooterMain.LikeNumbers>
              </CardFooterMain>
            </CardMain>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
