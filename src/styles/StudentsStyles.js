// StudentsStyles.js
import styled from 'styled-components';

export const StudentsContainer = styled.div`
  display: flex;
`;

export const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

export const Delete = styled.div`
 display: flex;
 justify-content: end;
 margin-left: 50px;
 margin-top: 10px;
`

export const Content = styled.div`
  flex: 1;
  @media screen and (max-width: 768px) {
  font-size: 16px;
  margin-left: -210px;
  padding: 20px;
}
`;

export const StudentsContent = styled.div`
  padding: 20px;
`;

export const StudentsHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const StudentList = styled.ul`
  list-style: none;
  padding: 0;
   @media screen and (max-width: 768px) {
    width: 300px;
}
 
`;

export const StudentItem = styled.li`
  display: flex;
  aligin-item: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AddStudentForm = styled.form`
  margin-bottom: 20px;
   
   
`;

export const AddStudentInput = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
 @media screen and (max-width: 768px) {
  margin: 5px;
  width: 100%;
}
`;

export const AddStudentButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
