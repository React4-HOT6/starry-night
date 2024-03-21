import { supabase } from "@/libs/supabase/client";

export const uploadImage = async (image: File, path: string) => {
  const { data, error } = await supabase.storage
    .from("images")
    .upload(path, image, {
      cacheControl: "3600",
      upsert: false,
    });
  if (error) {
    console.log(error); //NOTE - 테스트 코드
    return { status: "fail", result: error } as const;
  }
  console.log(data); //NOTE - 테스트 코드
  return { status: "success", result: data } as const;
};

export const getImageURL = async (path: string) => {
  const { data } = supabase.storage.from("images").getPublicUrl(path);
  console.log(data);
};

const deleteImages = async (paths: string[]) => {
  const { data, error } = await supabase.storage.from("images").remove(paths);
  if (error) {
    console.log(error);
    return false;
  }
  console.log(data);
  return data;
};
