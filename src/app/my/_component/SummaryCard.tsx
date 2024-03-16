type Props = { path: React.ReactNode; title: string };

const SummaryCard = ({ path, title }: Props) => {
  console.log(path);
  return (
    <div className="cursor-pointer">
      <div className="flex justify-center items-center rounded-lg w-[100px] h-[100px] bg-gray-30 border-2">
        {path}
      </div>
      <div className="pt-[20px] font-bold text-center text-[22px]">{title}</div>
    </div>
  );
};

export default SummaryCard;
