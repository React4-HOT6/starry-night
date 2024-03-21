import Image from "next/image";
import React from "react";

export const PostInfo = ({
  category,
  date,
  avatar,
}: {
  category: string;
  date: string;
  avatar: string;
}) => {
  //NOTE - 모달창 구현
  return (
    <section className="flex flex-row justify-end bg">
      <p className="text-black bg-white rounded-lg p-1 text-right">
        {`${category} | ${date}`}
      </p>
      {avatar && (
        <div className="hover:cursor-pointer" onClick={() => alert("hahaha")}>
          <Image src={avatar} width={50} height={50} alt="이미지 없음"></Image>
        </div>
      )}
    </section>
  );
};
