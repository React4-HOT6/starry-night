"use client";

import SignUpForm from "@/components/auth/SignUpForm";
import { useNonAuthPage } from "@/hooks/useAuthRoute";

const SignUpPage = () => {
  useNonAuthPage();
  return (
    <div className="flex flex-col items-center lg:w-96 md:w-80 sm:w-70">
      <div className="flex flex-col items-center mb-5">
        <h1 className="mb-5 text-xl md:text-2xl">Sign up starry-night</h1>
        <p className="text-sm md:text-base">
          회원가입에 필요한 정보를 입력해주세요.
        </p>
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
