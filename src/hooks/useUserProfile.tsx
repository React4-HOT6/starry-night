import { supabase } from "@/libs/supabase/client";
import { initializeUserStore } from "@/store/store";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/store";
const useUserProfile = () => {
  // const [avatarUrl, setAvatarUrl] = useState("/default_img.png");
  // const [nickname, setNickname] = useState("");
  const nickname = useUserStore((state) => state.nickname);
  const avatarUrl = useUserStore((state) => state.avatarUrl);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (error) throw error;

        await initializeUserStore(user);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  return { avatarUrl, nickname };
};

export default useUserProfile;
