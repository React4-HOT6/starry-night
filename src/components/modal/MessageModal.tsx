import React, { useState } from "react";

type ModalProp = {
  modalToggle: React.Dispatch<React.SetStateAction<boolean>>;
  type?: "alert" | "confirm";
  name?: string;
  text?: string;
  func?: () => void;
};

const MessageModal = ({ type, name, text, func, modalToggle }: ModalProp) => {
  return (
    <dialog id="my_modal_2" className={"modal modal-open"}>
      <div className="modal-box text-black max-w-md w-fit flex flex-col gap-2">
        <div className="px-10 py-2">
          <h2 className="text-2xl font-bold text-center mb-1">{name}</h2>
          <p className="text-center text-lg">{text}</p>
          <div className="modal-action flex justify-center items-center mt-0">
            <form method="dialog">
              {type === "confirm" ? (
                <div className="flex gap-2 mt-2">
                  <button
                    className="btn btn-primary px-8 tracking-widest duration-200 h-10 min-h-6"
                    onClick={func}
                  >
                    확인
                  </button>
                  <button
                    className="btn btn-neutral text-black px-8 tracking-widest duration-200 h-10 min-h-6"
                    onClick={() => modalToggle(false)}
                  >
                    취소
                  </button>
                </div>
              ) : (
                <button
                  className="text-primary"
                  onClick={() => modalToggle(false)}
                >
                  확인
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default MessageModal;
