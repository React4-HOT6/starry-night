"use client";

import Link from "next/link";
import { SignInOutButtonType } from "@/types";
import Image from "next/image";
import useUserProfile from "@/hooks/useUserProfile";
import { useUserStore } from "@/store/store";

const SignInOutButton: React.FC<SignInOutButtonType> = ({
  isSignIn,
  onClickLogout,
}) => {
  const nickname = useUserStore((state) => state.nickname);
  const avatarUrl = useUserStore((state) => state.avatarUrl);
  // const { avatarUrl, nickname } = useUserProfile();
  return (
    <>
      {isSignIn ? (
        <div className="flex gap-3 m-2 items-center">
          <Link
            href="/"
            className="min-h-6 btn btn-neutral tracking-widest text-black hover:bg-[#aaaaaa] transition duration-200 px-8 h-10 text-base"
          >
            글작성
          </Link>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Profile Image" src={avatarUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <div className="pl-3 py-1">
                <p>{nickname}님⭐</p>
              </div>
              <li>
                <Link
                  href="/mypage"
                  className="justify-between tracking-widest"
                >
                  MYPAGE
                </Link>
              </li>
              <li>
                <button onClick={onClickLogout} className="tracking-widest">
                  LOGOUT
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex gap-2 m-2">
          <Link
            href="/signin"
            className="min-h-6 btn btn-outline tracking-widest font-bold hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 px-8 h-10 min-h-6"
          >
            SIGN IN
          </Link>
          <Link
            href="/signup"
            className="btn btn-primary px-8 tracking-widest font-bold duration-200 h-10 min-h-6 "
          >
            SIGN UP
          </Link>
        </div>
      )}
    </>
  );
};

export default SignInOutButton;
