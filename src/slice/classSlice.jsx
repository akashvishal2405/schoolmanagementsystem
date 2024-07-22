import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    class: [],
};

export const classSlice = createSlice({
    name: "class",
    initialState,
    reducers: {
        addClasses: (state, action) => {
                state.class = [...state.class, action.payload]
        },
        deleteClass: (state, action) => {
                state.class = state.class.filter((user, index) => index !== action.payload)
        }
    }
})

export const {addClasses, deleteClass} = classSlice.actions;
export default classSlice.reducer;