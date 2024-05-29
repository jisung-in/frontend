import Link from "next/link";

type Href = {
  href: string;
};

const ModifyButton = ({ href }: Href) => {
  return (
    <Link href={href}>
      <div className="flex items-center justify-center text-[21px] text-[#656565] px-[10px] border-[#D9D9D9] border border-solid rounded-[3px] bg-[#FFF] hover:bg-[#FBFBFB] hover:border-[#80685D] cursor-pointer">
        수정
      </div>
    </Link>
  );
};

export default ModifyButton;
