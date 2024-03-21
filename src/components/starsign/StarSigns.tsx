"use client";

//datas from "namuwiki"
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
import StarSignComponent from "./StarSignComponent";

export const Gemini = () => {
  return <StarSignComponent src={Geminiimg} name="Gemini" starSignId={1} />;
};
export const Aries = () => {
  return <StarSignComponent src={Ariesimg} name="Aries" starSignId={2} />;
};
export const Taurus = () => {
  return <StarSignComponent src={Taurusimg} name="Taurus" starSignId={3} />;
};

export const Cancer = () => {
  return <StarSignComponent src={Cancerimg} name="Cancer" starSignId={4} />;
};

export const Leo = () => {
  return <StarSignComponent src={Leoimg} name="Leo" starSignId={5} />;
};
export const Virgo = () => {
  return <StarSignComponent src={Virgoimg} name="Virgo" starSignId={6} />;
};
export const Libra = () => {
  return <StarSignComponent src={Libraimg} name="Libra" starSignId={7} />;
};
export const Scorpio = () => {
  return <StarSignComponent src={Scorpioimg} name="Scorpio" starSignId={8} />;
};
export const Sagittarius = () => {
  return (
    <StarSignComponent src={Sagittariusimg} name="Sagittarius" starSignId={9} />
  );
};
export const Capricorn = () => {
  return (
    <StarSignComponent src={Capricornimg} name="Capricorn" starSignId={10} />
  );
};

export const Aquarius = () => {
  return (
    <StarSignComponent src={Aquariusimg} name="Aquarius" starSignId={11} />
  );
};

export const Pisces = () => {
  return <StarSignComponent src={Piscesimg} name="Pisces" starSignId={12} />;
};
