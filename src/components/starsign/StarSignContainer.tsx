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
import Modal from "@/components/modal/CustomModal";
import { useModalStore } from "@/store/store";
const StarSignForm = () => {
  const { isModalOpen } = useModalStore();

  return (
    <>
      {isModalOpen ? (
        <>
          <Modal />
        </>
      ) : (
        <div className="pt-[90px] pb-6 max-w-[1200px] gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Leo />
          <Cancer />
          <Aquarius />
          <Sagittarius />
          <Gemini />
          <Capricorn />
          <Taurus />
          <Libra />
          <Pisces />
          <Scorpio />
          <Aries />
          <Virgo />
        </div>
      )}
    </>
  );
};

export default StarSignForm;
