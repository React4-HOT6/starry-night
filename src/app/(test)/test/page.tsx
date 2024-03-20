"use client";

import { Comment, Post } from "@/types";
import { createClient } from "@supabase/supabase-js";
import { ChangeEvent, useEffect } from "react";

export default function Test() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );

  const uploadImage = async (image: File, path: string) => {
    const { data, error } = await supabase.storage
      .from("images")
      .upload(path, image, {
        cacheControl: "3600",
        upsert: false,
      });
    if (error) {
      console.log("에러", error);
      return;
    }
    console.log(data);
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      return;
    }
    const value: File = e.target.files[0];

    if (value) {
      //NOTE - 시작
      uploadImage(value, "avatar/asd.jpg");
      //NOTE - 끝
    }
  };

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

    const getImageURL = async (path: string) => {
      const { data } = supabase.storage.from("images").getPublicUrl(path);
      console.log(data);
    };

    const deleteImages = async (paths: string[]) => {
      const { data, error } = await supabase.storage
        .from("images")
        .remove(paths);
      if (error) {
        console.log(error);
        return false;
      }
      console.log(data);
      return data;
    };
  }, [supabase]);

  return (
    <div>
      <input type="file" onChange={(e) => handleChange(e)} />
      <img
        src={process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL + "posts/avatar1.jpg"}
      ></img>
    </div>
  );
}
