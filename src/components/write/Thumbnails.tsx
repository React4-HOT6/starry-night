import Image from "next/image";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

export const Thumbnails = ({
  imagesSrc,
  setImagesSrc,
}: {
  imagesSrc: string[];
  setImagesSrc: Dispatch<SetStateAction<string[]>>;
}) => {
  const [countOfImages, setCountOfImages] = useState(0);

  const onImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
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
        <div className="carousel w-full">
          {imagesSrc.map((imageSrc: string, index: number) => (
            <div
              key={index}
              id={`slide${index}`}
              className="carousel-item relative w-full"
            >
              <div className="w-full h-80">
                <Image
                  layout="fill"
                  objectFit={"cover"}
                  key={index}
                  src={imageSrc}
                  quality={100}
                  alt="이미지를 불러 올 수 없습니다."
                ></Image>
              </div>

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href={`#slide${(countOfImages - 1 + index) % countOfImages}`}
                  className="btn btn-circle"
                >
                  ❮
                </a>
                <a
                  href={`#slide${(index + 1) % countOfImages}`}
                  className="btn btn-circle"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
