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
import useModalStore from "@/store/store";

export const Leo = () => {
  const { toggleModal, setStarSignData } = useModalStore();
  const onClickStarsign = async () => {
    const data = await getStarSign(5);
    try {
      setStarSignData({
        id: data?.id,
        star_sign_name: data?.star_sign_name,
        star_sign_description: data?.star_sign_description,
      });
      toggleModal();
    } catch (err) {
      console.log(err);
    }
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

export const Cancer = () => {
  const { toggleModal, setStarSignData } = useModalStore();

  const onClickStarsign = async () => {
    const data = await getStarSign(4);
    try {
      setStarSignData({
        id: data?.id,
        star_sign_name: data?.star_sign_name,
        star_sign_description: data?.star_sign_description,
      });
      toggleModal();
    } catch (err) {
      console.log(err);
    }
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

export const Aquarius = () => {
  const { toggleModal, setStarSignData } = useModalStore();

  const onClickStarsign = async () => {
    const data = await getStarSign(11);
    try {
      setStarSignData({
        id: data?.id,
        star_sign_name: data?.star_sign_name,
        star_sign_description: data?.star_sign_description,
      });
      toggleModal();
    } catch (err) {
      console.log(err);
    }
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

export const Sagittarius = () => {
  const { toggleModal, setStarSignData } = useModalStore();

  const onClickStarsign = async () => {
    const data = await getStarSign(9);
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

export const Gemini = () => {
  const { toggleModal, setStarSignData } = useModalStore();

  const onClickStarsign = async () => {
    const data = await getStarSign(1);
    try {
      setStarSignData({
        id: data?.id,
        star_sign_name: data?.star_sign_name,
        star_sign_description: data?.star_sign_description,
      });
      toggleModal();
    } catch (err) {
      console.log(err);
    }
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

export const Capricorn = () => {
  const { toggleModal, setStarSignData } = useModalStore();

  const onClickStarsign = async () => {
    const data = await getStarSign(10);
    try {
      setStarSignData({
        id: data?.id,
        star_sign_name: data?.star_sign_name,
        star_sign_description: data?.star_sign_description,
      });
      toggleModal();
    } catch (err) {
      console.log(err);
    }
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

export const Taurus = () => {
  const { toggleModal, setStarSignData } = useModalStore();

  const onClickStarsign = async () => {
    const data = await getStarSign(3);
    try {
      setStarSignData({
        id: data?.id,
        star_sign_name: data?.star_sign_name,
        star_sign_description: data?.star_sign_description,
      });
      toggleModal();
    } catch (err) {
      console.log(err);
    }
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

export const Libra = () => {
  const { toggleModal, setStarSignData } = useModalStore();

  const onClickStarsign = async () => {
    const data = await getStarSign(7);
    try {
      setStarSignData({
        id: data?.id,
        star_sign_name: data?.star_sign_name,
        star_sign_description: data?.star_sign_description,
      });
      toggleModal();
    } catch (err) {
      console.log(err);
    }
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

export const Pisces = () => {
  const { toggleModal, setStarSignData } = useModalStore();

  const onClickStarsign = async () => {
    const data = await getStarSign(12);
    try {
      setStarSignData({
        id: data?.id,
        star_sign_name: data?.star_sign_name,
        star_sign_description: data?.star_sign_description,
      });
      toggleModal();
    } catch (err) {
      console.log(err);
    }
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

export const Scorpio = () => {
  const { toggleModal, setStarSignData } = useModalStore();

  const onClickStarsign = async () => {
    const data = await getStarSign(8);
    try {
      setStarSignData({
        id: data?.id,
        star_sign_name: data?.star_sign_name,
        star_sign_description: data?.star_sign_description,
      });
      toggleModal();
    } catch (err) {
      console.log(err);
    }
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

export const Aries = () => {
  const { toggleModal, setStarSignData } = useModalStore();

  const onClickStarsign = async () => {
    const data = await getStarSign(2);
    try {
      setStarSignData({
        id: data?.id,
        star_sign_name: data?.star_sign_name,
        star_sign_description: data?.star_sign_description,
      });
      toggleModal();
    } catch (err) {
      console.log(err);
    }
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

export const Virgo = () => {
  const { toggleModal, setStarSignData } = useModalStore();

  const onClickStarsign = async () => {
    const data = await getStarSign(6);
    try {
      setStarSignData({
        id: data?.id,
        star_sign_name: data?.star_sign_name,
        star_sign_description: data?.star_sign_description,
      });
      toggleModal();
    } catch (err) {
      console.log(err);
    }
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
