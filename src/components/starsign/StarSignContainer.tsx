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
    <div className="max-w-[1200px] w-96 h-[500px] flex flex-col justify-center items-center">
      <div className="max-w-[1200px] w-96 h-[150px] flex justify-center items-center">
        <Leo />
        <Cancer />
        <Aquarius />
        <Sagittarius />
      </div>
      <div className="max-w-[1200px] w-96 h-[150px] flex justify-center items-center">
        <Gemini />
        <Capricorn />
        <Taurus />
        <Libra />
      </div>
      <div className="max-w-[1200px] w-96 h-[150px] flex justify-center items-center">
        <Pisces />
        <Scorpio />
        <Aries />
        <Virgo />
      </div>
    </div>
  );
};

export default StarSignForm;
