import PasueOn from "@/assets/img/pasue-on.svg";
import PasueOff from "@/assets/img/pause-off.svg";
import ReadOff from "@/assets/img/read-off.svg";
import ReadOn from "@/assets/img/read-on.svg";
import ReadStopOff from "@/assets/img/read-stop-off.svg";
import ReadStopOn from "@/assets/img/read-stop-on.svg";
import ReadingOff from "@/assets/img/reading-off.svg";
import ReadingOn from "@/assets/img/reading-on.svg";
import WantToReadOff from "@/assets/img/want-to-read-off.svg";
import WantToReadOn from "@/assets/img/want-to-read-on.svg";
import { useCreateBookState } from "@/hook/reactQuery/book/useCreateBookState";
import { useDeleteBookState } from "@/hook/reactQuery/book/useDeleteBookState";
import { useGetBookState } from "@/hook/reactQuery/book/useGetBookState";
import { usePatchBookState } from "@/hook/reactQuery/book/usePatchBookState";
import { useLogin } from "@/hook/useLogin";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Modal = dynamic(() => import("@/app/components/Modal/Modal"));

type BookStatusCondition = {
  isbn: string;
  isLogin: boolean;
};

const BookStatus: React.FC<BookStatusCondition> = ({ isbn, isLogin }) => {
  const { isLoggedIn } = useLogin();
  const { data: statusData, refetch } = isLoggedIn
    ? useGetBookState()
    : { data: [], refetch: () => {} };
  const [status, setStatus] = useState<string>("");
  const [bookStateId, setBookStateId] = useState<number | null>(null);
  const statusMap: { [key: string]: string } = {
    "읽고 싶은": "want",
    "읽는 중": "reading",
    읽음: "read",
    "잠시 멈춤": "pause",
    중단: "stop",
  };

  useEffect(() => {
    const bookState = Array.isArray(statusData)
      ? statusData.find((book) => book.bookIsbn === isbn)
      : null;
    if (bookState) {
      setStatus(statusMap[bookState.status] || "");
      setBookStateId(bookState.id);
    } else {
      setStatus("");
      setBookStateId(null);
    }
  }, [statusData, isbn]);

  const createBookState = useCreateBookState();
  const deleteBookState = useDeleteBookState();
  const patchBookState = usePatchBookState(bookStateId || 0);
  const [showModal, setShowModal] = useState<boolean>(false);

  const changeStatus = (statusName: string) => {
    if (isLogin) {
      if (status === "") {
        createBookState.mutate(
          { isbn, readingStatus: statusName },
          {
            onSuccess: () => {
              setStatus(statusName);
              refetch();
            },
          },
        );
      } else if (statusName === status) {
        if (bookStateId !== null) {
          deleteBookState.mutate(bookStateId, {
            onSuccess: () => {
              setStatus("");
              refetch();
            },
          });
        }
      } else {
        if (bookStateId !== null) {
          patchBookState.mutate(
            { isbn, readingStatus: statusName },
            {
              onSuccess: () => {
                setStatus(statusName);
                refetch();
              },
            },
          );
        }
      }
    } else {
      setShowModal(!showModal);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="cursor-pointer" onClick={() => changeStatus("want")}>
        {status === "want" ? <WantToReadOn /> : <WantToReadOff />}
      </div>
      <div className="cursor-pointer" onClick={() => changeStatus("reading")}>
        {status === "reading" ? <ReadingOn /> : <ReadingOff />}
      </div>
      <div className="cursor-pointer" onClick={() => changeStatus("read")}>
        {status === "read" ? <ReadOn /> : <ReadOff />}
      </div>
      <div className="cursor-pointer" onClick={() => changeStatus("pause")}>
        {status === "pause" ? <ReadStopOn /> : <ReadStopOff />}
      </div>
      <div className="cursor-pointer" onClick={() => changeStatus("stop")}>
        {status === "stop" ? <PasueOn /> : <PasueOff />}
      </div>
      {!isLogin && (
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
  );
};

export default BookStatus;
