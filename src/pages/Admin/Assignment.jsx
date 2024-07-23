import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {addAssignment, deleteAssignment} from "../../slice/assignmentSlice";

import {
  AssignmentsContainer,
  Content,
  Delete,
  AssignmentsContent,
  AssignmentsHeader,
  AssignmentList,
  AssignmentItem,
  AddAssignmentForm,
  AddAssignmentInput,
  AddAssignmentTextArea,
  AddAssignmentButton,
} from "../../styles/AssignmentsStyles";

const Assignment = () => {
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
    subject: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewAssignment((curr) => {
      return {
        ...curr,
        [name]: value,
      };
    });
  };

  const dispatch = useDispatch();

  const AssignmentData = useSelector((state) => state.assignments.assignments);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAssignment(newAssignment))
  }

  const handleDelete = (index) => {
    dispatch(deleteAssignment(index))
  }
  return (
    <AssignmentsContainer>
      <Sidebar />
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <AddAssignmentForm onSubmit={handleSubmit}>
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment title"
              value={newAssignment.title}
              name="title"
              onChange={handleChange}
            />
            <AddAssignmentTextArea
              placeholder="Enter assignment description"
              value={newAssignment.description}
              name="description"
              onChange={handleChange}
            />
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment grade"
              value={newAssignment.subject}
              name="subject"
              onChange={handleChange}
            />
            <AddAssignmentInput
              type="text"
              placeholder="Enter Assignment deadline"
              value={newAssignment.deadline}
              name="deadline"
              onChange={handleChange}
            />
            <AddAssignmentButton type="submit">
              Add Assignment
            </AddAssignmentButton>
          </AddAssignmentForm>
          <AssignmentList>
            {
              AssignmentData.map((task, index) => (
                <AssignmentItem keu={index}>
                  {task.title} <br />
                  {task.description} <br />
                  {task.subject} <br />
                  {task.deadline} <br />
                  <Delete onClick={() => handleDelete(index)}><MdDeleteForever size={25}/></Delete>
                </AssignmentItem>
              ))
            }
          </AssignmentList>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  );
};

export default Assignment;
