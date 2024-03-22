"use client";

import { useState } from "react";
import { useEffect } from "react";
import { HoverEffect } from "@/components/mypage/CardHoverUI";
import { supabase } from "@/libs/supabase/client";
import { Tables } from "@/types/database.types";
import { calculateBirthZodiac } from "@/components/fortune/BirthZodiac";
import { Aries } from "@/components/starsign/StarSigns";
type Board = Tables<"board">;
const MyPage = () => {
  // const [isAvatarUploaded, setIsAvatarUploaded] = useState(false);
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
      setAvatarUrl(avatarUrl);

      if (user && user.id) {
        const { data: posts } = await supabase
          .from("board")
          .select("*")
          .eq("user_id", user.id);
        setUserPosts(posts || []);
      } else {
        console.error("User ID not available");
      }
      // setIsLoading(false);
    } catch (error) {
      console.error("Error fetching user profile:", error);
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

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[1200px] flex justify-center items-center h-full">
        <div className="w-1/3 h-5/6 bg-black bg-opacity-50 shadow-xl p-3 m-4 rounded-lg">
          <div className="px-10 pt-10">
            <label
              htmlFor="fileInput"
              className="flex justify-center items-center"
            >
              <img
                src={avatarUrl}
                alt="Profile"
                className="rounded-full w-36 h-36"
              />
            </label>
            {isEdited && (
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden cursor-pointer border-b-2 border-info"
              />
            )}
          </div>

          <div className="mt-6 items-center text-center p-3">
            <h2 className="font-bold text-lg">{email}</h2>
            {isEdited ? (
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="mt-4 border-b-2 border-info bg-black bg-opacity-50 font-medium text-lg"
              />
            ) : (
              <h2 className="mt-4 font-medium text-lg">{nickname}</h2>
            )}
            <h2 className="mt-8 font-bold text-lg">{birth}</h2>
            <div className="mt-48 flex justify-center gap-4">
              {isEdited ? (
                <>
                  <button
                    className="btn btn-primary"
                    onClick={() => updateProfile()}
                  >
                    저장
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => setIsEdited(false)}
                  >
                    취소
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => setIsEdited(true)}
                >
                  수정
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="w-10/12 h-5/6 bg-black bg-opacity-50 shadow-xl p-6 m-4 rounded-lg">
          <div className="p-3">
            <h2 className="font-bold text-lg">내 게시글 보기</h2>
            <HoverEffect
              items={userPosts.map((post) => ({
                title: post.title,
                description: post.content, // 간단한 내용으로 카드에 표시
                link: `/board/${post.id}`, // 게시물 상세 페이지 링크
              }))}
            />
          </div>
          <div className="p-3">
            <h2 className="font-bold text-lg">❤️ 좋아요 목록 보기</h2>
            <p>hi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
