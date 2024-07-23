import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";

import {
  StudentsContainer,
  SidebarContainer,
  Content,
  Delete,
  StudentsContent,
  StudentsHeader,
  StudentList,
  StudentItem,
  AddStudentForm,
  AddStudentInput,
  AddStudentButton,
} from "../../styles/StudentsStyles";
import { addStudentData, deleteStudentData } from "../../slice/studentSlice";

const Students = () => {
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    number: "",
    grade: "",
  });

  const handleOnChangle = (event) => {
    const { name, value } = event.target;

    setStudentInfo((curr) => {
      return {
        ...curr,
        [name]: value,
      };
    });
  };

  const student = useSelector((state) => state.studentInfo.studentData);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudentData(studentInfo));
  };

  const deleteUserInfo = (index) => {
    dispatch(deleteStudentData(index));
  };
  return (
    <StudentsContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <StudentsContent>
          <StudentsHeader>
            <AddStudentForm onSubmit={handleSubmit}>
              <AddStudentInput
                type="text"
                placeholder="Enter Student Name"
                name="name"
                value={studentInfo.name}
                onChange={handleOnChangle}
              />
              <AddStudentInput
                type="text"
                placeholder="Enter Registration Number"
                name="number"
                value={studentInfo.number}
                onChange={handleOnChangle}
              />
              <AddStudentInput
                type="text"
                placeholder="Enter Grade"
                name="grade"
                value={studentInfo.grade}
                onChange={handleOnChangle}
              />
              <AddStudentButton type="submit">Add Student</AddStudentButton>
            </AddStudentForm>
            <StudentList>
              {student.map((stud, index) => (
                <StudentItem>
                  {stud.name}-{stud.number}-{stud.grade}
                  <Delete>
                  <MdDeleteForever size={25} 
                  onClick={() => deleteUserInfo(index)}/>
                  </Delete>
                </StudentItem>
              ))}
            </StudentList>
          </StudentsHeader>
        </StudentsContent>
      </Content>
    </StudentsContainer>
  );
};

export default Students;
