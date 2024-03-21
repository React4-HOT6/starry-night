"use client";

import { supabase } from "@/libs/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignInForm = () => {
  const [formData, setFormData] = useState({ userId: "", password: "" });

  const router = useRouter();

  const onChangeFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitFormData = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const {
        data: { session },
      } = await supabase.auth.signInWithPassword({
        email: formData.userId,
        password: formData.password,
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
      onSubmit={onSubmitFormData}
    >
      <input
        type="email"
        name="userId"
        className="p-4 mb-4 w-full border rounded-2xl bg-white/30 text-sm"
        placeholder="ID"
        onChange={onChangeFormData}
      />
      <input
        type="password"
        name="password"
        className="p-4 mb-4 w-full border rounded-2xl bg-white/30 text-sm"
        placeholder="PassWord"
        onChange={onChangeFormData}
      />
      <button className="btn btn-primary">Sign In</button>
    </form>
  );
};

export default SignInForm;
