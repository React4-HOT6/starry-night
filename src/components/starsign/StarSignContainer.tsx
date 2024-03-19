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
const StarSignForm = () => {
  return (
    <div className="max-w-[1200px] w-96 h-[500px] flex">
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
  );
};

export default StarSignForm;
