import { create } from "zustand";

export type StarSignData = {
  id: number | undefined;
  star_sign_name: string | undefined;
  star_sign_description: string | undefined;
  s_img_url: string | undefined;
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

// import {
//   ModalBackdropStyle,
//   ModalContentStyle,
//   ModalMessageStyle,
//   CancelClickBtnStyle,
//   ConfirmClickBtnStyle,
// } from "redux/components/Modal/styles";
// import { useSelector } from "react-redux";

// function ValidationModal({ onConfirm, onCancel, showConfirmButton = true }) {
//   const { message, showModal } = useSelector((state) => state.modal);

//   if (!showModal) return null;

//   return (
//     <ModalBackdropStyle>
//       <ModalContentStyle>
//         <ModalMessageStyle>{message}</ModalMessageStyle>
//         <div>
//           {showConfirmButton && (
//             <CancelClickBtnStyle onClick={onCancel}>취소</CancelClickBtnStyle>
//           )}
//           <ConfirmClickBtnStyle onClick={onConfirm}>확인</ConfirmClickBtnStyle>
//         </div>
//       </ModalContentStyle>
//     </ModalBackdropStyle>
//   );
// }

// export default ValidationModal;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     message: '',
//     showConfirmButton: true,
//     showModal: false,
// };

// const modalSlice = createSlice({
//     name: 'modal',
//     initialState,
//     reducers: {
//         openModal: (state, action) => {
//             state.message = action.payload.message;
//             state.showConfirmButton = action.payload.showConfirmButton;
//             state.showModal = true;
//         },
//         closeModal: (state) => {
//             state.showModal = false;
//         },
//     }
// });

// export const { openModal, closeModal } = modalSlice.actions;
// export default modalSlice.reducer;

// const handleProfileUpdate = async () => {
//   dispatch(__editProfile({ imgFile, nickname }))
//     .unwrap()
//     .then(() => {
//       dispatch(
//         openModal({
//           message: "프로필이 업데이트되었습니다.",
//           showConfirmButton: false,
//           showModal: true,
//         })
//       );
//     })
//     .catch((error) => {
//       dispatch(
//         openModal({
//           message: error.message,
//           showConfirmButton: false,
//           showModal: true,
//         })
//       );
//     });
// };
