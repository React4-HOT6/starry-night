"use client";

import BoardCard from "./BoardCard";
import { useQuery } from "@tanstack/react-query";
import { selectBoardPosts } from "@/libs/utils/api/supabase/postAPI";
import { useBoardStore } from "@/store/store";
import { useEffect } from "react";
const BoardCardContainer = () => {
  const selectedCategory = useBoardStore((state) => state.selectedCategory);
  const selectedTitle = useBoardStore((state) => state.selectedTitle);
  const { data: posts, refetch } = useQuery({
    queryKey: ["posts", selectedCategory, selectedTitle],
    queryFn: () => selectBoardPosts(selectedCategory, selectedTitle),
  });
  useEffect(() => {
    refetch();
  }, [selectedCategory, selectedTitle, refetch]);

  return (
    <div className="grid p-2 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2">
      {posts && posts.length > 0 ? (
        posts.map((post) => {
          const imagesSrcArray = Array.isArray(post.images) ? post.images : [];
          return (
            <BoardCard
              created_at={post.created_at}
              content={post.content}
              id={post.id}
              key={post.id}
              title={post.title}
              nickname={post.nickname}
              imagesSrc={imagesSrcArray}
              category={post.category}
            />
          );
        })
      ) : (
        <div className="w-[60vw] h-full flex items-center justify-center text-white">
          <div>검색 결과가 없습니다.</div>
        </div>
      )}
    </div>
  );
};
export default BoardCardContainer;
