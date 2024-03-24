"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// 로그인이 필요한 페이지에서 사용하는 훅 mypage,write,fortune
export function useAuthPage() {
  const router = useRouter();

  useEffect(() => {
    const sessionData = sessionStorage.getItem("session");
    const isLoggedIn = sessionData === "true" ? true : false;
    if (!isLoggedIn) {
      router.replace("/signin");
    }
  }, [router]);
}

// 로그인상태가 되어있으면 안되는 페이지에서 사용하는 훅 signup,signin
export function useNonAuthPage() {
  const router = useRouter();

  useEffect(() => {
    const sessionData = sessionStorage.getItem("session");
    const isLoggedIn = sessionData === "true" ? true : false;
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [router]);
}
