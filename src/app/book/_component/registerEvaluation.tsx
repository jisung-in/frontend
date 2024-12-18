"use client";

import { Button } from "@/app/components/Button/Button";
import { Textarea } from "@/app/components/Textarea/Textarea";
import { useCreateReview } from "@/hook/reactQuery/book/useCreateReview";
import { useInput } from "@/hook/useInput";
import { useLogin } from "@/hook/useLogin";
import dynamic from "next/dynamic";
import { useState } from "react";

const Modal = dynamic(() => import("@/app/components/Modal/Modal"));

type RegisterEvaluationProps = {
  isbn: string;
};

const RegisterEvaluation = ({ isbn }: RegisterEvaluationProps) => {
  const { isLoggedIn } = useLogin();
  const { value: review, handleChange: onCreateReview } = useInput("");
  const createReview = useCreateReview();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleReviewSubmit = () => {
    if (isLoggedIn && review.trim().length > 0) {
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
      <p className="font-SpoqaHanSansNeo font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base my-7">
        한줄평을 작성해보세요
      </p>
      <div className="relative font-Pretendard">
        <Textarea
          variant="main"
          value={review}
          className="font-regular 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm w-full min-h-[179px]"
          onChange={onCreateReview}
          placeholder="한줄평을 자유롭게 작성해보세요."
        />
        <div className="absolute bottom-7 right-7 md:bottom-6 md:right-6 sm:bottom-5 sm:right-5">
          <Button
            className="sm:w-20 sm:h-[36px] md:w-24 md:h-10 lg:w-[110px] xl:w-32 xl:h-[52px] 2xl:w-36 2xl:h-[60px]"
            onClick={handleReviewSubmit}
          >
            <div className="font-medium 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm">
              등록하기
            </div>
          </Button>
        </div>
      </div>

      {!isLoggedIn ? (
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

export default RegisterEvaluation;
