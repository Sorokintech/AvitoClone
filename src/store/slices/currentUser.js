import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
};

export const currentUserSlice = createSlice({
    name: "currentUser", 
    initialState,
    reducers: {
        currentUser: (state, action) => {
            state.id = action.payload;
        }
    }
});

export const {currentUser} = currentUserSlice.actions;
export default currentUserSlice.reducer;