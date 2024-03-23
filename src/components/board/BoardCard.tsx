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
    // 전체 컨테이너
    <div className="flex w-[60vw] min-h-[5vh] mb-2 rounded bg-base-200 items-center justify-between px-4">
      {/* 이미지 & 제목 컨테이너 */}
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
        {/* 사진과 제목 사이의 구분선 */}
        <div className="border-r border-white mx-2"></div>
        {/* 제목 텍스트가 넘치면 ...으로 처리 */}
        <div className="text-white flex-grow truncate">{title}</div>
      </div>
      {/* 닉네임 & 카테고리 컨테이너 */}
      <div className="flex items-center flex-none">
        {/* 닉네임 오른쪽 정렬, 텍스트 넘치면 ...으로 처리 */}
        <div className="text-white truncate mr-2 w-[120px]">{nickname}</div>
        {/* 닉네임과 카테고리 사이의 구분선 */}
        <div className="border-r border-white mx-2"></div>
        {/* 카테고리 왼쪽 정렬, 텍스트 넘치면 ...으로 처리 */}
        <div className="text-white truncate w-[80px]">{category}</div>
      </div>
    </div>
  );
};

export default BoardCard;
