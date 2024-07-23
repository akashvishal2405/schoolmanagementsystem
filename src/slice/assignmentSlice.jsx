import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    assignments: []
}

export const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [...state.assignments, action.payload]
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter((task, index) => index !== action.payload)
        }
    }
})

export const {addAssignment, deleteAssignment} = assignmentSlice.actions;

export default assignmentSlice.reducer;