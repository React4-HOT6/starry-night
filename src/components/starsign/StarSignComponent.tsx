import React, { PropsWithChildren } from "react";
import { getStarSign } from "@/libs/supabase/getstarsign";
import useModalStore from "@/store/store";
import Image, { StaticImageData } from "next/image";

type StarSignComponentProps = {
  src: StaticImageData;
  name: string;
  starSignId: number;
};

const StarSignComponent: React.FC<StarSignComponentProps> = ({
  src,
  name,
  starSignId,
}) => {
  const { toggleModal, setStarSignData } = useModalStore();
  const onClickStarsign = async () => {
    const data = await getStarSign(starSignId);
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
      className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[100px] h-[100] flex justify-center items-center"
    >
      <Image src={src} alt={name} width={100} height={100} />
      <p className="text-white">{name}</p>
    </div>
  );
};

export default StarSignComponent;
