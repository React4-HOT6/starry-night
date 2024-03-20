import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const getStarSign = async (starSignName: string | undefined) => {
  let { data, error } = await supabase
    .from("starsign")
    .select("star_sign_description,id,star_sign_name")
    .eq("star_sign_name", starSignName)
    .single();

  if (error) {
    console.error("error", error);
    return null;
  }

  return data;
};
