import Image from "next/image";
import React from "react";

export const Thumbnails = ({ imagesSrc }: { imagesSrc: [] }) => {
  return (
    <section>
      <h1 className="text-white text-center m-4 text-lg">이미지 미리보기</h1>
      <section className="flex flex-row justify-around bg-white p-4 rounded-lg">
        {imagesSrc.map((imageSrc: string, index: number) => (
          <Image
            width={100}
            height={100}
            key={index}
            src={imageSrc}
            alt="이미지를 불러 올 수 없습니다."
          ></Image>
        ))}
      </section>
    </section>
  );
};
