import MessageModal from "@/components/modal/MessageModal";
import Image from "next/image";
import React, { useState } from "react";

export const PostInfo = ({
  category,
  date,
  avatar,
  nickname,
  birthday,
}: {
  category: string;
  date: string;
  avatar: string;
  nickname: string;
  birthday: string;
}) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const onClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.preventDefault();
    setToggleModal(true);
    setModalData({
      type: "alert",
      name: "작성자 정보",
      text: `nickname : ${nickname}\nbirthday : ${birthday}`,
    });
  };
  return (
    <section className="flex flex-row justify-end bg">
      <p className="text-black bg-white rounded-lg p-4 text-right">
        {`${category} | ${date}`}
      </p>
      {avatar && (
        <Image
          onClick={(e) => onClick(e)}
          src={avatar}
          width={50}
          height={50}
          alt="아바타 이미지"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
        ></Image>
      )}
      {toggleModal && (
        <MessageModal modalToggle={setToggleModal} {...modalData} />
      )}
    </section>
  );
};
