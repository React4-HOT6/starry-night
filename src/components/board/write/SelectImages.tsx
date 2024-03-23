import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { ImagesCarousel } from "@/components/board/common/ImagesCarousel";

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
      <section className="flex flex-col justify-around bg-white p-4 rounded-lg gap-5 p-4">
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs none"
          accept="image/*"
          multiple
          onChange={(e) => onImageUpload(e)}
        />
        <ImagesCarousel
          imagesSrc={imagesSrc}
          countOfImages={countOfImages}
        ></ImagesCarousel>
      </section>
    </section>
  );
};
