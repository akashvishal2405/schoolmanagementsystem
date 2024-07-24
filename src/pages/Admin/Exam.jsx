import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import {
  ExamContainer,
  SidebarContainer,
  Content,
  Delete,
  ExamHeader,
  ExamForm,
  FormLabel,
  FormInput,
  AddButton,
} from "../../styles/ExamStyles";
import { addExamData, deleteExamData } from "../../slice/examSlice";
import { MdDeleteForever } from "react-icons/md";

const Exam = () => {
  const [examData, setExamData] = useState({
    name: "",
    regnumber: "",
    class: "",
    marks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setExamData((curr) => {
      return {
        ...curr,
        [name]: value,
      };
    });
  };

  const dispatch = useDispatch();

  const studendData = useSelector((state) => state.examInfo.examData);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExamData(examData));
  };

  const handleDelete = (index) => {
    dispatch(deleteExamData(index))
  }

  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Details</ExamHeader>
        <ExamForm onSubmit={handleSubmit}>
          <FormLabel>Name:</FormLabel>
          <FormInput type="text" name="name" required onChange={handleChange} />
          <FormLabel>Registration Number:</FormLabel>
          <FormInput
            type="text"
            name="regnumber"
            required
            onChange={handleChange}
          />
          <FormLabel>Class:</FormLabel>
          <FormInput
            type="text"
            name="class"
            required
            onChange={handleChange}
          />
          <FormLabel>Marks:</FormLabel>
          <FormInput
            type="number"
            name="marks"
            required
            onChange={handleChange}
          />
          <AddButton type="submit">Add Exam</AddButton>
        </ExamForm>
        
        {studendData.map((data, index) => (
          <div key={index}>
            <h5>Student Name: {data.name}</h5>
            <h5>Registration Number: {data.regnumber}</h5>
            <h2>Total Marks: {data.marks}</h2>
            <h3>Exam Details: {data.class}</h3>
            <Delete onClick={() => handleDelete(index)}><MdDeleteForever size={25} /></Delete>
          </div>

        ))}
      </Content>
    </ExamContainer>
  );
};

export default Exam;
