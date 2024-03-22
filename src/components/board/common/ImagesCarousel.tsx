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
              alt="이미지를 불러 올 수 없습니다." //FIXME - 어떤 이미지인지 구별할 수 있도록 작성 (이미지 대체 텍스트),next 이미지 다루는 법 공부
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
