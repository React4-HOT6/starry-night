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
import Image from "next/image";
const StarSignForm = () => {
  const { isModalOpen, starSignData } = useModalStore();

  return (
    <>
      {isModalOpen ? (
        //공용 모달을 이용하기위해 children 사용
        <Modal>
          <Image
            src={`${starSignData?.s_img_url}`}
            alt={`${starSignData?.star_sign_name}`}
            width={500}
            height={300}
          />
          <h3 className="font-bold text-lg">{starSignData?.star_sign_name}</h3>
          <p className="py-4">{starSignData?.star_sign_description}</p>
        </Modal>
      ) : (
        <div className="max-w-[1200px] min-h-screen w-[1200px] h-[500px] flex flex-col justify-center items-center">
          <div className="max-w-[1200px] w-[1200px]  h-[200px] flex justify-center items-center">
            <Leo />
            <Cancer />
            <Aquarius />
            <Sagittarius />
          </div>
          <div className="max-w-[1200px] w-[1200px]  h-[200px] flex justify-center items-center">
            <Gemini />
            <Capricorn />
            <Taurus />
            <Libra />
          </div>
          <div className="max-w-[1200px] w-[1200px]  h-[200px] flex justify-center items-center">
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
