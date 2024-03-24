"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/libs/supabase/client";
import MessageModal from "../modal/MessageModal";
import SignInOutButton from "@/components/main/SignInOutButton";
import { useUserStore } from "@/store/store";
import Image from "next/image";
import logo from "@/assets/logo2.png";

const Header = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const nickname = useUserStore((state) => state.nickname);
  const signOut = async () => {
    await supabase.auth.signOut();
    sessionStorage.clear();
  };

  const onClickLogout = () => {
    setToggleModal(true);
    setModalData({
      type: "confirm",
      name: "로그아웃",
      text: "로그아웃 하시겠습니까?",
      func: signOut,
    });
  };

  useEffect(() => {
    // 인증 상태 변화를 확인
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setIsSignIn(!!session?.user);
        if (event === "SIGNED_OUT") {
          setToggleModal(true);
          setModalData({
            type: "alert",
            text: "로그아웃 되었습니다.",
          });
        }
      }
    );

    // 현재 세션을 확인하여 로그인 상태 설정
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setIsSignIn(!!session?.user);
    };
    checkSession();
  }, []);

  return (
    <>
      <div className="navbar fixed z-50 w-full top-0 bg-zinc-950 justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-zinc-950 rounded-box w-52"
            >
              <li>
                <Link href="/board" className="tracking-widest">
                  BOARD
                </Link>
              </li>
              <li>
                <Link href="/fortune" className="tracking-widest">
                  FORTUNE
                </Link>
              </li>
              <li>
                <Link href="/starsign" className="tracking-widest">
                  STARSIGN
                </Link>
              </li>
              <li>
                <Link href="/team" className="tracking-widest">
                  TEAM
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="">
            <Image
              src={logo}
              alt="starry night logo"
              className="w-auto max-h-8 ml-2"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              {" "}
              <Link href="/board" className="tracking-widest">
                BOARD
              </Link>
            </li>
            <li>
              <Link href="/fortune" className="tracking-widest">
                FORTUNE
              </Link>
            </li>
            <li>
              <Link href="/starsign" className="tracking-widest">
                STARSIGN
              </Link>
            </li>
            <li>
              <Link href="/team" className="tracking-widest">
                TEAM
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden sm:flex">
          <SignInOutButton isSignIn={isSignIn} onClickLogout={onClickLogout} />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
          </div>
          {/* 로그인 상태에 따라 버튼 변경 */}
          {isSignIn ? (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-zinc-950 rounded-box w-52"
            >
              <li>
                <Link href="/board/write" className="tracking-widest">
                  글작성
                </Link>
              </li>
              <li>
                <Link href="/mypage" className="tracking-widest">
                  MYPAGE
                </Link>
              </li>
              <li>
                <button onClick={onClickLogout} className="tracking-widest">
                  LOGOUT
                </button>
              </li>
            </ul>
          ) : (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-zinc-950 rounded-box w-52"
            >
              <li>
                <Link href="/signin" className="tracking-widest">
                  SIGN IN
                </Link>
              </li>
              <li>
                <Link href="/signup" className="tracking-widest">
                  SIGN UP
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      {toggleModal && (
        <MessageModal modalToggle={setToggleModal} {...modalData} />
      )}
    </>
  );
};

export default Header;
