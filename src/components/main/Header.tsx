"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import SignInOutButton from "@/components/main/SignInOutButton";
import { supabase } from "@/libs/supabase/client";
import Modal from "../CustomModal";
import useModalStore from "@/store/store";

const Header = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  const { isModalOpen, toggleModal, setModalData, setBtnData } =
    useModalStore();

  const onClickLogout = () => {
    toggleModal();
    setModalData(
      <div className="px-10 py-2">
        <h2 className="text-2xl font-bold text-center mb-1">로그아웃</h2>
        <p className="text-center text-lg">로그아웃 하시겠습니까?</p>
      </div>
    );
    setBtnData(
      <div className="flex gap-2 mt-2">
        <button
          className="btn btn-primary px-8 tracking-widest duration-200 h-10 min-h-6"
          onClick={async () => {
            await supabase.auth.signOut();
            setModalData(
              <p className="text-center text-lg px-2">로그아웃 되었습니다.</p>
            );
            setBtnData(
              <button className="text-primary" onClick={toggleModal}>
                확인
              </button>
            );
          }}
        >
          확인
        </button>
        <button
          className="btn btn-neutral text-black px-8 tracking-widest duration-200 h-10 min-h-6"
          onClick={toggleModal}
        >
          취소
        </button>
      </div>
    );
  };

  useEffect(() => {
    // 인증 상태 변화를 확인
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setIsSignIn(!!session?.user);
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
          <Link href="/" className="btn btn-ghost text-xl tracking-widest">
            STARRY NIGHT
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
        <div className="navbar-end hidden lg:flex">
          <SignInOutButton isSignIn={isSignIn} onClickLogout={onClickLogout} />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                <Link href="/" className="tracking-widest">
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
      {isModalOpen && <Modal />}
    </>
  );
};

export default Header;
