import create from "zustand";

type Store = {
  isModalOpen: boolean;
  toggleModal: () => void;
};

const useModalStore = create<Store>((set) => ({
  isModalOpen: false,
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));

export default useModalStore;
