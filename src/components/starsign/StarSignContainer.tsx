"use client";

import {
  Leo,
  Cancer,
  Aquarius,
  Sagittarius,
  Gemini,
  Capricorn,
  Taurus,
  Libra,
  Pisces,
  Scorpio,
  Aries,
  Virgo,
} from "./StarSigns";
import Modal from "@/components/CustomModal";
import useModalStore from "@/store/store";
const StarSignForm = () => {
  const { isModalOpen, toggleModal, setStarSignData, starSignData } =
    useModalStore();

  return (
    <>
      {isModalOpen ? (
        <Modal />
      ) : (
        <div className="max-w-[1200px] min-h-screen w-96 h-[500px] flex flex-col justify-center items-center">
          <div className="max-w-[1200px] w-96 h-[150px] flex justify-center items-center">
            <Leo />
            <Cancer />
            <Aquarius />
            <Sagittarius />
          </div>
          <div className="max-w-[1200px] w-96 h-[150px] flex justify-center items-center">
            <Gemini />
            <Capricorn />
            <Taurus />
            <Libra />
          </div>
          <div className="max-w-[1200px] w-96 h-[150px] flex justify-center items-center">
            <Pisces />
            <Scorpio />
            <Aries />
            <Virgo />
          </div>
        </div>
      )}
    </>
  );
};

export default StarSignForm;
