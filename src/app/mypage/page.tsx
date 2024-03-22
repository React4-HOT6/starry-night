"use client";

import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "@/libs/supabase/client";
import { Tables } from "@/types/database.types";
import { calculateBirthZodiac } from "@/components/fortune/BirthZodiac";
import Profile from "@/components/mypage/Profile";
import PostSection from "@/components/mypage/PostSection";
type Board = Tables<"board">;
const MyPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isEdited, setIsEdited] = useState(false);
  const [birth, setBirth] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [userPosts, setUserPosts] = useState<Board[]>([]);
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
      //console.log(user);
      const zodiac = calculateBirthZodiac(user?.user_metadata.birth);
      setEmail(user?.user_metadata.email);
      setNickname(user?.user_metadata.nickname);
      setBirth(zodiac.name);
      // 프로필 이미지 가져오기
      let avatarUrl = "";

      const avatarResponse = await supabase.storage
        .from("profileAvatars")
        .download(`${user?.id}/avatar.png`);
      if (avatarResponse.error) {
        avatarUrl = "/default_img.png";
      } else {
        // 프로필 이미지가 없을 경우 기본 이미지 URL 설정
        avatarUrl = URL.createObjectURL(avatarResponse.data);
      }
      const img = new Image();
      img.src = avatarUrl;

      img.onload = () => {
        setAvatarUrl(avatarUrl);
      };
      // setAvatarUrl(avatarUrl);

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
      const { data, error } = await supabase.storage
        .from("profileAvatars")
        .upload(`${userId}/avatar.png`, avatarFile!, {
          cacheControl: "3600",
          upsert: true,
        });

      if (error) throw error;
      const avatarUrl = data.path; // 업로드된 파일의 경로
      setAvatarUrl(avatarUrl); // 프로필 이미지 URL로 설정
      // setIsAvatarUploaded(true);
      const { error: nicknameError } = await supabase.auth.updateUser({
        data: {
          nickname,
        },
      });
      if (nicknameError) throw nicknameError;
      console.log("Profile updated successfully!");
      setIsEdited(false);
      //프로필 업데이트하고 다시 불러오기..
      fetchPostsAndProfile();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      const url = URL.createObjectURL(file);
      setAvatarUrl(url); // 미리보기 업데이트
    }
  };
  const handleEdit = () => {
    setIsEdited(!isEdited);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      {isLoading ? (
        <span className="loading loading-dots loading-lg"></span>
      ) : (
        <div className="w-[1200px] flex justify-center items-center h-full">
          <Profile
            avatarUrl={avatarUrl}
            handleAvatarChange={handleAvatarChange}
            isEdited={isEdited}
            handleEdit={handleEdit}
            nickname={nickname}
            setNickname={setNickname}
            birth={birth}
            email={email}
            updateProfile={updateProfile}
          />
          <PostSection userPosts={userPosts} />
        </div>
      )}
    </div>
  );
};

export default MyPage;
