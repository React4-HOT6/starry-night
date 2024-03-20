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
  isModalOpen: false,
  starSignData: null,
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  setStarSignData: (data) => set(() => ({ starSignData: data })),
}));

export default useModalStore;
