import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    modalData: [],
    isOpen: false,
  },
};
export const CommonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    openModal: (state) => {
      state.data.isOpen = true;
    },
    closeModal: (state) => {
      state.data.isOpen = false;
    },
  },
});

export const { setModalData, openModal, closeModal } = CommonSlice.actions;
export default CommonSlice.reducer;
