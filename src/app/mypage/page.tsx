"use client";

import { useState } from "react";
import { useEffect } from "react";
import { HoverEffect } from "@/components/mypage/CardHoverUI";
import { createClient } from "@/libs/supabase/client";
const MyPage = () => {
  const supabase = createClient();
  const [birth, setBirth] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  //const [userPosts, setUserPosts] = useState<Board[]>([]); //board게시판 타입지정해야함
  useEffect(() => {
    fetchPostsAndProfile();
  }, []);
  //프로필정보랑 게시글 불러오기
  const fetchPostsAndProfile = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setNickname(user?.user_metadata.nickname);
      setBirth(user?.user_metadata.birth);
      setEmail(user?.user_metadata.email);
      // const { data: posts, error: postsError } = await supabase
      //   .from("board")
      //   .select("*")
      //   .eq("user_id", user?.id); // user_info 칼럼이 현재 사용자의 아이디와 일치하는 게시물만 가져오기

      // if (postsError) throw postsError;
      // console.log(user);
      // console.log(posts);
      // setUserPosts(posts || []);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };
  //프로필 수정하기

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[1200px] flex justify-center items-center h-full">
        <div className="w-1/3 h-5/6 bg-black bg-opacity-40 shadow-xl p-3 m-4 rounded-lg">
          <figure className="px-10 pt-10">
            <img src="" alt="" className="rounded-full" />
          </figure>
          <div className="items-center text-center p-3">
            <h2 className="font-bold text-lg">{email}</h2>
            <h2 className="font-bold text-lg">{nickname}</h2>
            <h2 className="font-bold text-lg">{birth}</h2>
            <div className="mt-4">
              <button className="btn btn-primary">수 정</button>
            </div>
          </div>
        </div>

        <div className="w-10/12 h-5/6 bg-black bg-opacity-40 shadow-xl p-6 m-4 rounded-lg">
          <div className="p-3">
            <h2 className="font-bold text-lg">내 게시글 보기</h2>
            {/* <HoverEffect
              items={userPosts.map((post) => ({
                title: post.title,
                description: post.content, // 간단한 내용으로 카드에 표시
                link: `/board/${post.id}`, // 게시물 상세 페이지 링크
              }))}
            /> */}
          </div>
          <div className="p-3">
            <h2 className="font-bold text-lg">❤️ 좋아요 목록 보기</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
