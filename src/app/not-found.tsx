import Link from "next/link";
import { NextPage } from "next";
import NotFoundImage from "../assets/img/notFound.png";
import Image from "next/image";
import { Button } from "./components/Button/Button";

const NotFound: NextPage = () => {
  return (
    <div className="flex flex-col w-[100dvw] h-[80dvh] justify-center items-center">
      <Image src={NotFoundImage} alt={"404"} width={500} height={500} />
      <div className="w-[20rem] pt-[5rem]">
        <Button>
          <Link href="/" className="font-bold">
            Go to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
