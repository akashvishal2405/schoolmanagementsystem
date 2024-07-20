import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
  AssignmentsContainer,
  Content,
  AssignmentsContent,
  AssignmentsHeader,
  AssignmentList,
  AssignmentItem,
  AddAssignmentForm,
  AddAssignmentInput,
  AddAssignmentTextArea,
  AddAssignmentButton

} from '../../styles/AssignmentsStyles';

const Assignment = () => {

  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
    subject: "",
    deadline: ""
  });
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignment();
  }, []);

  const fetchAssignment = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/assignments/getall"
      );
      setAssignments(response.data.assignments);
    } catch (error) {
      console.log(`Error fetching assignments:`, error);
    }
  };

  const handleAddAssignment = async (e) => {
    e.preventDefault();
    if (
      newAssignment.title.trim() !== "" &&
      newAssignment.description.trim() !== "" &&
      newAssignment.subject.trim() !== "" &&
      newAssignment.deadline.trim() !== ""
    ) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/assignments",
          newAssignment
        );
         
        console.log(`Response data:`, response.data); // this will log the response data
        setAssignments([...assignments, response.data.Assignment]);
        setNewAssignment({title: '', description: '', subject: '', deadline: ''})
        
      } catch (error) {
        console.log("Error adding  assignment:", error);
      }
    }
  };

  return (
    <AssignmentsContainer>
      <Sidebar />
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <AddAssignmentForm onSubmit={handleAddAssignment}>
            <AddAssignmentInput 
            type='text'
            placeholder='Enter assignment title'
            value={newAssignment.title}
            onChange={(e) => setNewAssignment({...newAssignment, title: e.target.value})}
            />
            <AddAssignmentTextArea 
              placeholder='Enter assignment description'
              value={newAssignment.description}
            onChange={(e) => setNewAssignment({...newAssignment, description: e.target.value})}
            />
            <AddAssignmentInput 
            type='text'
            placeholder='Enter assignment grade'
            value={newAssignment.subject}
            onChange={(e) => setNewAssignment({...newAssignment, subject: e.target.value})}
            />
            <AddAssignmentInput 
            type='text'
            placeholder='Enter Assignment deadline'
            value={newAssignment.deadline}
            onChange={(e) => setNewAssignment({...newAssignment, deadline: e.target.value})}
            />
            <AddAssignmentButton type='submit'>Add Assignment</AddAssignmentButton>
          </AddAssignmentForm>
          <AssignmentList>
            {assignments.map((assignment) => (
              <AssignmentItem key={assignment.id}>
                <strong>{assignment.title}: </strong>
                {assignment.deadline}, {assignment.subject}, {assignment.deadline}
              </AssignmentItem>
            ))}
          </AssignmentList>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  )
}

export default Assignment;