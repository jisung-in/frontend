import DeleteButton from "@/app/components/DeleteButton/DeleteButton";
import IconButton from "@/app/components/IconButton/IconButton";
import BookTitleBigImg from "@/assets/img/book-title-big.svg";
import Like from "@/assets/img/like.svg";
import NoImage from "@/assets/img/no-image.png";
import NotLike from "@/assets/img/not-like.svg";
import TitleThemeBigImg from "@/assets/img/theme-title-big.svg";
import { useCreateRoomLike } from "@/hook/reactQuery/talkRoom/useCreateRoomLike";
import { useDeleteRoom } from "@/hook/reactQuery/talkRoom/useDeleteRoom";
import { useDeleteRoomLike } from "@/hook/reactQuery/talkRoom/useDeleteRoomLike";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useLogin } from "@/hook/useLogin";
import timeLapse from "@/util/timeLapse";
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
    <div className="w-full min-h-[1194px] bg-[white] border-2 border-[#F4E4CE] rounded-[12px] flex flex-col font-Pretendard font-medium">
      <div className="mx-[46px] mt-[44px]">
        <div className="flex flex-col">
          <div className="flex flex-col items-end">
            <div className="flex flex-col">
              <div className="flex flex-col items-center">
                <IconButton onClick={changeIsLike}>
                  {isLike ? (
                    <>
                      <Like width={26} height={24} />
                      <div className="h-[16px] font-Inter font-regular text-[16px] text-[#F24D4D]">
                        {count}
                      </div>
                    </>
                  ) : (
                    <>
                      <NotLike width={26} height={24} />
                      <div className="h-[16px] font-Inter font-regular text-[16px] text-[#656565]">
                        {count}
                      </div>
                    </>
                  )}
                </IconButton>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center text-[#000] mt-[6px] text-[30px] mb-4">
              <div className="mr-[7px]">
                <TitleThemeBigImg />
              </div>
              {data.title}
            </div>
            <div className="flex font-regular text-lg text-[#7E7E7E]">
              생성일: &nbsp;
              {timeLapse(data.registeredDateTime)}
            </div>
            <Image
              className="min-w-[260px] min-h-[339px] max-w-[260px] max-h-[339px]  border border-solid border-[#F4E4CE] my-[27px]"
              src={data.bookThumbnail || NoImage}
              alt={"책표지"}
              width={223}
              height={291}
            />

            <div className="flex items-center text-[#656565] mb-[20px] text-[28px]">
              <div className="mr-[7px]">
                <BookTitleBigImg />
              </div>
              {data.bookName}
            </div>
          </div>
          <div className="flex flex-col items-center mt-[19px] font-Pretendard font-medium text-lg text-[#FF6363]">
            <div className="text-2xl mb-[7px]">참가조건</div>
            <div className="flex flex-row gap-x-3 h-[30px]">
              {data.readingStatuses.map((status: string, index: number) => (
                <div
                  className="flex justify-center items-center w-auto h-[35px] text-[#656565] bg-[#FBF7F0] border border-[#F4E4CE] border-solid rounded-[4px] px-[9px] py-[7px]"
                  key={index}
                >
                  {status}
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="border border-solid border-[#F5EFE5] mt-[34px] mb-[25px]" />

        <div className="min-h-[120px]">
          <div className="font-semibold text-2xl mb-[5px]">{data.title}</div>
          <div className="font-regular text-[22px] text-[#000]">
            {data.content}
          </div>
        </div>

        <hr className="border border-solid border-[#F5EFE5] mt-[25px] mb-[35px]" />

        <div className="font-semibold text-2xl mb-[18px]">이미지</div>
        {data.images.length > 0 ? (
          <div className="flex gap-x-[23px] mb-10">
            {data.images.map((image: string, index: number) => (
              <Image
                key={`image_${index}`}
                className="min-w-[160px] max-w-[160px] min-h-[160px] max-h-[160px] border border-solid border-[#FBF7F0] rounded-[4px]"
                src={image}
                alt="이미지"
                width={160}
                height={160}
              />
            ))}
          </div>
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
