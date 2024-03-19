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
export const Leo = () => (
  <div className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center">
    <Image src={Leoimg.src} alt="Star Sign" width={60} height={60} />
    <p className="text-white">Leo</p>
  </div>
);

export const Cancer = () => (
  <div className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center">
    <Image src={Cancerimg.src} alt="Star Sign" width={60} height={60} />
    <p className="text-white">Cancer</p>
  </div>
);

export const Aquarius = () => (
  <div className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center">
    <Image src={Aquariusimg.src} alt="Star Sign" width={60} height={60} />
    <p className="text-white">Aquarius</p>
  </div>
);

export const Sagittarius = () => (
  <div className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center">
    <Image src={Sagittariusimg.src} alt="Star Sign" width={60} height={60} />
    <p className="text-white">Sagittarius</p>
  </div>
);

export const Gemini = () => (
  <div className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center">
    <Image src={Geminiimg.src} alt="Star Sign" width={60} height={60} />
    <p className="text-white">Gemini</p>
  </div>
);

export const Capricorn = () => (
  <div className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center">
    <Image src={Capricornimg.src} alt="Star Sign" width={60} height={60} />
    <p className="text-white">Capricorn</p>
  </div>
);

export const Taurus = () => (
  <div className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center">
    <Image src={Taurusimg.src} alt="Star Sign" width={60} height={60} />
    <p className="text-white">Taurus</p>
  </div>
);

export const Libra = () => (
  <div className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center">
    <Image src={Libraimg.src} alt="Star Sign" width={60} height={60} />
    <p className="text-white">Libra</p>
  </div>
);

export const Pisces = () => (
  <div className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center">
    <Image src={Piscesimg.src} alt="Star Sign" width={60} height={60} />
    <p className="text-white">Pisces</p>
  </div>
);

export const Scorpio = () => (
  <div className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center">
    <Image src={Scorpioimg.src} alt="Star Sign" width={60} height={60} />
    <p className="text-white">Scorpio</p>
  </div>
);

export const Aries = () => (
  <div className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center">
    <Image src={Ariesimg.src} alt="Star Sign" width={60} height={60} />
    <p className="text-white">Aries</p>
  </div>
);

export const Virgo = () => (
  <div className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[60px] h-[60] flex justify-center items-center">
    <Image src={Virgoimg.src} alt="Star Sign" width={60} height={60} />
    <p className="text-white">Virgo</p>
  </div>
);
