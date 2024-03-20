import create from "zustand";

export type StarSignData = {
  id: number | undefined;
  star_sign_name: string | undefined;
  star_sign_description: string | undefined;
} | null;

type Store = {
  isModalOpen: boolean;
  toggleModal: () => void;
  starSignData: StarSignData | null;
  setStarSignData: (data: StarSignData | null) => void;
};

const useModalStore = create<Store>((set) => ({
  //초기값 설정
  isModalOpen: false,
  starSignData: null,
  //모달 state 변경
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  //StarSignData 타입의 데이터를 받아 StarSignData에 업로드
  setStarSignData: (data) => set(() => ({ starSignData: data })),
}));

export default useModalStore;
