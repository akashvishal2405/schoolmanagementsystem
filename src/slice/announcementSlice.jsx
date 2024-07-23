import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    announcement: []
}

export const announcementSlice = createSlice({
    name: "announcement",
    initialState,
    reducers:{
        addAnnouncement: (state, action) => {
                state.announcement = [...state.announcement, action.payload]
        },
        deleteAnnouncement: (state, action) => {
            state.announcement = state.announcement.filter((announ, index) => index !== action.payload)
        }
    }
})

export const {addAnnouncement, deleteAnnouncement} = announcementSlice.actions;
export default announcementSlice.reducer;