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
        <Modal />
      ) : (
        <div className="mt-[90px] static">
          <div className="absolute bottom-[100px] left-[100px]">
            <Leo />
          </div>
          <div className="absolute bottom-[300px] left-[80px]">
            <Cancer />
          </div>
          <div className="absolute bottom-[80px] left-[550px] ">
            <Aquarius />
          </div>
          <div className="absolute bottom-[70px] left-[1000px] ">
            <Sagittarius />
          </div>
          <div className="absolute bottom-[400px] left-[700px] ">
            <Gemini />
          </div>
          <div className="absolute bottom-[340px] left-[900px] ">
            <Capricorn />
          </div>
          <div className="absolute bottom-[300px] left-[500px] ">
            <Taurus />
          </div>
          <div className="absolute bottom-[200px] left-[800px]">
            <Libra />
          </div>
          <div className="absolute bottom-[450px] left-[1100px] ">
            <Pisces />
          </div>
          <div className="absolute bottom-[100px] left-[1200px] ">
            <Scorpio />
          </div>
          <div className="absolute bottom-[200px] left-[350px] ">
            <Aries />
          </div>
          <div className="absolute bottom-[400px] left-[250px] ">
            <Virgo />
          </div>
        </div>
      )}
    </>
  );
};

export default StarSignForm;
