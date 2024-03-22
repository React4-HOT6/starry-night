import Image from "next/image";
import React from "react";

export const ImagesCarousel = ({
  imagesSrc,
  countOfImages,
}: {
  imagesSrc: string[];
  countOfImages: number;
}) => {
  return (
    <div className="carousel w-full">
      {imagesSrc.map((image: string, index: number) => (
        <div
          key={index}
          id={`slide${index}`}
          className="carousel-item relative w-full"
        >
          <div className="w-full h-80">
            <Image
              fill
              style={{ objectFit: "cover" }}
              key={index}
              src={image}
              quality={100}
              alt="업로드할 이미지 미리보기"
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
  );
};
