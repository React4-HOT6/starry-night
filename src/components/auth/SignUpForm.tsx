"use client";

import { supabase } from "@/libs/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    userId: "",
    password: "",
    nickname: "",
    birth: "",
  });

  const router = useRouter();

  const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const {
        data: { session },
      } = await supabase.auth.signUp({
        email: signUpData.userId,
        password: signUpData.password,
        options: {
          data: {
            nickname: signUpData.nickname,
            birth: signUpData.birth,
          },
        },
      });
      if (session) {
        router.push("/");
      }
    } catch (error) {
      console.error("에러: ", error);
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center w-full"
      onSubmit={onSubmitSignUp}
    >
      <input
        type="email"
        name="userId"
        className="p-4 mb-4 w-full border rounded-2xl bg-white/30 text-sm"
        placeholder="ID"
        onChange={onChangeInputValue}
      />
      <input
        type="password"
        name="password"
        className="p-4 mb-4 w-full border rounded-2xl bg-white/30 text-sm"
        placeholder="PassWord"
        onChange={onChangeInputValue}
      />
      <input
        type="text"
        name="nickname"
        className="p-4 mb-4 w-full border rounded-2xl bg-white/30 text-sm"
        placeholder="Nickname"
        onChange={onChangeInputValue}
      />
      <input
        type="text"
        name="birth"
        className="p-4 mb-4 w-full border rounded-2xl bg-white/30 text-sm"
        placeholder="Birth"
        onChange={onChangeInputValue}
      />
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
