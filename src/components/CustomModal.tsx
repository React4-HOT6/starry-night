"use client";

import useModalStore from "@/store/store";
import React, { PropsWithChildren } from "react";

const Modal: React.FC<PropsWithChildren> = ({ children }) => {
  const { toggleModal } = useModalStore();
  const onClickStarsign = () => {
    toggleModal();
  };

  return (
    <>
      <dialog id="my_modal_1" className="modal modal-open">
        <div className="modal-box">
          {children}
          <div className="modal-action flex justify-center items-center">
            <form method="dialog">
              <button onClick={onClickStarsign} className="btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
