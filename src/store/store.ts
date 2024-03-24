import { ReactNode } from "react";
import { create } from "zustand";
import { supabase } from "@/libs/supabase/client";
export type StarSignData = {
  id: number | undefined;
  star_sign_name: string | null | undefined;
  star_sign_description: string | null | undefined;
  s_img_url: string | null | undefined;
};

type ModalStore = {
  isModalOpen: boolean;
  toggleModal: () => void;
  starSignData: StarSignData | null;
  setStarSignData: (data: StarSignData | null) => void;
  //ReactNode는 랜더링 할  수 있는 모든 것을 나타냅니ek.
  modalData: ReactNode;
  setModalData: (data: ReactNode | null) => void;
  BtnData: ReactNode;
  setBtnData: (data: ReactNode | null) => void;
};
type BoardStore = {
  selectedCategory: string | null;
  selectedTitle: string | "";
  setSelectedCategory: (category: string | null) => void;
  setSelectedTitle: (title: string | "") => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  //초기값 설정
  isModalOpen: false,
  starSignData: null,
  modalData: null,
  BtnData: null,
  //모달 state 변경
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  //StarSignData 타입의 데이터를 받아 StarSignData에 업로드
  setStarSignData: (data) => set(() => ({ starSignData: data })),
  //모달 내용부분 state관리
  setModalData: (data) => set(() => ({ modalData: data })),
  //모달 버튼부분 state관리
  setBtnData: (data) => set(() => ({ BtnData: data })),
}));
type UserStoreType = {
  nickname: string;
  avatarUrl: string;
  setNickname: (newNickname: string) => void;
  setAvatarUrl: (newAvatarUrl: string) => void;
};

export const useUserStore = create<UserStoreType>((set) => ({
  nickname: "",
  avatarUrl: "",
  setNickname: (newNickname) => set({ nickname: newNickname }),
  setAvatarUrl: (newAvatarUrl) => set({ avatarUrl: newAvatarUrl }),
}));
export const initializeUserStore = async (user: any) => {
  if (user) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_AVATAR_URL}${user.id}/avatar.png`
    );
    if (!response.ok) {
      useUserStore.getState().setAvatarUrl("/default_img.png");
      return;
    }
    try {
      const avatarResponse = await supabase.storage
        .from("profileAvatars")
        .getPublicUrl(`${user.id}/avatar.png`);

      useUserStore.getState().setNickname(user.user_metadata.nickname || "");
      useUserStore
        .getState()
        .setAvatarUrl(avatarResponse.data.publicUrl + `?${Date.now()}`);
    } catch (error) {
      console.error("Error in initializeUserStore:", error);
    }
  } else {
    console.error("User object is null or undefined");
  }
};

export const useBoardStore = create<BoardStore>((set) => ({
  selectedCategory: null,
  selectedTitle: "",
  setSelectedCategory: (category) =>
    set(() => ({ selectedCategory: category })),
  setSelectedTitle: (title) => set(() => ({ selectedTitle: title })),
}));
