import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TalkRoomCard from "../Card/MainPageCard/TalkRoomCard";

type TalkRoom = {
  id: number;
  profileImage: string;
  username: string;
  title: string;
  content: string;
  bookName: string;
  bookAuthor: string;
  bookThumbnail: string;
  likeCount: number;
  readingStatuses: string[];
  registeredDateTime: string;
};

type Props = {
  talkRooms: TalkRoom[];
  userLikeTalkRoomIds: number[];
  isBest: boolean;
};

const TalkRoomCardSwiper = ({
  talkRooms,
  userLikeTalkRoomIds,
  isBest,
}: Props) => {
  return (
    <Swiper
      navigation
      pagination={{ type: "custom", clickable: true }}
      autoplay={true}
      loop={false}
      modules={[Navigation, Pagination]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        359: {
          slidesPerView: 1.1,
          slidesPerGroup: 1,
          spaceBetween: 8,
        },
        601: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 8,
        },
        901: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 10,
        },
        1301: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 10,
        },
      }}
    >
      {talkRooms.map((data) => {
        const isLike = userLikeTalkRoomIds.includes(data.id);
        return (
          <SwiperSlide key={data.id}>
            <TalkRoomCard data={data} isBest={isBest} isLike={isLike} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TalkRoomCardSwiper;
