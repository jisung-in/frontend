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
import { useState } from "react";

type Isbn = {
  isbn: string;
};

const BookStatus: React.FC<Isbn> = ({ isbn }) => {
  const [status, setStatus] = useState<string>("");
  const { mutate } = useCreateBookState(isbn);
  // const { data: statusData } = useGetBookState(isbn);
  // console.log(statusData);
  const changeStatus = (statusName: string) => {
    setStatus(statusName === status ? "" : statusName);
    mutate({ isbn, readingStatus: statusName });
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
