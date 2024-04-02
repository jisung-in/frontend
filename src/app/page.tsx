"use client";

import BestSeller from "@/assets/img/best-seller.svg";
import ManyTalkRoomBook from "@/assets/img/many-talk-room-book.svg";
import PopularTalkRoom from "@/assets/img/popular-talk-room.svg";
import Profile from "@/assets/img/profile.png";
import RecentMakeTalkRoom from "@/assets/img/recent-make-talk-room.svg";
import RecentOpinionTalkRoom from "@/assets/img/recent-opinion-talk-room.svg";
import RegisteRecentBook from "@/assets/img/register-recent-book.svg";
import Image from "next/image";
import { useState } from "react";
import { BookMain } from "./components/Book/Book";
import { CardMain } from "./components/Card/Card";
import { CardHeaderMain } from "./components/CardHeader/CardHeader";
import HeartButton from "./components/HeartButton/HeartButton";
import Swiper from "./components/Swiper/Swiper";
import { ThemeMain } from "./components/Theme/Theme";

const page = () => {
  const [isHeart, setIsHeart] = useState<Boolean>(false);

  const changeisHeart = () => {
    setIsHeart(!isHeart);
  };

  return (
    <div className="bg-[#FFF]">
      <div className="mt-[55px] ml-[120px]">
        <ThemeMain.MainTheme>
          <div className="flex mb-[13px]">
            <div className="flex grow items-center">
              <div className="mr-[10px]">최근 의견달린 토크방</div>
              <RecentOpinionTalkRoom />
            </div>
            <ThemeMain.Show>전체보기 {">"}</ThemeMain.Show>
          </div>
        </ThemeMain.MainTheme>
        <div className="flex flex-row flex-wrap">
          <div className="w-[547px] h-[230px] bg-[#FFF] border border-solid rounded-[17px] mr-[20px]">
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
                    <div className="flex flex-col items-center mr-[26px]">
                      <HeartButton
                        isHeart={isHeart}
                        onClick={changeisHeart}
                        width={21}
                        height={19}
                      />
                      <div className="h-[16px] font-Pretendard font-normal text-[13px] text-[#656565]">
                        999+
                      </div>
                    </div>
                  </CardHeaderMain.LikeNumbers>
                </CardHeaderMain>
                <BookMain>
                  <BookMain.BookCover className="mt-[5px] mr-[20px]">
                    <div className="w-[95px] h-[135px] border border-solid border-[#F4E4CE]" />
                  </BookMain.BookCover>
                </BookMain>
                <CardMain.TitleTheme className="mt-[4px]">
                  토크방 제목
                </CardMain.TitleTheme>
                <CardMain.BookTitle className="mb-[6px]">
                  책 제목
                </CardMain.BookTitle>
                <CardMain.AttendCondition>
                  <div className="mb-[4px]">참가조건</div>
                </CardMain.AttendCondition>
                <CardMain.Status>읽고 싶은</CardMain.Status>
                <CardMain.Status>읽는 중</CardMain.Status>
                <CardMain.Status>읽음</CardMain.Status>
                <CardMain.Status>잠시 멈춘</CardMain.Status>
                <CardMain.Status>중단</CardMain.Status>
              </CardMain>
            </div>
          </div>
          <div className="w-[547px] h-[230px] bg-[#FFF] border border-solid rounded-[17px] mr-[20px]">
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
                    <div className="flex flex-col items-center mr-[26px]">
                      <HeartButton
                        isHeart={isHeart}
                        onClick={changeisHeart}
                        width={21}
                        height={19}
                      />
                      <div className="h-[16px] font-Pretendard font-normal text-[13px] text-[#656565]">
                        999+
                      </div>
                    </div>
                  </CardHeaderMain.LikeNumbers>
                </CardHeaderMain>
                <BookMain>
                  <BookMain.BookCover className="mt-[5px] mr-[20px]">
                    <div className="w-[95px] h-[135px] border border-solid border-[#F4E4CE]" />
                  </BookMain.BookCover>
                </BookMain>
                <CardMain.TitleTheme className="mt-[4px]">
                  토크방 제목
                </CardMain.TitleTheme>
                <CardMain.BookTitle className="mb-[6px]">
                  책 제목
                </CardMain.BookTitle>
                <CardMain.AttendCondition>
                  <div className="mb-[4px]">참가조건</div>
                </CardMain.AttendCondition>
                <CardMain.Status>읽고 싶은</CardMain.Status>
                <CardMain.Status>읽는 중</CardMain.Status>
                <CardMain.Status>읽음</CardMain.Status>
                <CardMain.Status>잠시 멈춘</CardMain.Status>
                <CardMain.Status>중단</CardMain.Status>
              </CardMain>
            </div>
          </div>
          <div className="w-[547px] h-[230px] bg-[#FFF] border border-solid rounded-[17px] mr-[20px]">
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
                    <div className="flex flex-col items-center mr-[26px]">
                      <HeartButton
                        isHeart={isHeart}
                        onClick={changeisHeart}
                        width={21}
                        height={19}
                      />
                      <div className="h-[16px] font-Pretendard font-normal text-[13px] text-[#656565]">
                        999+
                      </div>
                    </div>
                  </CardHeaderMain.LikeNumbers>
                </CardHeaderMain>
                <BookMain>
                  <BookMain.BookCover className="mt-[5px] mr-[20px]">
                    <div className="w-[95px] h-[135px] border border-solid border-[#F4E4CE]" />
                  </BookMain.BookCover>
                </BookMain>
                <CardMain.TitleTheme className="mt-[4px]">
                  토크방 제목
                </CardMain.TitleTheme>
                <CardMain.BookTitle className="mb-[6px]">
                  책 제목
                </CardMain.BookTitle>
                <CardMain.AttendCondition>
                  <div className="mb-[4px]">참가조건</div>
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
      </div>

      <div className="mt-[55px] ml-[120px]">
        <ThemeMain.MainTheme>
          <div className="flex mb-[13px]">
            <div className="flex grow items-center">
              <div className="mr-[10px]">최근 생성된 토크방</div>
              <RecentMakeTalkRoom />
            </div>
            <ThemeMain.Show>전체보기 {">"}</ThemeMain.Show>
          </div>
        </ThemeMain.MainTheme>

        <div className="flex flex-row flex-wrap">
          <div className="w-[547px] h-[230px] bg-[#FFF] border border-solid rounded-[17px] mr-[20px]">
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
                    <div className="flex flex-col items-center mr-[26px]">
                      <HeartButton
                        isHeart={isHeart}
                        onClick={changeisHeart}
                        width={21}
                        height={19}
                      />
                      <div className="h-[16px] font-Pretendard font-normal text-[13px] text-[#656565]">
                        999+
                      </div>
                    </div>
                  </CardHeaderMain.LikeNumbers>
                </CardHeaderMain>
                <BookMain>
                  <BookMain.BookCover className="mt-[5px] mr-[20px]">
                    <div className="w-[95px] h-[135px] border border-solid border-[#F4E4CE]" />
                  </BookMain.BookCover>
                </BookMain>
                <CardMain.TitleTheme className="mt-[4px]">
                  토크방 제목
                </CardMain.TitleTheme>
                <CardMain.BookTitle className="mb-[6px]">
                  책 제목
                </CardMain.BookTitle>
                <CardMain.AttendCondition>
                  <div className="mb-[4px]">참가조건</div>
                </CardMain.AttendCondition>
                <CardMain.Status>읽고 싶은</CardMain.Status>
                <CardMain.Status>읽는 중</CardMain.Status>
                <CardMain.Status>읽음</CardMain.Status>
                <CardMain.Status>잠시 멈춘</CardMain.Status>
                <CardMain.Status>중단</CardMain.Status>
              </CardMain>
            </div>
          </div>
          <div className="w-[547px] h-[230px] bg-[#FFF] border border-solid rounded-[17px] mr-[20px]">
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
                    <div className="flex flex-col items-center mr-[26px]">
                      <HeartButton
                        isHeart={isHeart}
                        onClick={changeisHeart}
                        width={21}
                        height={19}
                      />
                      <div className="h-[16px] font-Pretendard font-normal text-[13px] text-[#656565]">
                        999+
                      </div>
                    </div>
                  </CardHeaderMain.LikeNumbers>
                </CardHeaderMain>
                <BookMain>
                  <BookMain.BookCover className="mt-[5px] mr-[20px]">
                    <div className="w-[95px] h-[135px] border border-solid border-[#F4E4CE]" />
                  </BookMain.BookCover>
                </BookMain>
                <CardMain.TitleTheme className="mt-[4px]">
                  토크방 제목
                </CardMain.TitleTheme>
                <CardMain.BookTitle className="mb-[6px]">
                  책 제목
                </CardMain.BookTitle>
                <CardMain.AttendCondition>
                  <div className="mb-[4px]">참가조건</div>
                </CardMain.AttendCondition>
                <CardMain.Status>읽고 싶은</CardMain.Status>
                <CardMain.Status>읽는 중</CardMain.Status>
                <CardMain.Status>읽음</CardMain.Status>
                <CardMain.Status>잠시 멈춘</CardMain.Status>
                <CardMain.Status>중단</CardMain.Status>
              </CardMain>
            </div>
          </div>
          <div className="w-[547px] h-[230px] bg-[#FFF] border border-solid rounded-[17px] mr-[20px]">
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
                    <div className="flex flex-col items-center mr-[26px]">
                      <HeartButton
                        isHeart={isHeart}
                        onClick={changeisHeart}
                        width={21}
                        height={19}
                      />
                      <div className="h-[16px] font-Pretendard font-normal text-[13px] text-[#656565]">
                        999+
                      </div>
                    </div>
                  </CardHeaderMain.LikeNumbers>
                </CardHeaderMain>
                <BookMain>
                  <BookMain.BookCover className="mt-[5px] mr-[20px]">
                    <div className="w-[95px] h-[135px] border border-solid border-[#F4E4CE]" />
                  </BookMain.BookCover>
                </BookMain>
                <CardMain.TitleTheme className="mt-[4px]">
                  토크방 제목
                </CardMain.TitleTheme>
                <CardMain.BookTitle className="mb-[6px]">
                  책 제목
                </CardMain.BookTitle>
                <CardMain.AttendCondition>
                  <div className="mb-[4px]">참가조건</div>
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
      </div>

      <div className="mt-[55px] ml-[120px]">
        <ThemeMain.MainTheme>
          <div className="flex mb-[13px]">
            <div className="flex grow items-center">
              <div className="mr-[10px]">베스트 셀러</div>
              <BestSeller />
            </div>
          </div>
        </ThemeMain.MainTheme>
        <Swiper
          data={[
            {
              id: 1,
              rank: 1,
              image: "",
              title: "책 제목1",
              publisher: "출판사1",
              author: "저자1",
              year: 2024,
            },
            {
              id: 2,
              rank: 2,
              image: "",
              title: "책 제목2",
              publisher: "출판사2",
              author: "저자2",
              year: 2024,
            },
            {
              id: 3,
              rank: 3,
              image: "",
              title: "책 제목3",
              publisher: "출판사2",
              author: "저자3",
              year: 2024,
            },
            {
              id: 4,
              rank: 4,
              image: "",
              title: "책 제목4",
              publisher: "출판사4",
              author: "저자4",
              year: 2024,
            },
            {
              id: 5,
              rank: 5,
              image: "",
              title: "책 제목5",
              publisher: "출판사5",
              author: "저자5",
              year: 2024,
            },
            {
              id: 6,
              rank: 6,
              image: "",
              title: "책 제목6",
              publisher: "출판사6",
              author: "저자6",
              year: 2024,
            },
          ]}
        />
      </div>

      <div className="bg-[#FBF7F0] mt-[36px] pt-[36px]">
        <div className="mt-[23px] ml-[120px]">
          <ThemeMain.MainTheme>
            <div className="flex mb-[20px]">
              <div className="flex grow items-center">
                <div className="mr-[10px]">인기있는 토크방</div>
                <PopularTalkRoom />
              </div>
              <ThemeMain.Show>전체보기 {">"}</ThemeMain.Show>
            </div>
          </ThemeMain.MainTheme>
          <div className="flex flex-row flex-wrap">
            <div className="w-[405px] h-[532px] bg-[#fff] border border-solid rounded-[20px] mr-[18px] mb-[65px]">
              <CardMain className="flex flex-col items-center">
                <CardHeaderMain className="pt-[21px] pb-[12px] mb-[25px] bg-[#624E45] rounded-t-[20px] w-auto">
                  <CardHeaderMain.Title className="ml-[23px]">
                    토크방 제목
                  </CardHeaderMain.Title>
                  <CardHeaderMain.LikeNumbers>
                    <div className="mr-[25px]">
                      <HeartButton
                        isHeart={isHeart}
                        onClick={changeisHeart}
                        width={21}
                        height={19}
                      />
                      <div className="h-[22px] font-Pretendard font-normal text-[13px] text-[#fff]">
                        999+
                      </div>
                    </div>
                  </CardHeaderMain.LikeNumbers>
                </CardHeaderMain>
                <BookMain className="mb-[26px]">
                  <BookMain.BookCover>
                    <div className="flex items-center border border-solid border-[#F4E4CE] w-[170px] h-[245px]"></div>
                  </BookMain.BookCover>
                </BookMain>
                <CardMain.AttendCondition className="w-[360px] flex flex-col text-[19px] bg-[#FBF7F0] rounded-[8px]">
                  <div className="pl-[18px]">
                    <CardMain.BookTitle className="my-[16px]">
                      책 제목
                    </CardMain.BookTitle>
                    <div className="flex flex-row">
                      <div className="w-[100px] mr-[15px]">참가조건</div>
                      <div className="flex flex-row flex-wrap">
                        <CardMain.Status className="mb-[10px]">
                          읽고 싶은
                        </CardMain.Status>
                        <CardMain.Status className="mb-[10px]">
                          읽는 중
                        </CardMain.Status>
                        <CardMain.Status className="mb-[10px]">
                          읽음
                        </CardMain.Status>
                        <CardMain.Status className="mb-[16px]">
                          잠시 멈춘
                        </CardMain.Status>
                        <CardMain.Status className="mb-[16px]">
                          중단
                        </CardMain.Status>
                      </div>
                    </div>
                  </div>
                </CardMain.AttendCondition>
              </CardMain>
            </div>
            <div className="w-[405px] h-[532px] bg-[#fff] border border-solid rounded-[20px] mr-[18px] mb-[65px]">
              <CardMain className="flex flex-col items-center">
                <CardHeaderMain className="pt-[21px] pb-[12px] mb-[25px] bg-[#624E45] rounded-t-[20px] w-auto">
                  <CardHeaderMain.Title className="ml-[23px]">
                    토크방 제목
                  </CardHeaderMain.Title>
                  <CardHeaderMain.LikeNumbers>
                    <div className="mr-[25px]">
                      <HeartButton
                        isHeart={isHeart}
                        onClick={changeisHeart}
                        width={21}
                        height={19}
                      />
                      <div className="h-[22px] font-Pretendard font-normal text-[13px] text-[#fff]">
                        999+
                      </div>
                    </div>
                  </CardHeaderMain.LikeNumbers>
                </CardHeaderMain>
                <BookMain className="mb-[26px]">
                  <BookMain.BookCover>
                    <div className="flex items-center border border-solid border-[#F4E4CE] w-[170px] h-[245px]"></div>
                  </BookMain.BookCover>
                </BookMain>
                <CardMain.AttendCondition className="w-[360px] flex flex-col text-[19px] bg-[#FBF7F0] rounded-[8px]">
                  <div className="pl-[18px]">
                    <CardMain.BookTitle className="my-[16px]">
                      책 제목
                    </CardMain.BookTitle>
                    <div className="flex flex-row">
                      <div className="w-[100px] mr-[15px]">참가조건</div>
                      <div className="flex flex-row flex-wrap">
                        <CardMain.Status className="mb-[10px]">
                          읽고 싶은
                        </CardMain.Status>
                        <CardMain.Status className="mb-[10px]">
                          읽는 중
                        </CardMain.Status>
                        <CardMain.Status className="mb-[10px]">
                          읽음
                        </CardMain.Status>
                        <CardMain.Status className="mb-[16px]">
                          잠시 멈춘
                        </CardMain.Status>
                        <CardMain.Status className="mb-[16px]">
                          중단
                        </CardMain.Status>
                      </div>
                    </div>
                  </div>
                </CardMain.AttendCondition>
              </CardMain>
            </div>
            <div className="w-[405px] h-[532px] bg-[#fff] border border-solid rounded-[20px] mr-[18px] mb-[65px]">
              <CardMain className="flex flex-col items-center">
                <CardHeaderMain className="pt-[21px] pb-[12px] mb-[25px] bg-[#624E45] rounded-t-[20px] w-auto">
                  <CardHeaderMain.Title className="ml-[23px]">
                    토크방 제목
                  </CardHeaderMain.Title>
                  <CardHeaderMain.LikeNumbers>
                    <div className="mr-[25px]">
                      <HeartButton
                        isHeart={isHeart}
                        onClick={changeisHeart}
                        width={21}
                        height={19}
                      />
                      <div className="h-[22px] font-Pretendard font-normal text-[13px] text-[#fff]">
                        999+
                      </div>
                    </div>
                  </CardHeaderMain.LikeNumbers>
                </CardHeaderMain>
                <BookMain className="mb-[26px]">
                  <BookMain.BookCover>
                    <div className="flex items-center border border-solid border-[#F4E4CE] w-[170px] h-[245px]"></div>
                  </BookMain.BookCover>
                </BookMain>
                <CardMain.AttendCondition className="w-[360px] flex flex-col text-[19px] bg-[#FBF7F0] rounded-[8px]">
                  <div className="pl-[18px]">
                    <CardMain.BookTitle className="my-[16px]">
                      책 제목
                    </CardMain.BookTitle>
                    <div className="flex flex-row">
                      <div className="w-[100px] mr-[15px]">참가조건</div>
                      <div className="flex flex-row flex-wrap">
                        <CardMain.Status className="mb-[10px]">
                          읽고 싶은
                        </CardMain.Status>
                        <CardMain.Status className="mb-[10px]">
                          읽는 중
                        </CardMain.Status>
                        <CardMain.Status className="mb-[10px]">
                          읽음
                        </CardMain.Status>
                        <CardMain.Status className="mb-[16px]">
                          잠시 멈춘
                        </CardMain.Status>
                        <CardMain.Status className="mb-[16px]">
                          중단
                        </CardMain.Status>
                      </div>
                    </div>
                  </div>
                </CardMain.AttendCondition>
              </CardMain>
            </div>
            <div className="w-[405px] h-[532px] bg-[#fff] border border-solid rounded-[20px] mr-[18px] mb-[65px]">
              <CardMain className="flex flex-col items-center">
                <CardHeaderMain className="pt-[21px] pb-[12px] mb-[25px] bg-[#624E45] rounded-t-[20px] w-auto">
                  <CardHeaderMain.Title className="ml-[23px]">
                    토크방 제목
                  </CardHeaderMain.Title>
                  <CardHeaderMain.LikeNumbers>
                    <div className="mr-[25px]">
                      <HeartButton
                        isHeart={isHeart}
                        onClick={changeisHeart}
                        width={21}
                        height={19}
                      />
                      <div className="h-[22px] font-Pretendard font-normal text-[13px] text-[#fff]">
                        999+
                      </div>
                    </div>
                  </CardHeaderMain.LikeNumbers>
                </CardHeaderMain>
                <BookMain className="mb-[26px]">
                  <BookMain.BookCover>
                    <div className="flex items-center border border-solid border-[#F4E4CE] w-[170px] h-[245px]"></div>
                  </BookMain.BookCover>
                </BookMain>
                <CardMain.AttendCondition className="w-[360px] flex flex-col text-[19px] bg-[#FBF7F0] rounded-[8px]">
                  <div className="pl-[18px]">
                    <CardMain.BookTitle className="my-[16px]">
                      책 제목
                    </CardMain.BookTitle>
                    <div className="flex flex-row">
                      <div className="w-[100px] mr-[15px]">참가조건</div>
                      <div className="flex flex-row flex-wrap">
                        <CardMain.Status className="mb-[10px]">
                          읽고 싶은
                        </CardMain.Status>
                        <CardMain.Status className="mb-[10px]">
                          읽는 중
                        </CardMain.Status>
                        <CardMain.Status className="mb-[10px]">
                          읽음
                        </CardMain.Status>
                        <CardMain.Status className="mb-[16px]">
                          잠시 멈춘
                        </CardMain.Status>
                        <CardMain.Status className="mb-[16px]">
                          중단
                        </CardMain.Status>
                      </div>
                    </div>
                  </div>
                </CardMain.AttendCondition>
              </CardMain>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[22px] ml-[120px]">
        <ThemeMain.MainTheme>
          <div className="flex mb-[13px]">
            <div className="flex grow items-center">
              <div className="mr-[10px]">최근 등록된 책</div>
              <RegisteRecentBook />
            </div>
          </div>
        </ThemeMain.MainTheme>
        <Swiper
          data={[
            {
              id: 1,
              image: "",
              title: "책 제목1",
              publisher: "출판사1",
              author: "저자1",
              year: 2024,
            },
            {
              id: 2,
              image: "",
              title: "책 제목2",
              publisher: "출판사2",
              author: "저자2",
              year: 2024,
            },
            {
              id: 3,
              image: "",
              title: "책 제목3",
              publisher: "출판사2",
              author: "저자3",
              year: 2024,
            },
            {
              id: 4,
              image: "",
              title: "책 제목4",
              publisher: "출판사4",
              author: "저자4",
              year: 2024,
            },
            {
              id: 5,
              image: "",
              title: "책 제목5",
              publisher: "출판사5",
              author: "저자5",
              year: 2024,
            },
            {
              id: 6,
              image: "",
              title: "책 제목6",
              publisher: "출판사6",
              author: "저자6",
              year: 2024,
            },
          ]}
        />
      </div>

      <div className="bg-[#FBF7F0] mt-[73px]">
        <div className="pt-[77px] ml-[120px]">
          <ThemeMain.MainTheme>
            <div className="flex mb-[20px]">
              <div className="flex grow items-center">
                <div className="mr-[10px]">토크 많은 책</div>
                <ManyTalkRoomBook />
              </div>
              <ThemeMain.Show>더보기 {">"}</ThemeMain.Show>
            </div>
          </ThemeMain.MainTheme>
          <div className="flex flew-row flex-wrap">
            <BookMain>
              <BookMain.BookCover>
                <div className="w-[320px] h-[460px] border border-solid border-[#F4E4CE] rounded-[10px] mr-[17px]" />
              </BookMain.BookCover>
              <BookMain.BookTitle>
                <div className="font-semibold mt-[12px] text-[#000] text-[21px] mb-[29px]">
                  책 제목
                </div>
              </BookMain.BookTitle>
            </BookMain>
            <BookMain>
              <BookMain.BookCover>
                <div className="w-[320px] h-[460px] border border-solid border-[#F4E4CE] rounded-[10px] mr-[17px]" />
              </BookMain.BookCover>
              <BookMain.BookTitle>
                <div className="font-semibold mt-[12px] text-[#000] text-[21px] mb-[29px]">
                  책 제목
                </div>
              </BookMain.BookTitle>
            </BookMain>
            <BookMain>
              <BookMain.BookCover>
                <div className="w-[320px] h-[460px] border border-solid border-[#F4E4CE] rounded-[10px] mr-[17px]" />
              </BookMain.BookCover>
              <BookMain.BookTitle>
                <div className="font-semibold mt-[12px] text-[#000] text-[21px] mb-[29px]">
                  책 제목
                </div>
              </BookMain.BookTitle>
            </BookMain>
            <BookMain>
              <BookMain.BookCover>
                <div className="w-[320px] h-[460px] border border-solid border-[#F4E4CE] rounded-[10px] mr-[17px]" />
              </BookMain.BookCover>
              <BookMain.BookTitle>
                <div className="font-semibold mt-[12px] text-[#000] text-[21px] mb-[29px]">
                  책 제목
                </div>
              </BookMain.BookTitle>
            </BookMain>
            <BookMain>
              <BookMain.BookCover>
                <div className="w-[320px] h-[460px] border border-solid border-[#F4E4CE] rounded-[10px] mr-[17px]" />
              </BookMain.BookCover>
              <BookMain.BookTitle>
                <div className="font-semibold mt-[12px] text-[#000] text-[21px] mb-[29px]">
                  책 제목
                </div>
              </BookMain.BookTitle>
            </BookMain>
            <BookMain>
              <BookMain.BookCover>
                <div className="w-[320px] h-[460px] border border-solid border-[#F4E4CE] rounded-[10px] mr-[17px]" />
              </BookMain.BookCover>
              <BookMain.BookTitle>
                <div className="font-semibold mt-[12px] text-[#000] text-[21px] mb-[29px]">
                  책 제목
                </div>
              </BookMain.BookTitle>
            </BookMain>
            <BookMain>
              <BookMain.BookCover>
                <div className="w-[320px] h-[460px] border border-solid border-[#F4E4CE] rounded-[10px] mr-[17px]" />
              </BookMain.BookCover>
              <BookMain.BookTitle>
                <div className="font-semibold mt-[12px] text-[#000] text-[21px] mb-[29px]">
                  책 제목
                </div>
              </BookMain.BookTitle>
            </BookMain>
            <BookMain>
              <BookMain.BookCover>
                <div className="w-[320px] h-[460px] border border-solid border-[#F4E4CE] rounded-[10px] mr-[17px]" />
              </BookMain.BookCover>
              <BookMain.BookTitle>
                <div className="font-semibold mt-[12px] text-[#000] text-[21px] mb-[29px]">
                  책 제목
                </div>
              </BookMain.BookTitle>
            </BookMain>
            <BookMain>
              <BookMain.BookCover>
                <div className="w-[320px] h-[460px] border border-solid border-[#F4E4CE] rounded-[10px] mr-[17px]" />
              </BookMain.BookCover>
              <BookMain.BookTitle>
                <div className="font-semibold mt-[12px] text-[#000] text-[21px] mb-[29px]">
                  책 제목
                </div>
              </BookMain.BookTitle>
            </BookMain>
            <BookMain>
              <BookMain.BookCover>
                <div className="w-[320px] h-[460px] border border-solid border-[#F4E4CE] rounded-[10px] mr-[17px]" />
              </BookMain.BookCover>
              <BookMain.BookTitle>
                <div className="font-semibold mt-[12px] text-[#000] text-[21px] mb-[29px]">
                  책 제목
                </div>
              </BookMain.BookTitle>
            </BookMain>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
