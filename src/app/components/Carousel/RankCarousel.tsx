"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useBreakpoint } from "@/hook/useBreakPoint";
import Link from "next/link";
import { useMemo } from "react";
import BestSellerCard from "../Card/MainPageCard/BestSellerCard";

interface RankCarouselProps {
  data: {
    ranking: number;
    isbn: string;
    title: string;
    publisher: string;
    thumbnail: string;
    authors: string[];
    dateTime: string;
  }[];
}

const RankCarousel: React.FC<RankCarouselProps> = ({ data }) => {
  const { breakpoint } = useBreakpoint();

  // 브레이크포인트에 따라 한 번에 보이는 아이템 수 설정
  const itemsPerPage = useMemo(() => {
    switch (breakpoint) {
      case "2xl":
        return 5;
      case "xl":
        return 6;
      case "lg":
        return 5;
      case "md":
        return 4;
      case "sm":
        return 3;
      default:
        return 3;
    }
  }, [breakpoint]);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[1680px]"
      count={itemsPerPage}
    >
      <CarouselContent>
        {data?.map((items) => (
          <CarouselItem
            key={items.isbn}
            className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/4 md:basis-1/3 sm:basis-1/3"
          >
            <Link href={`/book/${items.isbn}`}>
              <BestSellerCard
                ranking={items.ranking}
                thumbnail={items.thumbnail}
                title={items.title}
                publisher={items.publisher}
                authors={items.authors}
                dateTime={items.dateTime}
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious count={itemsPerPage} />
      <CarouselNext count={itemsPerPage} />
    </Carousel>
  );
};

export default RankCarousel;
