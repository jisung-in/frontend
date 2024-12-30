import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TalkRoomCard from "../Card/MainPageCard/TalkRoomCard";

type TalkRoomProps = {
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
  creatorId: number;
};

type TalkRoomCardCarouselProps = {
  talkRooms: TalkRoomProps[];
  userId: number;
  userLikeTalkRoomIds: number[];
  isBest: boolean;
};

const TalkRoomCardCarousel = ({
  talkRooms,
  userId,
  userLikeTalkRoomIds,
  isBest,
}: TalkRoomCardCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[1680px]"
    >
      <CarouselContent>
        {talkRooms.map((data) => {
          const isLike = userLikeTalkRoomIds.includes(data.id);
          return (
            <CarouselItem
              key={data.id}
              className="2xl:basis-1/3 xl:basis-1/3 lg:basis-1/2 md:basis-1/2 sm:basis-1/1"
            >
              <TalkRoomCard
                data={data}
                userId={userId}
                isBest={isBest}
                isLike={isLike}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default TalkRoomCardCarousel;
