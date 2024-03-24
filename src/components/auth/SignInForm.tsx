"use client";

import { supabase } from "@/libs/supabase/client";
import clsx from "clsx";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { authValidation } from "@/libs/utils/authValidation";
import MessageModal from "../modal/MessageModal";

const SignInForm = () => {
  const [formData, setFormData] = useState({ userId: "", password: "" });
  const [isValidate, setIsValidate] = useState({
    userId: false,
    password: false,
  });
  const [isErrorShow, setIsErrorShow] = useState(false);
  const [isErrorSignIn, setIsErrorSignIn] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const router = useRouter();

  const onChangeFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setIsValidate((prev) => ({ ...prev, [name]: authValidation(name, value) }));
  };

  const onSubmitFormData = async (event: React.FormEvent<HTMLFormElement>) => {
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
      } = await supabase.auth.signInWithPassword({
        email: formData.userId,
        password: formData.password,
      });
      if (session) {
        setToggleModal(true);
        setModalData({
          type: "alert",
          text: "로그인 되었습니다.",
        });
        sessionStorage.setItem("session", JSON.stringify(!!session));
      } else {
        setIsErrorSignIn(true);
      }
    } catch (error) {
      console.error("에러: ", error);
    }
  };

  return (
    <>
      <form
        className="flex flex-col justify-center items-center w-full"
        onSubmit={onSubmitFormData}
      >
        <label className="form-control mb-3 w-full max-w-xs">
          <input
            type="email"
            name="userId"
            className={clsx(
              "input input-bordered w-full max-w-xs bg-white/30 text-sm",
              { "input-error": isErrorShow && isValidate.userId === false }
            )}
            placeholder="ID"
            onChange={onChangeFormData}
          />
          <div className="label">
            <span
              className={clsx("label-text-alt text-red-500", {
                hidden: isValidate.userId || !isErrorShow,
              })}
            >
              E-Mail 형식으로 작성해 주십시오.
            </span>
          </div>
        </label>
        <label className="form-control mb-3 w-full max-w-xs">
          <input
            type="password"
            name="password"
            className={clsx(
              "input input-bordered w-full max-w-xs bg-white/30 text-sm",
              { "input-error": isErrorShow && isValidate.password === false }
            )}
            placeholder="PassWord"
            onChange={onChangeFormData}
          />
          <div className="label">
            <span
              className={clsx("label-text-alt text-red-500", {
                hidden: isValidate.password || !isErrorShow,
              })}
            >
              문자, 숫자, 특수문자 조합으로 8자 이상 작성해 주십시오.
            </span>
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="flex flex-col label">
            <span
              className={clsx("label-text-alt -center text-red-500", {
                hidden: !isErrorSignIn,
              })}
            >
              등록된 유저 정보와 일치하지 않습니다.
            </span>
          </div>
          <button className="btn btn-primary">Sign In</button>
        </label>
      </form>
      {toggleModal && (
        <MessageModal modalToggle={setToggleModal} {...modalData} />
      )}
    </>
  );
};

export default SignInForm;
