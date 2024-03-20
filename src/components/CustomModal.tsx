"use client";

import useModalStore from "@/store/store";
import React from "react";

const Modal = () => {
  const { toggleModal, starSignData } = useModalStore();
  const onClickStarsign = () => {
    toggleModal();
  };

  return (
    <>
      <dialog id="my_modal_1" className="modal modal-open">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{starSignData?.star_sign_name}</h3>
          <p className="py-4">{starSignData?.star_sign_description}</p>
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
