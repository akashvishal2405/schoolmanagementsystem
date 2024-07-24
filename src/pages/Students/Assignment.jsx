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



  return (
    <AssignmentsContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <h1>Assignments</h1>
        
          
        
      </Content>
    </AssignmentsContainer>
  );
};
 


export default StudentAssignment;
