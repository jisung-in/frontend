import RecordComponent from "@/assets/img/record.svg";
import QuestionComponent from "@/assets/img/question.svg";
import EvaluationComponent from "@/assets/img/evalutaion.svg";
import clsx from "clsx";

type MainSelectionCardType = {
  isMain: boolean;
  type:
    | "record"
    | "question"
    | "evaluation"
    | "smallerRecord"
    | "smallerQuestion"
    | "smallerEvaluation";
  rounded: boolean;
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
    file: <EvaluationComponent className="w-6 h-6" />,
    text: "평가",
  },
};

const MainSelectionCard = ({
  isMain,
  type,
  rounded,
}: MainSelectionCardType) => {
  const { color, file, text } = obj[type];

  if (isMain) {
    return (
      <div
        className="flex flex-col rounded-lg flex-1 text-brown-60 hover:text-white duration-200 cursor-pointer"
        style={{ backgroundColor: color }}
      >
        <span className="flex w-full text-[40px] pl-4 pt-4 font-bold">
          {text}
        </span>
        <div className="flex w-full justify-end pr-4">{file}</div>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-lg p-2 px-4 gap-2",
        rounded && "rounded-[40px]",
      )}
      style={{ backgroundColor: color }}
    >
      <span className="flex text-[25px] font-bold text-brown-60">{text}</span>
      {file}
    </div>
  );
};

export default MainSelectionCard;
