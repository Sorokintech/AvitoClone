import { createSlice } from '@reduxjs/toolkit';

const initialState= {
    id: "",
  };

export const currentItemSlice = createSlice({
  name: 'currentItem',
  initialState,
  reducers: {
    currentItem: (state, action) => {
      state.id = action.payload;
    },
    setCurrentArticle: (state, {payload}) => {
      state.id = payload.id;
      state.title = payload.title;
      state.description = payload.description;
      state.price = payload.price;
      state.user = payload.user;
      state.created_on = payload.created_on;
      state.user_id = payload.user_id;
      state.images = payload.images;
    }
  }
});

export const { currentItem, setCurrentArticle } = currentItemSlice.actions;
export default currentItemSlice.reducer;