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
        <Modal toggleModal={toggleModal} starSignData={starSignData} />
      ) : (
        <div className="max-w-[1200px] min-h-screen w-96 h-[500px] flex flex-col justify-center items-center">
          <div className="max-w-[1200px] w-96 h-[150px] flex justify-center items-center">
            <Leo toggleModal={toggleModal} setStarSignData={setStarSignData} />
            <Cancer
              toggleModal={toggleModal}
              setStarSignData={setStarSignData}
            />
            <Aquarius
              toggleModal={toggleModal}
              setStarSignData={setStarSignData}
            />
            <Sagittarius
              toggleModal={toggleModal}
              setStarSignData={setStarSignData}
            />
          </div>
          <div className="max-w-[1200px] w-96 h-[150px] flex justify-center items-center">
            <Gemini
              toggleModal={toggleModal}
              setStarSignData={setStarSignData}
            />
            <Capricorn
              toggleModal={toggleModal}
              setStarSignData={setStarSignData}
            />
            <Taurus
              toggleModal={toggleModal}
              setStarSignData={setStarSignData}
            />
            <Libra
              toggleModal={toggleModal}
              setStarSignData={setStarSignData}
            />
          </div>
          <div className="max-w-[1200px] w-96 h-[150px] flex justify-center items-center">
            <Pisces
              toggleModal={toggleModal}
              setStarSignData={setStarSignData}
            />
            <Scorpio
              toggleModal={toggleModal}
              setStarSignData={setStarSignData}
            />
            <Aries
              toggleModal={toggleModal}
              setStarSignData={setStarSignData}
            />
            <Virgo
              toggleModal={toggleModal}
              setStarSignData={setStarSignData}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default StarSignForm;
