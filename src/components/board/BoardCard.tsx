import React from "react";
import Link from "next/link";

interface BoardCardProps {
  id: string;
  title: string;
  nickname: string;
  imagesSrc: string[];
  category: string;
  created_at: string;
  content: string;
}

const BoardCard: React.FC<BoardCardProps> = ({
  id,
  title,
  nickname,
  imagesSrc,
  category,
  created_at,
  content,
}) => {
  return (
    <Link className="max-h-[300px]" href={`board/detail/${id}`}>
      <div className="flex ml-2 mt-2 transform w-[250px] h-[300px] hover:-translate-y-1  duration-400 flex-col justify-between rounded-lg  shadow-lg overflow-hidden bg-base-300 hover:bg-base-200 transition-colors duration-200 ease-in-out">
        <div className="flex justify-center items-center h-40 overflow-hidden">
          {imagesSrc.length > 0 ? (
            <img
              src={imagesSrc[0]}
              alt="Board Image"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex justify-center items-center text-white bg-base-400 w-full h-full">
              No Images
            </div>
          )}
        </div>
        <div className="p-4 space-y-2">
          <div className="text-xs text-gray-500">
            {nickname} · {created_at}
          </div>
          <div className="font-bold text-white truncate">
            {title}
            <p className="text-sm h-6 w-[200px] max-h-8 text-gray-300 overflow-hidden">
              {content}
            </p>
          </div>
          <div className=" text-purple-400 text-sm font-semibold">
            {category}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BoardCard;
