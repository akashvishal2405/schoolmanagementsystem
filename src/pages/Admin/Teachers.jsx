import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addTeachersDetails,
  deleteTeachersDetails,
} from "../../slice/teacherSlice";
import { MdDeleteForever } from "react-icons/md";

import {
  TeachersContainer,
  SidebarContainer,
  Content,
  TeachersContent,
  TeachersHeader,
  TeacherList,
  Delete,
  TeacherItem,
  AddTeacherForm,
  AddTeacherInput,
  AddTeacherButton,
} from "../../styles/TeachersStyles";

const Teachers = () => {
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewTeacher((curr) => {
      return {
        ...curr,
        [name]: value,
      };
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTeachersDetails(newTeacher));
  };

  const TeachersData = useSelector(
    (state) => state.teachersInfo.teacherDetails
  );

  const handleDelete = (index) => {
    dispatch(deleteTeachersDetails(index))
  }

  return (
    <TeachersContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>

      <Content>
        <TeachersContent>
          <TeachersHeader>
            <AddTeacherForm onSubmit={handleSubmit}>
              <AddTeacherInput
                type="text"
                placeholder="Enter Teacher Name"
                name="name"
                value={newTeacher.name}
                onChange={handleChange}
              />
              <AddTeacherInput
                type="email"
                placeholder="Enter Teacher email"
                name="email"
                value={newTeacher.email}
                onChange={handleChange}
              />
              <AddTeacherInput
                type="text"
                placeholder="Enter Teacher Subject"
                name="subject"
                value={newTeacher.subject}
                onChange={handleChange}
              />
              <AddTeacherButton type="submit">Add Teacher</AddTeacherButton>
            </AddTeacherForm>

            <TeacherList>
              {TeachersData.map((teacher, index) => (
                <TeacherItem key={index}>
                  {teacher.name}-{teacher.email}-{teacher.subject}
                  <Delete onClick={() => handleDelete(index)}><MdDeleteForever /></Delete>
                </TeacherItem>
              ))}
            </TeacherList>
          </TeachersHeader>
        </TeachersContent>
      </Content>
    </TeachersContainer>
  );
};

export default Teachers;
