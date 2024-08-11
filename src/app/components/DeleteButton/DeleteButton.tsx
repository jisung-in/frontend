type DeleteFunction = {
  onClick: () => void;
};

const DeleteButton = ({ onClick }: DeleteFunction) => {
  return (
    <div
      className="flex items-center justify-center text-[16px] text-[#656565] px-[10px] border-[#D9D9D9] border border-solid rounded-[3px] bg-[#FFF] hover:bg-[#FBFBFB] hover:border-[#80685D] cursor-pointer"
      onClick={onClick}
    >
      삭제
    </div>
  );
};

export default DeleteButton;
