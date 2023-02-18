import { createSlice } from '@reduxjs/toolkit';
import getCookie from '../getCookie';


const initialState = {
  token: getCookie('token'),
  isLogin: Boolean(getCookie('username')),
  id: getCookie('id'),
  signInActive: false,
  signUpActive: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = true;
      state.id = action.payload.id;
    },
    setLogout: (state) => {
      state.isLogin = false;
      state.token = '';
      state.id = '';
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    signInActive: (state, action) => {
      state.signInActive = action.payload;
    },
    signUpActive: (state, action) => {
      state.signUpActive = action.payload;
    }
  }
});

export const { setLogin, setToken, setLogout, signInActive, signUpActive } = authSlice.actions;
export default authSlice.reducer;