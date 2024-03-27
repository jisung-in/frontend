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
import { Button } from "./components/Button/Button";
import { CardMain } from "./components/Card/Card";
import { CardHeaderMain } from "./components/CardHeader/CardHeader";
import HeartButton from "./components/HeartButton/HeartButton";
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
                  <div className="mr-[18px]">
                    <HeartButton
                      isHeart={isHeart}
                      onClick={changeisHeart}
                      width={21}
                      height={19}
                    />
                    <div className="h-[16px] font-Pretendard font-Regular text-[13px] text-[#656565]">
                      999+
                    </div>
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
        <ThemeMain.MainTheme>
          <div className="flex mb-[13px]">
            <div className="flex grow items-center">
              <div className="mr-[10px]">최근 생성된 토크방</div>
              <RecentMakeTalkRoom />
            </div>
            <ThemeMain.Show>전체보기 {">"}</ThemeMain.Show>
          </div>
        </ThemeMain.MainTheme>
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
                  <div className="mr-[18px]">
                    <HeartButton
                      isHeart={isHeart}
                      onClick={changeisHeart}
                      width={21}
                      height={19}
                    />
                    <div className="h-[16px] font-Pretendard font-Regular text-[13px] text-[#656565]">
                      999+
                    </div>
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
        <ThemeMain.MainTheme>
          <div className="flex mb-[13px]">
            <div className="flex grow items-center">
              <div className="mr-[10px]">베스트 셀러</div>
              <BestSeller />
            </div>
          </div>
        </ThemeMain.MainTheme>
        <BookMain>
          <BookMain.BookCover>
            <div className="w-[320px] h-[460px] bg-black rounded-[10px]" />
          </BookMain.BookCover>
          <BookMain.RankBox>1</BookMain.RankBox>
          <BookMain.BookTitle>
            <div className="font-SemiBold mt-[12px] text-[#000] text-[21px]">
              책 제목
            </div>
          </BookMain.BookTitle>
          <BookMain.Publisher>출판사</BookMain.Publisher>
          <BookMain.Author>&nbsp;• 저자 •&nbsp;</BookMain.Author>
          <BookMain.Year>2024</BookMain.Year>
        </BookMain>
      </div>

      <div className="bg-[#FBF7F0] h-[675px] mt-[89px] mb-[48px]">
        <div className="pt-[43px] ml-[120px]">
          <ThemeMain.MainTheme>
            <div className="flex mb-[20px]">
              <div className="flex grow items-center">
                <div className="mr-[10px]">인기있는 토크방</div>
                <PopularTalkRoom />
              </div>
              <ThemeMain.Show>전체보기 {">"}</ThemeMain.Show>
            </div>
          </ThemeMain.MainTheme>
          <div className="w-[830px] h-[480px] bg-[#FFF] border border-solid rounded-[17px]">
            <div className="mt-[33px] ml-[39px] w-auto">
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
                    <div className="text-[22px] ml-[10px]">이름</div>
                  </CardHeaderMain.Name>
                  <CardHeaderMain.LikeNumbers>
                    <div className="mr-[27px]">
                      <HeartButton
                        isHeart={isHeart}
                        onClick={changeisHeart}
                        width={36}
                        height={32}
                      />
                      <div className="h-[22px] font-Pretendard font-Regular text-[18px] text-[#656565]">
                        999+
                      </div>
                    </div>
                  </CardHeaderMain.LikeNumbers>
                </CardHeaderMain>

                <BookMain>
                  <BookMain.BookCover>
                    <div className="w-[231px] h-[320px] mt-[19px] mr-[26px] bg-[#000]"></div>
                  </BookMain.BookCover>
                </BookMain>
                <CardMain.OpinionTitle>
                  <div className="font-SemiBold text-[28px] mt-[28px] mb-[20px]">
                    토크방 제목
                  </div>
                </CardMain.OpinionTitle>
                <CardMain.BookTitle>
                  <div className="text-[28px] mb-[20px]">책 제목</div>
                </CardMain.BookTitle>
                <CardMain.AttendCondition>
                  <div className="text-[24px] mb-[20px]">참가조건</div>
                </CardMain.AttendCondition>
                <CardMain.Status className="h-[36px] mb-[35px]">
                  읽고 싶은
                </CardMain.Status>
                <CardMain.Status className="h-[36px]">읽는 중</CardMain.Status>
                <CardMain.Status className="h-[36px]">읽음</CardMain.Status>
                <CardMain.Status className="h-[36px]">
                  잠시 멈춘
                </CardMain.Status>
                <CardMain.Status className="h-[36px]">중단</CardMain.Status>
                <Button>입장하기</Button>
              </CardMain>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[55px] ml-[120px]">
        <ThemeMain.MainTheme>
          <div className="flex mb-[13px]">
            <div className="flex grow items-center">
              <div className="mr-[10px]">최근 등록된 책</div>
              <RegisteRecentBook />
            </div>
          </div>
        </ThemeMain.MainTheme>
        <BookMain>
          <BookMain.BookCover>
            <div className="w-[320px] h-[460px] bg-black rounded-[10px]" />
          </BookMain.BookCover>
          <BookMain.BookTitle>
            <div className="font-SemiBold mt-[12px] text-[#000] text-[21px]">
              책 제목
            </div>
          </BookMain.BookTitle>
          <BookMain.Publisher>출판사</BookMain.Publisher>
          <BookMain.Author>&nbsp;• 저자 •&nbsp;</BookMain.Author>
          <BookMain.Year>2024</BookMain.Year>
        </BookMain>
      </div>

      <div className="bg-[#FBF7F0] h-[675px] mt-[73px]">
        <div className="pt-[43px] ml-[120px]">
          <ThemeMain.MainTheme>
            <div className="flex mb-[20px]">
              <div className="flex grow items-center">
                <div className="mr-[10px]">토크 많은 책</div>
                <ManyTalkRoomBook />
              </div>
              <ThemeMain.Show>더보기 {">"}</ThemeMain.Show>
            </div>
          </ThemeMain.MainTheme>
          <BookMain>
            <BookMain.BookCover>
              <div className="w-[320px] h-[460px] bg-black rounded-[10px]" />
            </BookMain.BookCover>
            <BookMain.BookTitle>
              <div className="font-SemiBold mt-[12px] text-[#000] text-[21px]">
                책 제목
              </div>
            </BookMain.BookTitle>
          </BookMain>
        </div>
      </div>
    </div>
  );
};

export default page;
