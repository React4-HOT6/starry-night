import React from "react";
import { HoverEffect } from "./CardHoverUI";
import { Tables } from "@/types/database.types";
type Board = Tables<"board">;
const PostSection = ({ userPosts }: { userPosts: Board[] }) => {
  const hoverItems = userPosts.map((post) => {
    const firstImage = post.images?.[0]; // 첫 번째 이미지
    return {
      images: firstImage,
      title: post.title,
      description: post.content, // 간단한 내용으로 카드에 표시
      link: `/board/detail/${post.id}`, // 게시물 상세 페이지 링크
    };
  });
  return (
    <>
      <h2 className="p-3 font-bold text-lg">내 게시글 보기</h2>
      {userPosts.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-4/5 w-full">
          <p className="text-gray-500">내 게시물이 없습니다.</p>
        </div>
      ) : (
        <HoverEffect items={hoverItems} />
      )}
    </>
  );
};

export default PostSection;
