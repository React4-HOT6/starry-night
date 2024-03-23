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
      <div className="p-3 ">
        <h2 className="font-bold text-lg">내 게시글 보기</h2>
        <HoverEffect items={hoverItems} />
      </div>
    </>
  );
};

export default PostSection;
