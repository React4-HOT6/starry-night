import { supabase } from "@/libs/supabase/client";
import { Post } from "@/types";
import { Database } from "@/types/database.types";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
); //NOTE - 희철님 모듈 사용할 것(server)

export const selectPost = async (id: string) => {
  const { data, error } = await supabase
    .from("board")
    .select(
      "title, content, created_at, images, category, user_id, avatar, birthday, nickname, comments(created_at, content, avatar, nickname)"
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
    return false;
  }
  console.log(data); //NOTE - 테스트 코드
  return data;
};

export const insertPost = async (newPost: Post) => {
  const { data, error } = await supabase.from("board").insert(newPost).select();

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
    return false;
  }
  console.log(true); //NOTE - 테스트 코드
  return true;
};
