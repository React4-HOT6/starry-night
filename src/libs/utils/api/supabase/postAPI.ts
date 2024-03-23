import { Post } from "@/types";
import { supabase } from "@/libs/supabase/client";

export const selectPost = async (id: string) => {
  const { data, error } = await supabase
    .from("board")
    .select(
      "title, content, created_at, images, category, user_id, avatar, birthday, nickname, comments(id, created_at, content, avatar, nickname)"
    )
    .eq("id", id)
    .single();

  if (error) {
    console.log(error); //NOTE - 테스트 코드
    return { status: "fail", result: error } as const;
  }
  console.log(data); //NOTE - 테스트 코드
  return { status: "success", result: data } as const;
};

export const updatePost = async (id: string, newPost: Post) => {
  const { data, error } = await supabase
    .from("board")
    .update(newPost)
    .eq("id", id)
    .select();

  if (error) {
    console.log(error); //NOTE - 테스트 코드
    return { status: "fail", result: error } as const;
  }
  console.log(data); //NOTE - 테스트 코드
  return { status: "success", result: data } as const;
};

export const insertPost = async (newPost: Post) => {
  const { data, error } = await supabase
    .from("board")
    .insert(newPost!) //NOTE - 이유 찾기
    .select();

  if (error) {
    console.log(error); //NOTE - 테스트 코드
    return false;
  }
  console.log(data); //NOTE - 테스트 코드
  return data;
};

export const deletePost = async (id: string) => {
  const { error } = await supabase.from("board").delete().eq("id", id).single();

  if (error) {
    console.log(error); //NOTE - 테스트 코드
    return { status: "fail", result: error } as const;
  }
  return { status: "success", result: "post 삭제 성공" } as const;
};
