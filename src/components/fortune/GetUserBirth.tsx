import { createClient } from "@/libs/supabase/client";

const supabase = createClient();

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
