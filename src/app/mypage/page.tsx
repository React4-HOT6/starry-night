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
type Board = Tables<"board">;

const MyPage = () => {
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
      } = await supabase.auth.getUser(); // 사용자 정보 다시 가져오기
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
      let newAvatarUrl = avatarUrl; // 기존 아바타 URL 사용

      // 아바타 변경이 있을 경우에만 업로드 처리
      if (avatarFile) {
        console.log("아바타파일 있는경우");
        const { data, error } = await supabase.storage
          .from("profileAvatars")
          .upload(`${userId}/avatar.png`, avatarFile!, {
            upsert: true,
          });
        console.log("스토리지 업로드=>", data);
        if (error) throw error;
        newAvatarUrl = data.path; // 새로운 아바타 URL 저장
      }
      console.log("newAvatarUrl=>", newAvatarUrl);
      setAvatarUrl(newAvatarUrl);
      const { error: nicknameError } = await supabase.auth.updateUser({
        data: {
          nickname,
        },
      });
      if (nicknameError) throw nicknameError;
      setNickname(nickname);

      console.log("Profile updated successfully!");
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
    <div className="flex pt-[70px] justify-center items-center h-screen">
      {isLoading ? (
        <span className="loading loading-dots loading-lg"></span>
      ) : (
        <div className="w-[1200px] flex-col md:flex-row flex justify-center items-center h-full">
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
          <div className="mt-[10px] md:block w-full md:w-2/3 h-5/6 bg-black bg-opacity-50 shadow-xl p-3 m-4 rounded-lg md:overflow-y-auto overflow-x-auto">
            <PostSection userPosts={userPosts} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPage;
