"use client";

import useModalStore from "@/store/store";
import { Meteors } from "./ui/meteors";
const Modal = () => {
  const { modalData, BtnData } = useModalStore();

  return (
    <>
      <dialog id="my_modal_1" className="modal modal-open">
        <div className="modal-box text-black ">
          {modalData}
          <div className="modal-action flex justify-center items-center">
            <form method="dialog">{BtnData}</form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
