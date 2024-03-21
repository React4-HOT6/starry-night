import { supabase } from "@/libs/supabase/client";

export const getUserBirth = async () => {
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error) {
      console.error(error);
      return null;
    }
    const birth = user?.user_metadata.birth;
    return birth;
  } catch (error) {
    console.error(error);
    return null;
  }
};
