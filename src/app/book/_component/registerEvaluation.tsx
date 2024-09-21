import { Button } from "@/app/components/Button/Button";
import { Textarea } from "@/app/components/Textarea/Textarea";
import { useCreateReview } from "@/hook/reactQuery/book/useCreateReview";
import { useInput } from "@/hook/useInput";
import dynamic from "next/dynamic";
import { useState } from "react";

const Modal = dynamic(() => import("@/app/components/Modal/Modal"));

type RegisterCondition = {
  isbn: string;
  isLogin: boolean;
};

const registerEvaluation = ({ isbn, isLogin }: RegisterCondition) => {
  const { value: review, handleChange: onCreateReview } = useInput("");
  const createReview = useCreateReview();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleReviewSubmit = () => {
    if (isLogin && review.trim().length > 0) {
      createReview.mutate({ bookIsbn: isbn, content: review });
    }
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const refreshPage = () => {
    setShowModal(false);
    window.location.reload();
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
      {!isLogin ? (
        <Modal
          title="로그인"
          content="로그인을 해야 이용할 수 있는 기능입니다"
          isOpen={showModal}
          onClose={closeModal}
          onConfirm={closeModal}
          buttonTitle="확인"
        />
      ) : review.trim().length > 0 ? (
        <Modal
          title="한줄평 작성 완료"
          content="한줄평이 등록되었습니다"
          isOpen={showModal}
          onClose={refreshPage}
          onConfirm={refreshPage}
          buttonTitle="확인"
        />
      ) : (
        <Modal
          title="한줄평"
          content="한줄평을 적어주세요"
          isOpen={showModal}
          onClose={closeModal}
          onConfirm={closeModal}
          buttonTitle="확인"
        />
      )}
    </>
  );
};

export default registerEvaluation;
