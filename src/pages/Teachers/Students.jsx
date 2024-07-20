import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
    StudentsContainer,
    Content,
    StudentsContent,
    StudentsHeader,
    StudentList,
    StudentItem,
    AddStudentButton,
    AddStudentForm,
    AddStudentInput
} from '../../styles/StudentsStyles';





const StudentSection = () => {

  const [newStudent, setNewStudent] = useState({
    name: "",
    registrationNumber: "",
    grade: "",
  });
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/students/getall"
      );
      setStudents(response.data.students);
    } catch (error) {
      console.log(`Error fetching students:`, error);
    }
  };

  const handleAddStudents = async (e) => {
    e.preventDefault();
    if (
      newStudent.name.trim() !== "" &&
      newStudent.registrationNumber.trim() !== "" &&
      newStudent.grade.trim() !== ""
    ) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/students",
          newStudent
        );
        console.log(`Response data:`, response.data); // this will log the response data
        setStudents([...students, response.data.student]);
        setNewStudent({name: '', registrationNumber: '', grade: ''})
        
      } catch (error) {
        console.log("Error adding  students:", error);
      }
    }
  };
  return (
    <StudentsContainer>
    <SidebarContainer>
      <Sidebar />
    </SidebarContainer>
    <Content>
      <StudentsContent>
        <StudentsHeader>
          <AddStudentForm onSubmit={handleAddStudents}>
            <AddStudentInput type="text" placeholder="Enter Student Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
            />
            <AddStudentInput
              type="text"
              placeholder="Enter Registration Number"
              value={newStudent.registrationNumber}
              onChange={(e) => setNewStudent({...newStudent, registrationNumber: e.target.value})}
            />
            <AddStudentInput type="text" placeholder="Enter Grade"
            value={newStudent.grade}
            onChange={(e) => setNewStudent({...newStudent, grade: e.target.value})}
            />
            <AddStudentButton type="submit">Add Student</AddStudentButton>
          </AddStudentForm>
          <StudentList>
            {students.map((student) => (
              <StudentItem key={student.id}>{student.name} - {student.registrationNumber} - {student.grade}</StudentItem>
            ))} 
          </StudentList>
        </StudentsHeader>
      </StudentsContent>
    </Content>
  </StudentsContainer>
  )
}

export default StudentSection;