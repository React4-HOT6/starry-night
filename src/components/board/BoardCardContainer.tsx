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
    <div className=" flex p-2 flex-col ">
      {posts?.map((post) => {
        const imagesSrcArray = Array.isArray(post.images) ? post.images : [];
        return (
          <BoardCard
            id={post.id}
            key={post.id}
            title={post.title}
            nickname={post.nickname}
            imagesSrc={imagesSrcArray}
            category={post.category}
          />
        );
      })}
    </div>
  );
};

export default BoardCardContainer;
