import { getStarSign } from "@/libs/utils/api/supabase/starsignAPI";
import useModalStore from "@/store/store";
import Image, { StaticImageData } from "next/image";
type StarSignComponentProps = {
  src: StaticImageData;
  name: string;
  starSignId: number;
};
//starsign 모듈화
const StarSignComponent: React.FC<StarSignComponentProps> = ({
  src,
  name,
  starSignId,
}) => {
  const { toggleModal, setStarSignData } = useModalStore();
  const onClickStarsign = async () => {
    //supabase data 가져오기
    const data = await getStarSign(starSignId);
    try {
      setStarSignData({
        id: data?.id,
        star_sign_name: data?.star_sign_name,
        star_sign_description: data?.star_sign_description,
        s_img_url: data?.s_img_url,
      });
      toggleModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        onClick={onClickStarsign}
        className="ml-6 animate-float transform cursor-pointer hover:scale-125 flex-col transition-transform duration-300 w-[120px] h-[120] flex justify-center items-center"
      >
        <Image src={src} priority alt={name} width={120} height={120} />
        <p className="text-white">{name}</p>
      </div>
    </>
  );
};

export default StarSignComponent;
