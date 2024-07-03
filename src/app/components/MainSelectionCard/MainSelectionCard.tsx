import EvaluationComponent from "@/assets/img/evalutaion.svg";
import QuestionComponent from "@/assets/img/question.svg";
import RecordComponent from "@/assets/img/record.svg";
import { Skeleton } from "@nextui-org/skeleton";
import clsx from "clsx";

type MainSelectionCardType = {
  isMain: boolean;
  type:
    | "record"
    | "question"
    | "evaluation"
    | "middleRecord"
    | "middleQuestion"
    | "middleEvaluation"
    | "smallerRecord"
    | "smallerQuestion"
    | "smallerEvaluation";
  rounded: boolean;
  isLoading: boolean;
};

const obj = {
  record: {
    color: "#C08CF8",
    file: <RecordComponent className="w-40 h-40" />,
    text: "기록",
  },
  question: {
    color: "#FFCE55",
    file: <QuestionComponent className="w-40 h-40" />,
    text: "질문",
  },
  evaluation: {
    color: "#FF9597",
    file: <EvaluationComponent className="w-40 h-40" />,
    text: "평가",
  },
  middleRecord: {
    color: "#C08CF8",
    file: <RecordComponent className="w-12 h-12" />,
    text: "기록",
  },
  middleQuestion: {
    color: "#FFCE55",
    file: <QuestionComponent className="w-12 h-12" />,
    text: "질문",
  },
  middleEvaluation: {
    color: "#FF9597",
    file: <EvaluationComponent className="w-12 h-12" />,
    text: "평가",
  },
  smallerRecord: {
    color: "#C08CF8",
    file: <RecordComponent className="w-8 h-8" />,
    text: "기록",
  },
  smallerQuestion: {
    color: "#FFCE55",
    file: <QuestionComponent className="w-8 h-8" />,
    text: "질문",
  },
  smallerEvaluation: {
    color: "#FF9597",
    file: <EvaluationComponent className="w-8 h-8" />,
    text: "평가",
  },
};

const MainSelectionCard = ({
  isMain,
  type,
  rounded,
  isLoading,
}: MainSelectionCardType) => {
  const { color, file, text } = obj[type];

  if (isMain) {
    return (
      <div
        className="flex flex-col rounded-[30px] flex-1 text-brown-60 hover:text-white duration-200 cursor-pointer"
        style={{ backgroundColor: color }}
      >
        {isLoading ? (
          <Skeleton className="rounded-[30px]">
            <span className="flex w-full text-[40px] ml-9 mt-8 font-Jalnan2">
              {text}
            </span>
            <div className="flex w-full justify-end pr-5 pb-2">{file}</div>
          </Skeleton>
        ) : (
          <>
            <span className="flex w-full text-[40px] ml-9 mt-8 font-Jalnan2">
              {text}
            </span>
            <div className="flex w-full justify-end pr-5 pb-2">{file}</div>
          </>
        )}
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        rounded
          ? "rounded-[40px] gap-x-2 px-4 pt-[10px] pb-[11px]"
          : "rounded-[13px] gap-x-3 px-4 py-3",
      )}
      style={{ backgroundColor: color }}
    >
      {isLoading ? (
        <Skeleton
          className={clsx(
            rounded
              ? "rounded-[40px] gap-x-2 px-4 pt-[10px] pb-[11px]"
              : "rounded-[13px] gap-x-3 px-4 py-3",
          )}
        >
          <span
            className={clsx(
              "flex text-brown-60 font-Jalnan2",
              type.slice(0, 1) === "m"
                ? "w-[67px] text-[33px] pt-1.5"
                : "w-[47px] text-[23px] pt-1.5",
            )}
          >
            {text}
          </span>
          {file}
        </Skeleton>
      ) : (
        <>
          <span
            className={clsx(
              "flex text-brown-60 font-Jalnan2",
              type.slice(0, 1) === "m"
                ? "w-[67px] text-[33px] pt-1.5"
                : "w-[47px] text-[23px] pt-1.5",
            )}
          >
            {text}
          </span>
          {file}
        </>
      )}
    </div>
  );
};

export default MainSelectionCard;
