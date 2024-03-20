"use client";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { useEffect } from "react";
import { HoverEffect } from "@/components/mypage/MyPost";

const MyPage = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
  const supabase = createClient(supabaseUrl, supabaseKey);
  const [nickname, setNickname] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [userPosts, setUserPosts] = useState<Board[]>([]); //board게시판 타입지정해야함
  useEffect(() => {
    fetchPostsAndProfile();
  }, []);
  //프로필정보..
  const fetchPostsAndProfile = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser(); // 현재 사용자 정보 가져오기, 타입정의도해야하나..?

      console.log(user);
      // const { data: posts, error: postsError } = await supabase
      //   .from("board")
      //   .select("*")
      //   .eq("user_info", user?.id); // user_info 칼럼이 현재 사용자의 아이디와 일치하는 게시물만 가져오기

      // if (postsError) throw postsError;
      // console.log(user);
      // setNickname(user?.nickname || "");
      // setAvatarUrl(user?.avatar_url || "");
      // console.log(posts);
      // setUserPosts(posts || []);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="max-w-customMax flex justify-center items-center h-full">
        <div className="card w-1/3 h-5/6 bg-black bg-opacity-40 shadow-xl p-3 m-4">
          <figure className="px-10 pt-10">
            <img src="" alt="" className="rounded-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">수 정</button>
            </div>
          </div>
        </div>

        <div className="card w-10/12 h-5/6 bg-black bg-opacity-40 shadow-xl p-6 m-4">
          <div className="card-body ">
            <h2 className="card-title">내 게시글 보기</h2>
            <HoverEffect
              items={userPosts.map((post) => ({
                title: post.title,
                description: post.content, // 간단한 내용으로 카드에 표시
                link: `/post/${post.id}`, // 게시물 상세 페이지 링크
              }))}
            />
          </div>
          <div className="card-body">
            <h2 className="card-title">❤️ 좋아요 목록 보기</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
