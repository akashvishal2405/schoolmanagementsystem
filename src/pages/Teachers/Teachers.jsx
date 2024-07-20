import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  TeachersContainer,
  Content,
  TeachersContent,
  TeachersHeader,
  TeacherList,
  TeacherItem,
  AddTeacherButton
} from '../../styles/TeachersStyles';




const TeacherProfileSection = () => {

  const [newTeacher, setNewTeacher] = useState({
    name: "",
    email: "",
    subject: "",
  });
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/teachers/getall"
      );
      setTeachers(response.data.teachers);
    } catch (error) {
      console.log(`Error fetching teachers:`, error);
    }
  };

  const handleAddTeacher = async (e) => {
    e.preventDefault();
    if (
      newTeacher.name.trim() !== "" &&
      newTeacher.email.trim() !== "" &&
      newTeacher.subject.trim() !== ""
    ) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/teachers",
          newTeacher
        );
        const createdTeacher = response.data.teacher;
        console.log(`Response data:`, response.data); // this will log the response data
        setTeachers([...teachers, createdTeacher]);
        setNewTeacher({name: '', email: '', subject: ''})
        
      } catch (error) {
        console.log("Error adding  teachers:", error);
      }
    }
  };
  return (
    <TeachersContainer>
    <SidebarContainer>
    <Sidebar />
    </SidebarContainer>
    
    <Content>
      <TeachersContent>
        <TeachersHeader>
          <AddTeacherForm onSubmit={handleAddTeacher}>
            <AddTeacherInput 
            type='text'
            placeholder='Enter Teacher Name'
            value={newTeacher.name}
            onChange={(e) => setNewTeacher({...newTeacher, name: e.target.value})}
            />
             <AddTeacherInput 
            type='email'
            placeholder='Enter Teacher email'
            value={newTeacher.email}
            onChange={(e) => setNewTeacher({...newTeacher, email: e.target.value})}
            />
             <AddTeacherInput 
            type='text'
            placeholder='Enter Teacher Subject'
            value={newTeacher.subject}
            onChange={(e) => setNewTeacher({...newTeacher, subject: e.target.value})}
            />
            <AddTeacherButton type='submit'>Add Teacher</AddTeacherButton>
          </AddTeacherForm>
          
          <TeacherList>
              {teachers.map((teacher) => (
                <TeacherItem key={teacher.id}>{teacher.name} - {teacher.email} {teacher.subject}</TeacherItem>
              ))}
          </TeacherList>
        </TeachersHeader>
      </TeachersContent>
    </Content>
  </TeachersContainer>
  )
}

export default TeacherProfileSection;