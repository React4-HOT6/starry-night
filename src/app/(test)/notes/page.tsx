"use client";

import { Comment, Post } from "@/types";
import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";

export default function Notes() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    const selectPost = async (id: string) => {
      const { data, error } = await supabase
        .from("board")
        .select(
          "title, content, created_at, images, category, user_id, avatar, birthday, nickname, comments(created_at, content, avatar, nickname)"
        )
        .eq("id", id);

      if (error) {
        console.log(error); //NOTE - 테스트 코드
        return false;
      }
      console.log(data); //NOTE - 테스트 코드
      return data;
    };

    const updatePost = async (id: string, newPost: Post) => {
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

    const insertPost = async (newPost: Post) => {
      const { data, error } = await supabase
        .from("board")
        .insert(newPost)
        .select();

      if (error) {
        console.log(error); //NOTE - 테스트 코드
        return false;
      }
      console.log(data); //NOTE - 테스트 코드
      return data;
    };

    const deletePost = async (id: string) => {
      const { error } = await supabase
        .from("board")
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
  }, [supabase]);

  // return <pre>{JSON.stringify(result, null, 2)}</pre>;
  return <p>테스트</p>;
}
