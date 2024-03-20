import create from "zustand";

type StarSignData = {
  id: number;
  star_sign_name: string;
  star_sign_description: string;
};

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
