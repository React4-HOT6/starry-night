import { supabase } from "@/libs/supabase/client";
import { useEffect, useState } from "react";

const useUserProfile = () => {
  const [avatarUrl, setAvatarUrl] = useState("/default_img.png");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (error) throw error;

        if (user) {
          // 프로필 이미지 가져오기
          const avatarResponse = await supabase.storage
            .from("profileAvatars")
            .download(`${user.id}/avatar.png`);

          if (avatarResponse.error) {
            setAvatarUrl("/default_img.png");
          } else {
            const url = URL.createObjectURL(avatarResponse.data);
            setAvatarUrl(url); // 프로필 이미지 설정
          }

          // 닉네임 설정
          setNickname(user.user_metadata.nickname || "user");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  return { avatarUrl, nickname };
};

export default useUserProfile;
