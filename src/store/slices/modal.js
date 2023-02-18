import { createSlice } from '@reduxjs/toolkit';

const initialState= {
  modalReviewIsShown: false,
  modalAddNewAdIsShown : false,
  modalSettingsIsShown: false
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalReview: (state, action) => {
      state.modalReviewIsShown = action.payload;
    },
    modalAddNewAd: (state, action) => {
      state.modalAddNewAdIsShown = action.payload;
    },
    modalSettings: (state, action) => {
      state.modalSettingsIsShown = action.payload;
    },
  }
});

export const { modalReview, modalAddNewAd, modalSettings } = modalSlice.actions;
export default modalSlice.reducer;

