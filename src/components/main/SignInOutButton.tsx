"use client";

import React from "react";

const SignInOutButton = () => {
  // const isSignIn = user상태에 대한 로직
  const isSignIn = true;
  return (
    <>
      {isSignIn ? (
        <div className="flex gap-2">
          <button className="btn">Sign In</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      ) : (
        <div>
          <button>글 작성</button>
          <button>로그아웃</button>
        </div>
      )}
    </>
  );
};

export default SignInOutButton;
