import { Comment } from "@/types";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
); //NOTE - zusstand로 처리하고 지울 것

const selectComment = async (id: string) => {
  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .eq("id", id);

  if (error) {
    console.log(error); //NOTE - 테스트 코드
    return false;
  }
  console.log(data); //NOTE - 테스트 코드
  return data;
};

const updateComment = async (id: string, newComment: Comment) => {
  const { data, error } = await supabase
    .from("comments")
    .update(newComment)
    .eq("id", id)
    .select();

  if (error) {
    console.log(error); //NOTE - 테스트 코드
    return false;
  }
  console.log(data); //NOTE - 테스트 코드
  return data;
};

const insertComment = async (newComment: Comment) => {
  const { data, error } = await supabase
    .from("comments")
    .insert(newComment)
    .select();

  if (error) {
    console.log(error); //NOTE - 테스트 코드
    return false;
  }
  console.log(data); //NOTE - 테스트 코드
  return data;
};

const deleteComment = async (id: string) => {
  const { data, error } = await supabase
    .from("comments")
    .delete()
    .eq("id", id)
    .single();

  if (error) {
    console.log(error); //NOTE - 테스트 코드
    return false;
  }
  console.log(true); //NOTE - 테스트 코드
  return true;
};
