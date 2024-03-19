import Image from "next/image";
import starSign1 from "../../../public/starsign/ares.svg";

export const Leo = () => {
  return (
    <div className=" transform hover:scale-125 flex-col transition-transform duration-300 w-[48px] h-[60] flex justify-center items-center">
      <Image src={starSign1.src} alt="Star Sign" width={48} height={48} />
      <p className="text-white">Leo</p>
    </div>
  );
};
