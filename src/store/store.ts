import { ReactNode } from "react";
import { create } from "zustand";
import { supabase } from "@/libs/supabase/client";
export type StarSignData = {
  id: number | undefined;
  star_sign_name: string | null | undefined;
  star_sign_description: string | null | undefined;
  s_img_url: string | null | undefined;
};

type Store = {
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

const useModalStore = create<Store>((set) => ({
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
// type User={
//   id: string;
//   email: string;
//   user_metadata: {
//     nickname?: string;

//   };
//   avatarUrl?: string;
// }
export const useUserStore = create<UserStoreType>((set) => ({
  nickname: "",
  avatarUrl: "",
  setNickname: (newNickname) => set({ nickname: newNickname }),
  setAvatarUrl: (newAvatarUrl) => set({ avatarUrl: newAvatarUrl }),
}));
export const initializeUserStore = async (user: any) => {
  if (user) {
    try {
      let avatarUrl = "";
      const avatarResponse = await supabase.storage
        .from("profileAvatars")
        .download(`${user.id}/avatar.png`);

      if (avatarResponse.error) {
        console.error("Error downloading avatar:", avatarResponse.error);
        avatarUrl = "/default_img.png";
      } else {
        avatarUrl = URL.createObjectURL(avatarResponse.data);
      }

      // 로그 추가
      console.log("Avatar URL:", avatarUrl);

      // 상태 업데이트
      useUserStore.getState().setNickname(user.user_metadata.nickname || "");
      useUserStore.getState().setAvatarUrl(avatarUrl);
    } catch (error) {
      console.error("Error in initializeUserStore:", error);
    }
  } else {
    console.error("User object is null or undefined");
  }
};
export default useModalStore;
