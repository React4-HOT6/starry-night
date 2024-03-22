"use client";

import { supabase } from "@/libs/supabase/client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { authValidation } from "@/libs/utils/authValidation";
import clsx from "clsx";

const INPUT_LIST = [
  {
    type: "text",
    name: "userId",
    placeholder: "ID",
    error: "E-Mail 형식으로 작성해 주세요.",
  },
  {
    type: "password",
    name: "password",
    placeholder: "PassWord",
    error: "숫자, 문자, 특수문자 조합으로 8자이상 작성해 주세요.",
  },
  {
    type: "text",
    name: "nickname",
    placeholder: "Nickname",
    error: "2 ~ 15자로 작성해 주세요.",
  },
  {
    type: "text",
    name: "birth",
    placeholder: "Birth",
    error: "yyyy-mm-dd 형식으로 작성해 주세요.",
  },
];

type ValidateObject = { [key: string]: boolean };

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    userId: "",
    password: "",
    nickname: "",
    birth: "",
  });
  const [isValidate, setIsValidate] = useState<ValidateObject>({
    userId: false,
    password: false,
    nickname: false,
    birth: false,
  });
  const [isErrorShow, setIsErrorShow] = useState(false);

  const router = useRouter();

  const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
    setIsValidate((prev) => ({ ...prev, [name]: authValidation(name, value) }));
  };

  const onSubmitSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const allValidate = Object.values(isValidate).every(
      (isTrue) => isTrue === true
    );

    if (!allValidate) {
      setIsErrorShow(true);
      return;
    }

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
      {INPUT_LIST.map(({ type, name, placeholder, error }) => (
        <label key={name} className="form-control mb-4 w-full max-w-xs">
          <input
            type={type}
            name={name}
            className={clsx(
              "input input-bordered w-full max-w-xs bg-white/30 text-sm",
              { "input-error": isErrorShow && isValidate[name] === false }
            )}
            placeholder={placeholder}
            onChange={onChangeInputValue}
          />
          <div className="label">
            <span className="label-text-alt">{error}</span>
          </div>
        </label>
      ))}
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
