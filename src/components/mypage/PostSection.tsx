import React from "react";
import { HoverEffect } from "./CardHoverUI";
import { Tables } from "@/types/database.types";
type Board = Tables<"board">;
const PostSection = ({ userPosts }: { userPosts: Board[] }) => {
  return (
    <>
      <div className="p-3">
        <h2 className="font-bold text-lg">내 게시글 보기</h2>
        <HoverEffect
          items={userPosts.map((post) => ({
            title: post.title,
            description: post.content, // 간단한 내용으로 카드에 표시
            link: `/board/${post.id}`, // 게시물 상세 페이지 링크
          }))}
        />
      </div>
      {/* <div className="p-3">
        <h2 className="font-bold text-lg">❤️ 좋아요 목록 보기</h2>
        <p>hi</p>
      </div> */}
    </>
  );
};

export default PostSection;
