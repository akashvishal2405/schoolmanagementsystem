import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    examData: []
}

export const examSlice = createSlice({
    name:"examData",
    initialState,
    reducers: {
        addExamData: (state, action) => {
                state.examData = [...state.examData, action.payload]
        },
        deleteExamData: (state, action) => {
                state.examData = state.examData.filter((data, index) => index !== action.payload)
        }
    }
});

export const {addExamData, deleteExamData} = examSlice.actions;
export default examSlice.reducer;