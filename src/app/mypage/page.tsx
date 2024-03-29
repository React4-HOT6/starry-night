"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/libs/supabase/client";
import { Tables } from "@/types/database.types";
import { calculateBirthZodiac } from "@/components/fortune/BirthZodiac";
import ProfileSection from "@/components/mypage/ProfileSection";
import PostSection from "@/components/mypage/PostSection";
import {
  useUserStore,
  useModalStore,
  initializeUserStore,
} from "@/store/store";
import { useAuthPage } from "@/hooks/useAuthRoute";
type Board = Tables<"board">;

const MyPage = () => {
  useAuthPage();
  const [isLoading, setIsLoading] = useState(true);
  const [isEdited, setIsEdited] = useState(false);
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [userPosts, setUserPosts] = useState<Board[]>([]);
  const { toggleModal, setModalData, setBtnData } = useModalStore();
  const nickname = useUserStore((state) => state.nickname);
  const avatarUrl = useUserStore((state) => state.avatarUrl);
  const setNickname = useUserStore((state) => state.setNickname);
  const setAvatarUrl = useUserStore((state) => state.setAvatarUrl);
  const [localAvatarUrl, setLocalAvatarUrl] = useState<string | null>(null);
  useEffect(() => {
    fetchPostsAndProfile();
  }, []);

  //프로필정보랑 게시글 불러오기
  const fetchPostsAndProfile = async () => {
    setIsLoading(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      //user정보 받아 온 값 넣어서 초기값 설정
      await initializeUserStore(user);

      const zodiac = calculateBirthZodiac(user?.user_metadata.birth);
      setEmail(user?.user_metadata.email);
      setNickname(user?.user_metadata.nickname);
      setBirth(zodiac.name);
      if (user && user.id) {
        const { data: posts } = await supabase
          .from("board")
          .select("*")
          .eq("user_id", user.id);
        setUserPosts(posts || []);
      } else {
        console.error("User ID not available");
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching user profile:", error);
      setIsLoading(false);
    }
  };

  const updateProfile = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const userId = user?.id;
      if (!avatarFile && nickname === user?.user_metadata.nickname) {
        toggleModal();
        setModalData(
          <p className="text-center text-lg">변경사항이 없습니다.</p>
        );
        setBtnData(
          <button onClick={toggleModal} className="text-primary">
            확인
          </button>
        );

        return;
      }
      let newAvatarUrl = "";

      if (avatarFile) {
        const { data, error } = await supabase.storage
          .from("profileAvatars")
          .upload(`${userId}/avatar.png`, avatarFile!, {
            upsert: true,
          });
        if (error) throw error;
        newAvatarUrl = data.path;
      }
      setAvatarUrl(newAvatarUrl);

      const { error: nicknameError } = await supabase.auth.updateUser({
        data: {
          nickname,
        },
      });
      if (nicknameError) throw nicknameError;
      setNickname(nickname);
      await fetchPostsAndProfile();
      setIsEdited(false);
      setAvatarFile(null);
      //프로필 업데이트하고 다시 불러오기..
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      const url = URL.createObjectURL(file);
      setLocalAvatarUrl(url);
    }
  };
  const handleEdit = () => {
    setIsEdited(!isEdited);
  };
  return (
    <div className="flex pt-[70px] pb-8 justify-center items-center min-h-screen">
      {isLoading ? (
        <span className="loading loading-dots loading-lg"></span>
      ) : (
        <div className="max-w-[1200px] flex-col md:flex-row flex justify-center items-center h-full">
          <ProfileSection
            avatarUrl={avatarUrl}
            localAvatarUrl={localAvatarUrl}
            handleAvatarChange={handleAvatarChange}
            isEdited={isEdited}
            handleEdit={handleEdit}
            nickname={nickname}
            setNickname={setNickname}
            birth={birth}
            email={email}
            updateProfile={updateProfile}
          />
          <div className="min-w-[343px] md:block md:w-2/3 md:h-[648px] bg-black bg-opacity-50 shadow-xl p-6 m-4 rounded-lg md:overflow-y-auto lg:overflow-x-auto">
            <PostSection userPosts={userPosts} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPage;
