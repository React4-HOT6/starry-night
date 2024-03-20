import { createClient } from "@supabase/supabase-js";
import { StarSignData } from "@/store/store";
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const getStarSign = async (
  id: number | undefined
): Promise<StarSignData | null> => {
  let { data, error } = await supabase
    .from("starsign")
    .select("star_sign_description,id,star_sign_name")
    .eq("id", id)
    .single();

  if (error) {
    console.error("error", error);
    return null;
  }
  return data;
};
