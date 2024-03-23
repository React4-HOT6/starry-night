import Image from "next/image";
import React from "react";

interface BoardCardProps {
  title: string;
  nickname: string;
  image: string | null;
  category: string;
}

const BoardCard: React.FC<BoardCardProps> = ({
  title,
  nickname,
  image,
  category,
}) => {
  return (
    <div className="flex w-[60vw] min-h-[5vh] mb-2 rounded bg-base-200 items-center justify-between px-4">
      <div className="flex items-center mr-4">
        {image ? (
          <Image
            src={image}
            alt="Board Image"
            width={30}
            height={30}
            layout="fixed"
          />
        ) : (
          <div className="text-white w-[30px] h-[30px]">None</div>
        )}
        <div className="border-r border-white mx-2"></div>
        <div className="text-white flex-grow truncate">{title}</div>
      </div>
      <div className="flex items-center flex-none">
        <div className="text-white truncate mr-2 w-[120px]">{nickname}</div>
        <div className="border-r border-white mx-2"></div>
        <div className="text-white truncate w-[80px]">{category}</div>
      </div>
    </div>
  );
};

export default BoardCard;
