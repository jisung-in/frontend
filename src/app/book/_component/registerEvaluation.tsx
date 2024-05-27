import { Button } from "@/app/components/Button/Button";
import { Textarea } from "@/app/components/Textarea/Textarea";
import { useCreateReview } from "@/hook/reactQuery/book/useCreateReview";
import { useInput } from "@/hook/useInput";

type Isbn = {
  isbn: string;
};

const registerEvaluation = ({ isbn }: Isbn) => {
  const { value: review, handleChange: onCreateReview } = useInput("");
  const createReview = useCreateReview();

  const handleReviewSubmit = () => {
    createReview.mutate({ bookIsbn: isbn, content: review });
  };

  return (
    <>
      <div className="font-SpoqaHanSansNeo font-bold text-[30px] pt-[43px] mb-[28px]">
        한줄평을 작성해보세요
      </div>
      <div className="relative font-Pretendard ">
        <Textarea
          variant="main"
          value={review}
          className="font-regular text-[22px] max-w-[1680px] min-h-[179px]"
          onChange={onCreateReview}
          placeholder="한줄평을 자유롭게 작성해보세요."
        />
        <div className="absolute bottom-[26px] right-[36px]">
          <Button
            className="font-medium text-[21px]"
            onClick={handleReviewSubmit}
          >
            <div className="px-[25px] my-[8px]">등록하기</div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default registerEvaluation;
