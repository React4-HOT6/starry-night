import { supabase } from "@/libs/supabase/client";

export const getUserId = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) {
    console.log(error); //NOTE - 테스트 코드
    return { status: "fail", result: error } as const;
  }
  console.log(user!.id); //NOTE - 테스트 코드
  return { status: "success", result: user!.id } as const;
};

export const getUserBirthday = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) {
    console.log(error); //NOTE - 테스트 코드
    return { status: "fail", result: error } as const;
  }
  console.log(user?.user_metadata.birth); //NOTE - 테스트 코드
  return { status: "success", result: user?.user_metadata.birth } as const;
};

export const getUserNickname = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) {
    console.log(error); //NOTE - 테스트 코드
    return { status: "fail", result: error } as const;
  }
  console.log(user?.user_metadata.nickname); //NOTE - 테스트 코드
  return { status: "success", result: user?.user_metadata.nickname } as const;
};
