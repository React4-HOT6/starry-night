import { StarSignData } from "@/store/store";
import { supabase } from "./client";

export const getStarSign = async (
  id: number | undefined
): Promise<StarSignData | null> => {
  let { data, error } = await supabase
    .from("starsign")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("error", error);
    return null;
  }
  return data;
};
