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
  const { toggleModal, setStarSignData, setModalData, setBtnData } =
    useModalStore();
  const onClickModalBtn = () => {
    toggleModal();
  };

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
      setModalData(
        <>
          <Image
            src={`${data?.s_img_url}`}
            alt={`${data?.star_sign_name}`}
            width={500}
            height={300}
          />
          <h3 className="font-bold text-lg">{data?.star_sign_name}</h3>
          <p className="py-4">{data?.star_sign_description}</p>
        </>
      );
      setBtnData(
        <button onClick={onClickModalBtn} className="btn btn-primary">
          뒤로가기
        </button>
      );
      toggleModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        onClick={onClickStarsign}
        className="ml-6 animate-float transform cursor-pointer flex-col transition-transform duration-300 w-[120px] h-auto flex justify-center items-center"
      >
        <Image
          src={src}
          priority
          alt={name}
          style={{ width: "120px", height: "auto" }}
        />
        <p className="text-white">{name}</p>
      </div>
    </>
  );
};

export default StarSignComponent;
