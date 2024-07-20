import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {MdDeleteForever} from "react-icons/md"
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

const Classes = () => {
  
  const [addClass, setAddClass] = useState("");
  const [classes, setClasses] = useState([]);

const handleAddClass = (e) => {
      e.preventDefault()
    setClasses([...classes,addClass])
    setAddClass(" ")
}



  return (
    <ClassesContainer>
      <Sidebar />
      <Content>
        <ClassesContent>
          <ClassHeader>Classes</ClassHeader>
          <AddClassForm onSubmit={handleAddClass}>
            <AddClassInput type="text" placeholder="Enter Class Name"
            value={addClass}
            onChange={(e) => setAddClass(e.target.value)}
            />
            <AddClassButton type="submit">Add Class</AddClassButton>
          </AddClassForm>
          <ClassList>
            {classes.map((item, index) => (
              <ClassItem key={index}>{item} <Delete><MdDeleteForever size={25} onClick={() => deleteClass(index)} /></Delete > </ClassItem>
              ))}
          </ClassList>
        </ClassesContent>
      </Content>
    </ClassesContainer>
  );
};
``
export default Classes;
