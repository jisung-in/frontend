import { Button } from "@/app/components/Button/Button";
import { Textarea } from "@/app/components/Textarea/Textarea";
import { useInput } from "@/hook/useInput";
const registerEvaluation = () => {
  const { value: name, handleChange: onNameChange } = useInput("");
  return (
    <>
      <div className="font-SpoqaHanSansNeo font-bold text-[30px] pt-[43px] mb-[28px]">
        한줄평을 작성해보세요
      </div>
      <div className="relative font-Pretendard ">
        <Textarea
          variant="main"
          value={name}
          className="font-regular text-[22px] max-w-[1680px] min-h-[179px]"
          onChange={onNameChange}
          placeholder="한줄평을 자유롭게 작성해보세요."
        />
        <div className="absolute bottom-[26px] right-[36px]">
          <Button className="font-medium text-[21px]">
            <div className="px-[25px] my-[8px]">등록하기</div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default registerEvaluation;
