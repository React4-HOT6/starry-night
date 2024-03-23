"use client";

import BoardCard from "./BoardCard";
import { useQuery } from "@tanstack/react-query";
import { selectBoardPosts } from "@/libs/utils/api/supabase/postAPI";

const BoardCardContainer = () => {
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: selectBoardPosts,
  });

  return (
    <div className=" flex p-2 flex-col ">
      {posts?.map((post) => (
        <BoardCard
          key={post.id}
          title={post.title}
          nickname={post.nickname}
          image={post.images}
          category={post.category}
        />
      ))}
    </div>
  );
};

export default BoardCardContainer;
