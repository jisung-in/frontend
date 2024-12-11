import DeleteButton from "@/app/components/DeleteButton/DeleteButton";
import IconButton from "@/app/components/IconButton/IconButton";
import BookTitleBigImg from "@/assets/img/book-title-big.png";
import NoImage from "@/assets/img/no-image.png";
import TitleThemeBigImg from "@/assets/img/theme-title-big.png";
import { useCreateRoomLike } from "@/hook/reactQuery/talkRoom/useCreateRoomLike";
import { useDeleteRoom } from "@/hook/reactQuery/talkRoom/useDeleteRoom";
import { useDeleteRoomLike } from "@/hook/reactQuery/talkRoom/useDeleteRoomLike";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useLogin } from "@/hook/useLogin";
import timeLapse from "@/util/timeLapse";
import { Heart } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HaveNotData = dynamic(
  () => import("@/app/components/HaveNotData/HaveNotData"),
);
const Modal = dynamic(() => import("@/app/components/Modal/Modal"));

type TalkRoomData = {
  data?: {
    id: number;
    profileImage: string;
    username: string;
    title: string;
    content: string;
    bookIsbn: string;
    bookName: string;
    bookThumbnail: string;
    bookAuthor: string;
    likeCount: number;
    readingStatuses: string[];
    registeredDateTime: string;
    images: string[];
    creatorId: number;
  };
  userId: number;
};
const talkroomDetailMain: React.FC<TalkRoomData> = ({ data, userId }) => {
  const router = useRouter();
  const { isLoggedIn } = useLogin();
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };

  const [isLike, setIsLike] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [deleteShowModal, setDeleteShowModal] = useState<boolean>(false);
  const addTalkRoomLike = useCreateRoomLike();
  const deleteTalkRoomLike = useDeleteRoomLike();
  const deleteRoom = useDeleteRoom();

  useEffect(() => {
    if (data) {
      setCount(data.likeCount);
      setIsLike(
        isLoggedIn && (talkRoomLikeIds?.talkRoomIds || []).includes(data?.id),
      );
    }
  }, [data]);

  const changeIsLike = () => {
    if (data) {
      if (userId === -1 || data.creatorId === userId) {
        setShowModal(true);
        return;
      }
      if (isLike) {
        deleteTalkRoomLike.mutate(data.id);
        setCount((prevCount) => prevCount - 1);
      } else {
        addTalkRoomLike.mutate(data.id);
        setCount((prevCount) => prevCount + 1);
      }
      setIsLike(!isLike);
    }
  };

  if (!data) {
    return <HaveNotData content={"책의 정보가"} />;
  }

  const closeModal = () => setShowModal(false);

  const deleteMyRoom = () => {
    deleteRoom.mutate(data.id, {
      onSuccess: () => {
        router.push("/talkroom/?order=recent");
      },
    });
  };

  const isDeleteShowModal = () => setDeleteShowModal(!deleteShowModal);

  return (
    <div className="size-full bg-[white] border-2 border-[#F4E4CE] rounded-[12px] flex flex-col font-Pretendard font-medium">
      <div className="2xl:m-12 xl:m-10 lg:m-8 md:m-6 sm:m-4">
        <div className="flex flex-col items-end">
          <p className="flex flex-col items-center">
            <IconButton onClick={changeIsLike}>
              {isLike ? (
                <>
                  <Heart className="size-7 sm:size-5" fill="red" stroke="red" />
                  <span className="font-Inter font-regular text-base md:text-sm sm:text-xs text-[#F24D4D]">
                    {count}
                  </span>
                </>
              ) : (
                <>
                  <Heart className="size-7 sm:size-5" stroke="#656565" />
                  <span className="font-Inter font-regular text-base md:text-sm sm:text-xs text-[#656565]">
                    {count}
                  </span>
                </>
              )}
            </IconButton>
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="flex items-center text-[#000] mt-2 sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-4">
            <span className="mr-2 md:mr-1 sm:mr-1">
              <Image
                src={TitleThemeBigImg}
                alt="책 제목"
                className="2xl:size-7 size-5 size-5 sm:size-4"
              />
            </span>
            <span>{data.title}</span>
          </h1>

          <span className="flex font-regular 2xl:text-lg xl:text-base lg:text-sm text-xs text-[#7E7E7E]">
            생성일: {timeLapse(data.registeredDateTime)}
          </span>

          <Image
            className="sm:w-[120px] sm:h-[160px] md:w-[160px] md:h-[200px] lg:w-[200px] lg:h-[260px] xl:w-[220px] xl:h-[280px] 2xl:w-[260px] 2xl:h-[340px] border border-solid border-[#F4E4CE] my-[27px]"
            src={data.bookThumbnail || NoImage}
            alt={"책표지"}
            width={223}
            height={291}
          />

          <h2 className="flex items-center text-[#656565] mb-[20px] sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            <Image
              src={BookTitleBigImg}
              alt="책 제목"
              className="2xl:size-6 xl:size-5 size-4 sm:size-3 mr-2 sm:mr-1"
            />
            <span>{data.bookName}</span>
          </h2>
        </div>

        <div className="flex flex-col items-center font-Pretendard font-medium text-[#FF6363]">
          <h3 className="sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-2">
            참가조건
          </h3>
          <p className="flex flex-row flex-wrap justify-center gap-x-3 sm:gap-2">
            {data.readingStatuses.map((status: string, index: number) => (
              <span
                className="flex justify-center items-center text-[#656565] bg-[#FBF7F0] border border-[#F4E4CE] border-solid rounded-[4px]
                sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl
                px-2 py-1
                "
                key={index}
              >
                {status}
              </span>
            ))}
          </p>
        </div>

        <hr className="border border-solid border-[#F5EFE5] my-7" />

        <div className="min-h-[120px]">
          <h3 className="font-semibold sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-[5px]">
            {data.title}
          </h3>
          <span className="font-regular sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-[#000]">
            {data.content}
          </span>
        </div>

        <hr className="border border-solid border-[#F5EFE5] my-7" />

        <p className="font-semibold sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-5">
          이미지
        </p>
        {data.images.length > 0 ? (
          <p className="flex flex-wrap gap-6">
            {data.images.map((image: string, index: number) => (
              <Image
                key={image}
                className="2xl:size-40 xl:size-36 lg:size-32 md:size-28 sm:size-24 border border-solid border-[#FBF7F0] rounded-[4px]"
                src={image}
                alt="이미지"
                width={160}
                height={160}
              />
            ))}
          </p>
        ) : (
          <HaveNotData content="이미지가" />
        )}

        {data.creatorId === userId && (
          <div className="flex justify-end  gap-x-3 mb-6">
            <DeleteButton onClick={isDeleteShowModal} />
          </div>
        )}
      </div>

      {userId === -1 ? (
        <Modal
          title="로그인"
          content="로그인을 해야 이용할 수 있는 기능입니다"
          isOpen={showModal}
          onClose={closeModal}
          onConfirm={closeModal}
          buttonTitle="확인"
        />
      ) : (
        <Modal
          title="좋아요 실패"
          content="본인이 작성한 토크방에는 좋아요를 할 수 없습니다"
          isOpen={showModal}
          onClose={closeModal}
          onConfirm={closeModal}
          buttonTitle="확인"
        />
      )}
      <Modal
        title="토크방 삭제"
        content="토크방을 삭제하시겠습니까?"
        isOpen={deleteShowModal}
        onClose={isDeleteShowModal}
        onConfirm={deleteMyRoom}
        buttonTitle="삭제"
      />
    </div>
  );
};

export default talkroomDetailMain;
