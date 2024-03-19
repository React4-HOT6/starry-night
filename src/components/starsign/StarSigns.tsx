import Image from "next/image";
import Leoimg from "../../../public/starsign/1.svg";
import Cancerimg from "../../../public/starsign/2.svg";
import Aquariusimg from "../../../public/starsign/3.svg";
import Sagittariusimg from "../../../public/starsign/4.svg";
import Geminiimg from "../../../public/starsign/5.svg";
import Capricornimg from "../../../public/starsign/6.svg";
import Taurusimg from "../../../public/starsign/7.svg";
import Libraimg from "../../../public/starsign/8.svg";
import Piscesimg from "../../../public/starsign/9.svg";
import Scorpioimg from "../../../public/starsign/10.svg";
import Ariesimg from "../../../public/starsign/11.svg";
import Virgoimg from "../../../public/starsign/12.svg";
export const Leo = () => (
  <div className=" transform hover:scale-125 flex-col transition-transform duration-300 w-[48px] h-[60] flex justify-center items-center">
    <Image src={Leoimg.src} alt="Star Sign" width={48} height={48} />
    <p className="text-white">Leo</p>
  </div>
);

export const Cancer = () => (
  <div className=" transform hover:scale-125 flex-col transition-transform duration-300 w-[48px] h-[60] flex justify-center items-center">
    <Image src={Cancerimg.src} alt="Star Sign" width={48} height={48} />
    <p className="text-white">Cancer</p>
  </div>
);

export const Aquarius = () => (
  <div className=" transform hover:scale-125 flex-col transition-transform duration-300 w-[48px] h-[60] flex justify-center items-center">
    <Image src={Aquariusimg.src} alt="Star Sign" width={48} height={48} />
    <p className="text-white">Aquarius</p>
  </div>
);

export const Sagittarius = () => (
  <div className=" transform hover:scale-125 flex-col transition-transform duration-300 w-[48px] h-[60] flex justify-center items-center">
    <Image src={Sagittariusimg.src} alt="Star Sign" width={48} height={48} />
    <p className="text-white">Sagittarius</p>
  </div>
);

export const Gemini = () => (
  <div className=" transform hover:scale-125 flex-col transition-transform duration-300 w-[48px] h-[60] flex justify-center items-center">
    <Image src={Geminiimg.src} alt="Star Sign" width={48} height={48} />
    <p className="text-white">Gemini</p>
  </div>
);

export const Capricorn = () => (
  <div className=" transform hover:scale-125 flex-col transition-transform duration-300 w-[48px] h-[60] flex justify-center items-center">
    <Image src={Capricornimg.src} alt="Star Sign" width={48} height={48} />
    <p className="text-white">Capricorn</p>
  </div>
);

export const Taurus = () => (
  <div className=" transform hover:scale-125 flex-col transition-transform duration-300 w-[48px] h-[60] flex justify-center items-center">
    <Image src={Taurusimg.src} alt="Star Sign" width={48} height={48} />
    <p className="text-white">Taurus</p>
  </div>
);

export const Libra = () => (
  <div className=" transform hover:scale-125 flex-col transition-transform duration-300 w-[48px] h-[60] flex justify-center items-center">
    <Image src={Libraimg.src} alt="Star Sign" width={48} height={48} />
    <p className="text-white">Libra</p>
  </div>
);

export const Pisces = () => (
  <div className=" transform hover:scale-125 flex-col transition-transform duration-300 w-[48px] h-[60] flex justify-center items-center">
    <Image src={Piscesimg.src} alt="Star Sign" width={48} height={48} />
    <p className="text-white">Pisces</p>
  </div>
);

export const Scorpio = () => (
  <div className=" transform hover:scale-125 flex-col transition-transform duration-300 w-[48px] h-[60] flex justify-center items-center">
    <Image src={Scorpioimg.src} alt="Star Sign" width={48} height={48} />
    <p className="text-white">Scorpio</p>
  </div>
);

export const Aries = () => (
  <div className=" transform hover:scale-125 flex-col transition-transform duration-300 w-[48px] h-[60] flex justify-center items-center">
    <Image src={Ariesimg.src} alt="Star Sign" width={48} height={48} />
    <p className="text-white">Aries</p>
  </div>
);

export const Virgo = () => (
  <div className=" transform hover:scale-125 flex-col transition-transform duration-300 w-[48px] h-[60] flex justify-center items-center">
    <Image src={Virgoimg.src} alt="Star Sign" width={48} height={48} />
    <p className="text-white">Virgo</p>
  </div>
);
