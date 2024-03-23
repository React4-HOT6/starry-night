import Image from "next/image";
import React from "react";
import Link from "next/link";
interface BoardCardProps {
  id: string;
  title: string;
  nickname: string;
  imagesSrc: string[];
  category: string;
}

const BoardCard: React.FC<BoardCardProps> = ({
  id,
  title,
  nickname,
  imagesSrc,
  category,
}) => {
  return (
    <Link href={`board/detail/${id}`}>
      <div className="flex w-[60vw] min-h-[5vh] mb-2  border-solid border-2 border-gray-700 rounded bg-base-200 items-center justify-between px-4">
        <div className="flex items-center mr-4 ...">
          {imagesSrc.length > 0 ? (
            <div className="flex space-x-2">
              {imagesSrc.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Board Image ${index + 1}`}
                  width={30}
                  height={30}
                />
              ))}
            </div>
          ) : (
            <div className="text-white text-sm w-[30px] h-[30px]">
              No Images
            </div>
          )}
          <div className="border-r border-white mx-2"></div>
          <div className="text-white flex-grow truncate">{title}</div>
        </div>
        <div className="flex items-center flex-none">
          <div className="text-white truncate mr-2 text-sm w-[120px]">
            {nickname}
          </div>
          <div className="border-r border-white mx-2"></div>
          <div className="text-white truncate text-sm w-[80px]">{category}</div>
        </div>
      </div>
    </Link>
  );
};

export default BoardCard;
