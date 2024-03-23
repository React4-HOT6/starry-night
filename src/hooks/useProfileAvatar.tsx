import { supabase } from "@/libs/supabase/client";
import { useEffect, useState } from "react";

const useProfileAvatar = () => {
  const [avatarUrl, setAvatarUrl] = useState("/default_img.png");

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (user) {
          const avatarResponse = await supabase.storage
            .from("profileAvatars")
            .download(`${user.id}/avatar.png`);

          if (avatarResponse.error) {
            setAvatarUrl("/default_img.png");
          } else {
            const url = URL.createObjectURL(avatarResponse.data);
            setAvatarUrl(url);
          }
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchAvatar();
  }, []);

  return avatarUrl;
};

export default useProfileAvatar;
