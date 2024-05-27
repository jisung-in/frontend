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
import { useEffect, useState } from "react";

type Isbn = {
  isbn: string;
};

const statusMap: { [key: string]: string } = {
  "읽고 싶은": "want",
  "읽는 중": "reading",
  읽음: "read",
  "잠시 멈춤": "pause",
  중단: "stop",
};

const BookStatus: React.FC<Isbn> = ({ isbn }) => {
  const { data: statusData } = useGetBookState(isbn);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    if (statusData?.status) {
      setStatus(statusMap[statusData.status] || "");
    }
  }, [statusData]);

  const createBookState = useCreateBookState();
  const deleteBookState = useDeleteBookState();
  const patchBookState = usePatchBookState(statusData?.id || 0);

  const changeStatus = (statusName: string) => {
    if (status === "") {
      setStatus(statusName);
      createBookState.mutate({ isbn, readingStatus: statusName });
    } else if (statusName === status) {
      setStatus("");
      deleteBookState.mutate(statusData?.id || 0);
    } else {
      setStatus(statusName);
      patchBookState.mutate({ isbn, readingStatus: statusName });
    }
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
    </>
  );
};

export default BookStatus;
