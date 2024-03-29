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
  return <StarSignComponent src={Geminiimg} name="쌍둥이자리" starSignId={1} />;
};
export const Aries = () => {
  return <StarSignComponent src={Ariesimg} name="양자리" starSignId={2} />;
};
export const Taurus = () => {
  return <StarSignComponent src={Taurusimg} name="황소자리" starSignId={3} />;
};

export const Cancer = () => {
  return <StarSignComponent src={Cancerimg} name="게자리" starSignId={4} />;
};

export const Leo = () => {
  return <StarSignComponent src={Leoimg} name="사자자리" starSignId={5} />;
};
export const Virgo = () => {
  return <StarSignComponent src={Virgoimg} name="처녀자리" starSignId={6} />;
};
export const Libra = () => {
  return <StarSignComponent src={Libraimg} name="천칭자리" starSignId={7} />;
};
export const Scorpio = () => {
  return <StarSignComponent src={Scorpioimg} name="전갈자리" starSignId={8} />;
};
export const Sagittarius = () => {
  return (
    <StarSignComponent src={Sagittariusimg} name="궁수자리" starSignId={9} />
  );
};
export const Capricorn = () => {
  return (
    <StarSignComponent src={Capricornimg} name="염소자리" starSignId={10} />
  );
};

export const Aquarius = () => {
  return (
    <StarSignComponent src={Aquariusimg} name="물병자리" starSignId={11} />
  );
};

export const Pisces = () => {
  return (
    <StarSignComponent src={Piscesimg} name="물고기자리" starSignId={12} />
  );
};
