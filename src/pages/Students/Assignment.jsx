import React from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
  AssignmentsContainer,
  SidebarContainer,
  Content,
  AssignmentButton,
  AssignmentCard,
  AssignmentTitle,
  AssignmentDescription,
  AssignmentDoneMessage,
  AddAssignmentForm,
} from "../../styles/AssignmentsStyles";

const StudentAssignment = () => {
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

  return (
    <AssignmentsContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <h1>Assignments</h1>
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment.id}>
            <AssignmentTitle>{assignment.title}</AssignmentTitle>
            <AssignmentDescription>
              {assignment.description}
            </AssignmentDescription>
            {!assignment.done ? (
              <AddAssignmentForm onDoAssignment = {() => handleDoAssigment(assignment.id)} />
            ) : (
              <AssignmentDoneMessage>Assignemtn is Done</AssignmentDoneMessage>
            )}
          </AssignmentCard>
        ))}
      </Content>
    </AssignmentsContainer>
  );
};

const AssignmentForm = ({onDoAssignment}) => {
  const [opinion, setOpinion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(opinion.trim !== ''){
      onDoAssignment();
    }else{
      alert('Please provide your opinion/Assignment')
    }
  };
  return(
    <form onSubmit={handleSubmit}>
      <textarea value={opinion} onChange={handleInputChange} placeholder="Enter your opinion/assignemnt ...">
        <AssignmentButton type='submit'>Submit</AssignmentButton>
      </textarea>
    </form>
  )
}

export default StudentAssignment;
