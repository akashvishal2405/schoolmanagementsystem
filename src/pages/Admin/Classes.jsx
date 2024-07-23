import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  ClassesContainer,
  Content,
  ClassesContent,
  Delete,
  ClassHeader,
  ClassList,
  ClassItem,
  AddClassButton,
  AddClassForm,
  AddClassInput,
} from "../../styles/ClassesStyles";
import { addClasses, deleteClass } from "../../slice/classSlice";

const Classes = () => {
  const dispatch = useDispatch();

  const [classes, setClasses] = useState({
    class: "",
  });

  const subjects = useSelector((state) => state.classInfo.class);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setClasses((currInput) => {
      return {
        ...currInput,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addClasses(classes));
  };

  const handleDelete = (index) => {
    dispatch(deleteClass(index));
  };

  return (
    <ClassesContainer>
      <Sidebar />
      <Content>
        <ClassesContent>
          <ClassHeader>Classes</ClassHeader>
          <AddClassForm onSubmit={handleSubmit}>
            <AddClassInput
              type="text"
              placeholder="Enter Class Name"
              name="class"
              onChange={handleChange}
              value={classes.class}
            />
            <AddClassButton type="submit">Add Class</AddClassButton>
          </AddClassForm>
          <ClassList>
            {subjects.map((sub, index) => (
              <ClassItem key={index}>
                {sub.class}
                <Delete onClick={() => handleDelete(index)}>
              <MdDeleteForever size={25} />
            </Delete>
              </ClassItem>
              
            ))}
          </ClassList>
        </ClassesContent>
      </Content>
    </ClassesContainer>
  );
};
``;
export default Classes;
