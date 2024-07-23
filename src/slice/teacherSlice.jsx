import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    teacherDetails: []
}

export const teacherSlice = createSlice({
    name: "teacherDetails",
    initialState,
    reducers: {
        addTeachersDetails: (state, action) => {
                state.teacherDetails = [...state.teacherDetails, action.payload]
        },
        deleteTeachersDetails: (state, action) => {
                state.teacherDetails = state.teacherDetails.filter((teachers, index) => index !== action.payload)
        }
    }
})

export const {addTeachersDetails, deleteTeachersDetails} = teacherSlice.actions;

export default teacherSlice.reducer;

    
