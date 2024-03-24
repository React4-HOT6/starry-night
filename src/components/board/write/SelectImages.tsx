import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { ImagesCarousel } from "@/components/board/common/ImagesCarousel";
import Image from "next/image";

export const SelectImages = ({
  imagesSrc,
  setImagesSrc,
  setImagesFile,
}: {
  imagesSrc: string[];
  setImagesSrc: Dispatch<SetStateAction<string[]>>;
  setImagesFile: Dispatch<SetStateAction<File[]>>;
}) => {
  const [countOfImages, setCountOfImages] = useState(imagesSrc.length);

  const onImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setImagesSrc([]);
    if (e.target.files === null) {
      return;
    }
    if (e.target.files.length === 0) {
      console.log("선택한 이미지 없음");
      return setImagesSrc([]);
    }

    if (e.target.files.length > 5) {
      setImagesSrc([]);
      e.target.value = "";
      return alert("최대 이미지 업로드 갯수 5개를 초과하였습니다.");
    }
    setCountOfImages(e.target.files.length);
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      const imageURL = URL.createObjectURL(file);
      setImagesSrc((prev: string[]) => [...prev, imageURL]);
      setImagesFile((prev: File[]) => [...prev, file]);
    }
  };

  return (
    <section className="flex flex-col justify-start gap-5">
      <section className="flex flex-col justify-around bg-white p-4 rounded-lg gap-5">
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs none"
          accept="image/*"
          multiple
          onChange={(e) => onImageUpload(e)}
        />
        {imagesSrc.length > 0 ? (
          imagesSrc.length > 1 ? (
            <ImagesCarousel
              imagesSrc={imagesSrc}
              countOfImages={imagesSrc.length}
            />
          ) : (
            <Image
              className="w-full h-80"
              src={imagesSrc[0]}
              quality={100}
              width={100}
              height={100}
              alt="이미지 미리보기"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
            ></Image>
          )
        ) : (
          <></>
        )}
      </section>
    </section>
  );
};
