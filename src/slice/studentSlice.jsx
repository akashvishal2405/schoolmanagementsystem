import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    studentData: []
}

export const studentSlice = createSlice({
    name: "studentData",
    initialState,
    reducers: {
        addStudentData: (state, action) => {
                state.studentData = [...state.studentData, action.payload]
        },
        deleteStudentData: (state, action) => {
                state.studentData = state.studentData.filter((user, index) => index !== action.payload)
        }
    }
})


export const {addStudentData, deleteStudentData} = studentSlice.actions;

export default studentSlice.reducer;