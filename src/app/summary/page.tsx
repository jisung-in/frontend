"use client";
import { useState } from "react";
import { BookMain } from "../components/Book/Book";
import MyBookCard from "../components/MyInfoCard/MyBookCard";
import MyTabs from "../components/Tabs/Tabs";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Arrow from "@/assets/img/arrow.svg";

// const data = [{ title: "책 제목", starRate: "별점 ★★★★★" }
// { title: "책 제목", starRate: "별점 ★★★★★" },
// { title: "책 제목", starRate: "별점 ★★★★★" },
// { title: "책 제목", starRate: "별점 ★★★★★" },
// { title: "책 제목", starRate: "별점 ★★★★★" },
// { title: "책 제목", starRate: "별점 ★★★★★" },
// { title: "책 제목", starRate: "별점 ★★★★★" },
// ];

const SummaryPage = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [person, setPerson] = useState("pedro");

  return (
    <div className="flex flex-col w-full">
      <Tabs.Root defaultValue="tab1">
        <Tabs.List className="flex items-center bg-white h-[70px] mb-[20px] px-[5%] shadow-[inset_0_-1px_0_0,0_1px_0_0] shadow-ivory-50">
          <Tabs.Trigger
            value="tab1"
            className="w-[220px] flex h-full items-center justify-center text-gray-60 hover:text-brown-50 data-[state=active]:text-brown-50 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative"
          >
            <div className="text-[19px]">나의 별점 모아보기</div>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="tab2"
            className="w-[220px] flex h-full items-center justify-center text-gray-60 hover:text-brown-50 data-[state=active]:text-brown-50 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative"
          >
            <div className="text-[19px]">나의 서평 모아보기</div>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="tab3"
            className="w-[220px] flex h-full items-center justify-center text-gray-60 hover:text-brown-50 data-[state=active]:text-brown-50 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative"
          >
            <div className="text-[19px]">나의 토크방 모아보기</div>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="tab4"
            className="w-[220px] flex h-full items-center justify-center text-gray-60 hover:text-brown-50 data-[state=active]:text-brown-50 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative"
          >
            <div className="text-[19px]">독서상태</div>
          </Tabs.Trigger>
        </Tabs.List>

        <div className="flex w-full justify-end pr-[160px]">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button
                className="IconButton flex align-center"
                aria-label="Customise options"
              >
                <div className="flex items-center">
                  별점 순
                  <Arrow />
                </div>
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="bg-white w-[360px] border-gray-50 rounded-md"
                sideOffset={5}
              >
                <div className="flex text-[21px] font-bold relative border-b-[2px] border-gray-50 justify-center items-center h-[52px]">
                  정렬 기준
                  <div className="absolute right-[5%]">X</div>
                </div>
                <div className="px-[5%]">
                  <DropdownMenu.Item className="w-full font-bold h-[60px] flex items-center px-[5%] border-b-[2px]">
                    5 점
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="font-bold h-[60px] flex items-center px-[5%] border-b-[2px]">
                    4.5 점
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="font-bold h-[60px] flex items-center px-[5%] border-b-[2px]">
                    4 점
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="font-bold h-[60px] flex items-center px-[5%] border-b-[2px]">
                    3.5 점
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="font-bold h-[60px] flex items-center px-[5%] border-b-[2px]">
                    3.0 점
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="font-bold h-[60px] flex items-center px-[5%] border-b-[2px]">
                    2.5 점
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="font-bold h-[60px] flex items-center px-[5%] border-b-[2px]">
                    2.0 점
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="font-bold h-[60px] flex items-center px-[5%] border-b-[2px]">
                    1.5 점
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="font-bold h-[60px] flex items-center px-[5%] border-b-[2px]">
                    1.0 점
                  </DropdownMenu.Item>
                </div>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>

        <Tabs.Content value="tab1">
          <div className="flex flex-col items-center justify-center px-[5%]">
            <div className="grid grid-cols-8 gap-[20px]">
              {new Array(50).fill(1).map((_, index) => (
                <MyBookCard key={index} />
              ))}
            </div>
          </div>
        </Tabs.Content>

        <Tabs.Content value="tab2">
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-8 gap-[20px]">서평서평</div>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default SummaryPage;
