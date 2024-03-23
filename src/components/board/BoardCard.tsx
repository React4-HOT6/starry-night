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
    <Link href={`board/detail/${id}`}>
      <div className="flex ml-2 mt-2 transform h-[350px] hover:-translate-y-1  duration-400 flex-col justify-between rounded-lg  shadow-lg overflow-hidden bg-base-300 hover:bg-base-200 transition-colors duration-200 ease-in-out">
        <div className="flex justify-center items-center h-40 overflow-hidden">
          {imagesSrc.length > 0 ? (
            imagesSrc.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Board Image"
                className="w-auto h-full"
                style={{ minWidth: "100%" }}
              />
            ))
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
          <div className="font-bold text-white truncate">{title}</div>
          <p className="text-sm h-6 w-[200px] max-h-12 text-gray-300 overflow-hidden">
            {content}
          </p>
          <div className=" text-primary text-xs font-semibold">{category}</div>
        </div>
      </div>
    </Link>
  );
};

export default BoardCard;
