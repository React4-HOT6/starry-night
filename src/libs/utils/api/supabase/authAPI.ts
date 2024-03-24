import { supabase } from "@/libs/supabase/client";

export const getUserId = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) {
    return { status: "fail", result: error } as const;
  }
  return { status: "success", result: user!.id } as const;
};

export const getUserBirthday = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) {
    return { status: "fail", result: error } as const;
  }
  return { status: "success", result: user?.user_metadata.birth } as const;
};

export const getUserNickname = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) {
    return { status: "fail", result: error } as const;
  }
  return { status: "success", result: user?.user_metadata.nickname } as const;
};
