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
import Modal from "@/components/CustomModal";
import useModalStore from "@/store/store";
const StarSignForm = () => {
  const { isModalOpen, starSignData } = useModalStore();

  return (
    <>
      {isModalOpen ? (
        //state로 공용 모달 사용
        <Modal>
          <h3 className="font-bold text-lg">{starSignData?.star_sign_name}</h3>
          <p className="py-4">{starSignData?.star_sign_description}</p>
        </Modal>
      ) : (
        <div className="max-w-[1200px] min-h-screen w-96 h-[500px] flex flex-col justify-center items-center">
          <div className="max-w-[1200px] w-96 h-[200px] flex justify-center items-center">
            <Leo />
            <Cancer />
            <Aquarius />
            <Sagittarius />
          </div>
          <div className="max-w-[1200px] w-96 h-[200px] flex justify-center items-center">
            <Gemini />
            <Capricorn />
            <Taurus />
            <Libra />
          </div>
          <div className="max-w-[1200px] w-96 h-[200px] flex justify-center items-center">
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
