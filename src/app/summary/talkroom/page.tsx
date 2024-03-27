import RoomCard from "@/app/components/Card/RoomCard/RoomCard";

const StarPage = () => {
  return (
    <div className="grid grid-cols-2 gap-[20px] w-[80%]">
      {new Array(20).fill(1).map((_, index) => (
        <RoomCard />
      ))}
    </div>
  );
};

export default StarPage;
