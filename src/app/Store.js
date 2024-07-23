import { configureStore } from "@reduxjs/toolkit";
import classReducer from "../slice/classSlice";
import studentReducer from "../slice/studentSlice";
import announcementReducer from "../slice/announcementSlice";
import teacherReducer from "../slice/teacherSlice";
import assignmentReducer from "../slice/assignmentSlice";


const store = configureStore({
    reducer: {
        classInfo: classReducer,
        studentInfo: studentReducer,
        announcementInfo: announcementReducer,
        teachersInfo: teacherReducer,
        assignments: assignmentReducer
    }
})

export default store;