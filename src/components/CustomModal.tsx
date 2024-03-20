"use client";

type StarSignData = {
  id: number;
  star_sign_name: string;
  star_sign_description: string;
};

import React from "react";
type toggleModals = {
  toggleModal: () => void;
  starSignData: StarSignData | null;
};

const Modal = ({ toggleModal, starSignData }: toggleModals) => {
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
