import PasueOff from "@/assets/img/pause-off.png";
import PasueOn from "@/assets/img/pause-on.png";
import ReadOff from "@/assets/img/read-off.png";
import ReadOn from "@/assets/img/read-on.png";
import ReadStopOff from "@/assets/img/read-stop-off.png";
import ReadStopOn from "@/assets/img/read-stop-on.png";
import ReadingOff from "@/assets/img/reading-off.png";
import ReadingOn from "@/assets/img/reading-on.png";
import WantToReadOff from "@/assets/img/want-to-read-off.png";
import WantToReadOn from "@/assets/img/want-to-read-on.png";
import { useCreateBookState } from "@/hook/reactQuery/book/useCreateBookState";
import { useDeleteBookState } from "@/hook/reactQuery/book/useDeleteBookState";
import { useGetBookState } from "@/hook/reactQuery/book/useGetBookState";
import { usePatchBookState } from "@/hook/reactQuery/book/usePatchBookState";
import { useLogin } from "@/hook/useLogin";
import debounce from "lodash.debounce";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const Modal = dynamic(() => import("@/app/components/Modal/Modal"));

type BookStatusCondition = {
  isbn: string;
};

const statusOptions = [
  { status: "want", Correct: WantToReadOn, InCorrect: WantToReadOff },
  { status: "reading", Correct: ReadingOn, InCorrect: ReadingOff },
  { status: "read", Correct: ReadOn, InCorrect: ReadOff },
  { status: "pause", Correct: ReadStopOn, InCorrect: ReadStopOff },
  { status: "stop", Correct: PasueOn, InCorrect: PasueOff },
];

const BookStatus: React.FC<BookStatusCondition> = ({ isbn }) => {
  const { isLoggedIn } = useLogin();
  const { data: statusData, refetch } = isLoggedIn
    ? useGetBookState()
    : { data: [], refetch: () => {} };
  const [status, setStatus] = useState<string | null>(null);
  const [bookStateId, setBookStateId] = useState<number | null>(null);
  const statusMap: { [key: string]: string } = {
    "읽고 싶은": "want",
    "읽는 중": "reading",
    읽음: "read",
    "잠시 멈춤": "pause",
    중단: "stop",
  };
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const bookState = Array.isArray(statusData)
      ? statusData.find((book) => book.bookIsbn === isbn)
      : null;
    if (bookState) {
      setStatus(statusMap[bookState.status] || "");
      setBookStateId(bookState.id);
    } else {
      setStatus(null);
      setBookStateId(null);
    }
  }, [statusData, isbn]);

  const createBookState = useCreateBookState();
  const deleteBookState = useDeleteBookState();
  const patchBookState = usePatchBookState(bookStateId || 0);
  const [showModal, setShowModal] = useState<boolean>(false);

  const changeStatus = useCallback(
    debounce((statusName: string) => {
      if (!isLoggedIn) {
        setShowModal(true);
        return;
      }

      const successStatusChange = () => {
        setStatus(statusName === status ? "" : statusName);
        refetch();
      };

      if (status === "") {
        createBookState.mutate(
          { isbn, readingStatus: statusName },
          { onSuccess: successStatusChange },
        );
      } else if (statusName === status && bookStateId !== null) {
        deleteBookState.mutate(bookStateId, { onSuccess: successStatusChange });
      } else if (bookStateId !== null) {
        patchBookState.mutate(
          { isbn, readingStatus: statusName },
          { onSuccess: successStatusChange },
        );
      }
    }, 300), // 0.3초 디바운스 설정
    [
      isLoggedIn,
      status,
      bookStateId,
      isbn,
      createBookState,
      deleteBookState,
      patchBookState,
      refetch,
    ],
  );
  const closeModal = () => setShowModal(false);

  return (
    <>
      {isClient ? (
        <>
          {statusOptions.map(({ status: statusOption, Correct, InCorrect }) => (
            <div
              key={statusOption}
              className="cursor-pointer"
              onClick={() => changeStatus(statusOption)}
            >
              {status === statusOption ? (
                <Image
                  className="2xl:size-[64px] xl:size-[56px] size-[50px]"
                  src={Correct}
                  alt="상태"
                />
              ) : (
                <Image
                  className="2xl:size-[64px] xl:size-[56px] size-[50px]"
                  src={InCorrect}
                  alt="상태"
                />
              )}
            </div>
          ))}

          {!isLoggedIn && (
            <Modal
              title="로그인"
              content="로그인을 해야 이용할 수 있는 기능입니다"
              isOpen={showModal}
              onClose={closeModal}
              onConfirm={closeModal}
              buttonTitle="확인"
            />
          )}
        </>
      ) : (
        <>책 상태 불러오는중...</>
      )}
    </>
  );
};

export default BookStatus;
