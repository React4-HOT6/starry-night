"use client";

import { useState } from "react";
import { useEffect } from "react";
import { HoverEffect } from "@/components/mypage/CardHoverUI";
import { supabase } from "@/libs/supabase/client";
import { Board } from "@/types";
import { calculateBirthZodiac } from "@/components/fortune/BirthZodiac";
const MyPage = () => {
  const [isEdited, setIsEdited] = useState(false);
  const [birth, setBirth] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [userPosts, setUserPosts] = useState<Board[]>([]); //board게시판 타입지정해야함
  useEffect(() => {
    fetchPostsAndProfile();
  }, []);
  //프로필정보랑 게시글 불러오기
  const fetchPostsAndProfile = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const zodiac = calculateBirthZodiac(user?.user_metadata.birth);
      setEmail(user?.user_metadata.email);
      setNickname(user?.user_metadata.nickname);
      setBirth(zodiac);
      // 프로필 이미지 가져오기
      const avatarResponse = await supabase.storage
        .from("profileAvatars")
        .download(`${user?.id}/avatar.png`);
      if (avatarResponse.error) {
        throw avatarResponse.error;
      }

      const avatarUrl = URL.createObjectURL(avatarResponse.data);
      setAvatarUrl(avatarUrl);

      const { data: posts, error: postsError } = await supabase
        .from("board")
        .select("*")
        .eq("user_id", user?.id); // user_id 칼럼이 현재 사용자의 아이디와 일치하는 게시물만 가져오기

      if (postsError) throw postsError;
      setUserPosts(posts || []);
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
      const { error: nicknameError } = await supabase.auth.updateUser({
        data: {
          nickname,
        },
      });
      if (nicknameError) throw nicknameError;
      console.log("Profile updated successfully!");
      setIsEdited(false);
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

  const handleEditClick = () => {
    setIsEdited(true); // 수정 모드로 변경
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[1200px] flex justify-center items-center h-full">
        <div className="w-1/3 h-5/6 bg-black bg-opacity-40 shadow-xl p-3 m-4 rounded-lg">
          <div className="px-10 pt-10">
            <label htmlFor="fileInput">
              <img src={avatarUrl} alt="Profile" className="rounded-full" />
            </label>
            {isEdited && (
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleAvatarChange}
                style={{ display: "none" }}
              />
            )}
          </div>
          <div className="items-center text-center p-3">
            <h2 className="font-bold text-lg">{email}</h2>
            {isEdited ? (
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="border-b-2 border-info bg-black bg-opacity-40 font-bold text-base"
              />
            ) : (
              <h2 className="font-bold text-base">{nickname}</h2>
            )}
            <h2 className="font-bold text-lg">{birth}</h2>
            <div className="mt-4">
              {isEdited ? (
                <button
                  className="btn btn-primary"
                  onClick={() => updateProfile()}
                >
                  저장
                </button>
              ) : (
                <button className="btn btn-primary" onClick={handleEditClick}>
                  수정
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="w-10/12 h-5/6 bg-black bg-opacity-40 shadow-xl p-6 m-4 rounded-lg">
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
