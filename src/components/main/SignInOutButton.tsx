"use client";

import React from "react";

const SignInOutButton = () => {
  // const isSignIn = user상태에 대한 로직
  const isSignIn = true;
  return (
    <>
      {isSignIn ? (
        <div>
          <button>글 작성</button>
          <button>로그아웃</button>
        </div>
      ) : (
        <div>
          <button>로그인</button>
          <button>회원가입</button>
        </div>
      )}
    </>
  );
};

export default SignInOutButton;
