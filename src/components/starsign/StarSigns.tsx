"use client";

import Image from "next/image";
import Leoimg from "../../../public/starsign/Leo.svg";
import Cancerimg from "../../../public/starsign/Cancer.svg";
import Aquariusimg from "../../../public/starsign/Aquarius.svg";
import Sagittariusimg from "../../../public/starsign/Sagittarius.svg";
import Geminiimg from "../../../public/starsign/Gemini.svg";
import Capricornimg from "../../../public/starsign/Capricorn.svg";
import Taurusimg from "../../../public/starsign/Taurus.svg";
import Libraimg from "../../../public/starsign/Libra.svg";
import Piscesimg from "../../../public/starsign/Pisces.svg";
import Scorpioimg from "../../../public/starsign/Scorpio.svg";
import Ariesimg from "../../../public/starsign/Aries.svg";
import Virgoimg from "../../../public/starsign/Virgo.svg";
import { getStarSign } from "@/libs/supabase/getstarsign";

type StarSignData = {
  id: number;
  star_sign_name: string;
  star_sign_description: string;
};

type toggleModals = {
  toggleModal: () => void;
  setStarSignData: (data: StarSignData) => void;
};

export const Leo = ({ toggleModal, setStarSignData }: toggleModals) => {
  const onClickStarsign = async () => {
    const data = await getStarSign("Leo");
    setStarSignData({
      id: data?.id,
      star_sign_name: data?.star_sign_name,
      star_sign_description: data?.star_sign_description,
    });
    toggleModal();
  };

  return (
    <div
      onClick={onClickStarsign}
      className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center"
    >
      <Image src={Leoimg.src} alt="Star Sign" width={60} height={60} />
      <p className="text-white">Leo</p>
    </div>
  );
};

export const Cancer = ({ toggleModal, setStarSignData }: toggleModals) => {
  const onClickStarsign = async () => {
    const data = await getStarSign("Cancer");
    setStarSignData({
      id: data?.id,
      star_sign_name: data?.star_sign_name,
      star_sign_description: data?.star_sign_description,
    });
    toggleModal();
  };

  return (
    <div
      onClick={onClickStarsign}
      className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center"
    >
      <Image src={Cancerimg.src} alt="Star Sign" width={60} height={60} />
      <p className="text-white">Cancer</p>
    </div>
  );
};

export const Aquarius = ({ toggleModal, setStarSignData }: toggleModals) => {
  const onClickStarsign = async () => {
    const data = await getStarSign("Aquarius");
    setStarSignData({
      id: data?.id,
      star_sign_name: data?.star_sign_name,
      star_sign_description: data?.star_sign_description,
    });
    toggleModal();
  };

  return (
    <div
      onClick={onClickStarsign}
      className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center"
    >
      <Image src={Aquariusimg.src} alt="Star Sign" width={60} height={60} />
      <p className="text-white">Aquarius</p>
    </div>
  );
};

export const Sagittarius = ({ toggleModal, setStarSignData }: toggleModals) => {
  const onClickStarsign = async () => {
    const data = await getStarSign("Sagittarius");
    setStarSignData({
      id: data?.id,
      star_sign_name: data?.star_sign_name,
      star_sign_description: data?.star_sign_description,
    });
    toggleModal();
  };

  return (
    <div
      onClick={onClickStarsign}
      className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center"
    >
      <Image src={Sagittariusimg.src} alt="Star Sign" width={60} height={60} />
      <p className="text-white">Sagittarius</p>
    </div>
  );
};

export const Gemini = ({ toggleModal, setStarSignData }: toggleModals) => {
  const onClickStarsign = async () => {
    const data = await getStarSign("Gemini");
    setStarSignData({
      id: data?.id,
      star_sign_name: data?.star_sign_name,
      star_sign_description: data?.star_sign_description,
    });
    toggleModal();
  };

  return (
    <div
      onClick={onClickStarsign}
      className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center"
    >
      <Image src={Geminiimg.src} alt="Star Sign" width={60} height={60} />
      <p className="text-white">Gemini</p>
    </div>
  );
};

export const Capricorn = ({ toggleModal, setStarSignData }: toggleModals) => {
  const onClickStarsign = async () => {
    const data = await getStarSign("Capricorn");
    setStarSignData({
      id: data?.id,
      star_sign_name: data?.star_sign_name,
      star_sign_description: data?.star_sign_description,
    });
    toggleModal();
  };

  return (
    <div
      onClick={onClickStarsign}
      className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center"
    >
      <Image src={Capricornimg.src} alt="Star Sign" width={60} height={60} />
      <p className="text-white">Capricorn</p>
    </div>
  );
};

export const Taurus = ({ toggleModal, setStarSignData }: toggleModals) => {
  const onClickStarsign = async () => {
    const data = await getStarSign("Taurus");
    setStarSignData({
      id: data?.id,
      star_sign_name: data?.star_sign_name,
      star_sign_description: data?.star_sign_description,
    });
    toggleModal();
  };

  return (
    <div
      onClick={onClickStarsign}
      className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center"
    >
      <Image src={Taurusimg.src} alt="Star Sign" width={60} height={60} />
      <p className="text-white">Taurus</p>
    </div>
  );
};

export const Libra = ({ toggleModal, setStarSignData }: toggleModals) => {
  const onClickStarsign = async () => {
    const data = await getStarSign("Libra");
    setStarSignData({
      id: data?.id,
      star_sign_name: data?.star_sign_name,
      star_sign_description: data?.star_sign_description,
    });
    toggleModal();
  };

  return (
    <div
      onClick={onClickStarsign}
      className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center"
    >
      <Image src={Libraimg.src} alt="Star Sign" width={60} height={60} />
      <p className="text-white">Libra</p>
    </div>
  );
};

export const Pisces = ({ toggleModal, setStarSignData }: toggleModals) => {
  const onClickStarsign = async () => {
    const data = await getStarSign("Pisces");
    setStarSignData({
      id: data?.id,
      star_sign_name: data?.star_sign_name,
      star_sign_description: data?.star_sign_description,
    });
    toggleModal();
  };

  return (
    <div
      onClick={onClickStarsign}
      className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center"
    >
      <Image src={Piscesimg.src} alt="Star Sign" width={60} height={60} />
      <p className="text-white">Pisces</p>
    </div>
  );
};

export const Scorpio = ({ toggleModal, setStarSignData }: toggleModals) => {
  const onClickStarsign = async () => {
    const data = await getStarSign("Scorpio");
    setStarSignData({
      id: data?.id,
      star_sign_name: data?.star_sign_name,
      star_sign_description: data?.star_sign_description,
    });
    toggleModal();
  };

  return (
    <div
      onClick={onClickStarsign}
      className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center"
    >
      <Image src={Scorpioimg.src} alt="Star Sign" width={60} height={60} />
      <p className="text-white">Scorpio</p>
    </div>
  );
};

export const Aries = ({ toggleModal, setStarSignData }: toggleModals) => {
  const onClickStarsign = async () => {
    const data = await getStarSign("Aries");
    setStarSignData({
      id: data?.id,
      star_sign_name: data?.star_sign_name,
      star_sign_description: data?.star_sign_description,
    });
    toggleModal();
  };

  return (
    <div
      onClick={onClickStarsign}
      className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center"
    >
      <Image src={Ariesimg.src} alt="Star Sign" width={60} height={60} />
      <p className="text-white">Aries</p>
    </div>
  );
};

export const Virgo = ({ toggleModal, setStarSignData }: toggleModals) => {
  const onClickStarsign = async () => {
    const data = await getStarSign("Virgo");
    setStarSignData({
      id: data?.id,
      star_sign_name: data?.star_sign_name,
      star_sign_description: data?.star_sign_description,
    });
    toggleModal();
  };

  return (
    <div
      onClick={onClickStarsign}
      className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center"
    >
      <Image src={Virgoimg.src} alt="Star Sign" width={60} height={60} />
      <p className="text-white">Virgo</p>
    </div>
  );
};
