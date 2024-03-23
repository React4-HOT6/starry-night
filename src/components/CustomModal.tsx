"use client";

import useModalStore from "@/store/store";
const Modal = () => {
  const { modalData, BtnData } = useModalStore();

  return (
    <>
      <dialog id="my_modal_1" className="modal modal-open">
        <div className="modal-box text-black max-w-md w-fit flex flex-col gap-2">
          {modalData}
          <div className="modal-action flex justify-center items-center mt-0">
            <form method="dialog">{BtnData}</form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
