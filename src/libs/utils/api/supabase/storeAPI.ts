import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
); //NOTE - zusstand로 처리하고 지울

export const uploadImage = async (image: File, path: string) => {
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
