import { getStarSign } from "@/libs/supabase/getstarsign";
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
        className="ml-6 transform hover:scale-125 flex-col transition-transform duration-300 w-[80px] h-[80] flex justify-center items-center"
      >
        <Image src={src} alt={name} width={80} height={80} />
        <p className="text-white">{name}</p>
      </div>
    </>
  );
};

export default StarSignComponent;
