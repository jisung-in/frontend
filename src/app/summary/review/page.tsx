import ReviewCard from "@/app/components/Card/ReviewCard/ReviewCard";

const ReviewPage = () => {
  return (
    <div className="grid grid-cols-2 gap-[20px] w-[80%]">
      {new Array(20).fill(1).map((_, index) => (
        <ReviewCard />
      ))}
    </div>
  );
};

export default ReviewPage;
