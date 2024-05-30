import React from "react";
import { Button } from "../Button/Button";

interface ModalProps {
  title: string;
  content: string;
  onClose: () => void;
  onConfirm: () => void;
  isOpen: boolean;
  buttonTitle?: string;
}

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  onClose,
  onConfirm,
  isOpen,
  buttonTitle = "확인",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[650px] sm:w-[320px] overflow-hidden">
        <div className="flex relative justify-center items-center border-b p-4">
          <h2 className="text-2xl font-bold text-center">{title}</h2>
          <button
            className="absolute top-4 right-4 text-xl font-bold"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="flex h-full justify-center items-center min-h-[200px] sm:min-h-[100px] p-4">
          <p>{content}</p>
        </div>
        <div className="flex">
          <Button onClick={onConfirm} rounded="none">
            {buttonTitle}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
