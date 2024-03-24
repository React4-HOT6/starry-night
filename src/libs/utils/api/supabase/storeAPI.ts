import { supabase } from "@/libs/supabase/client";

export const uploadImage = async (image: File, path: string) => {
  const { data, error } = await supabase.storage
    .from("images")
    .upload(path, image, {
      cacheControl: "3600",
      upsert: false,
    });
  if (error) {
    return { status: "fail", result: error } as const;
  }
  return { status: "success", result: data } as const;
};

export const deleteImages = async (paths: string[]) => {
  const { data, error } = await supabase.storage.from("images").remove(paths);

  if (error) {
    return { status: "fail", result: error } as const;
  }
  return { status: "success", result: data } as const;
};
