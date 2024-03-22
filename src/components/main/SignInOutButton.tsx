"use client";

import Link from "next/link";
import { SignInOutButtonType } from "@/types";

const SignInOutButton: React.FC<SignInOutButtonType> = ({
  isSignIn,
  onClickLogout,
}) => {
  return (
    <>
      {isSignIn ? (
        <div className="flex gap-2 m-2">
          <Link
            href="/"
            className="min-h-6 btn btn-outline tracking-widest font-bold hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 px-8 h-10 min-h-6"
          >
            글작성
          </Link>
          <button
            onClick={onClickLogout}
            className="btn btn-primary px-8 tracking-widest font-bold duration-200 h-10 min-h-6 "
          >
            LOGOUT
          </button>
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
