import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  AttendanceContainer,
  Content,
  AttendanceContent,
  AttendanceHeader,
  AttendanceList,
  AttendanceItem,
  StudentName,
  CheckboxLabel,
  Divider,
  SubmitButton
} from '../../styles/AttendanceStyles';




const CheckAttendanceSection = () => {

  const [students, setStudents] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/students/getall"
      );
      setStudents(response.data.students);
      initializeAttendanceData(response.data.students)
    } catch (error) {
      console.log(`Error fetching students:`, error);
    }
  };

  const initializeAttendanceData = (students) => {
    const initialAttendanceData = students.map((student) => ({
      id: student.id,
      name: student.name,
      status: 'Present' // the default is present
    }));
    setAttendanceData(initialAttendanceData)
  };

  const handleStatusChange = (id, status) => {
    const updateData = attendanceData.map((student) => {
      if(students.id === id){
        return {...student, status};
      }
        return student
  });

  setAttendanceData(initializeAttendanceData)
  }


  const handleSubmit = async () => {
    try {
      const formattedData = attendanceData.map(({id, name, status}) => ({studentId: id, name, status}));
      const response = await axios.post('http://localhost:4000/api/v1/attendance', {attendanceData: formattedData})
      
    } catch (error) {
      console.error('Error submitting attendance data:', error);
    }
  }
  return (
    <AttendanceContainer>
    <Sidebar />
    <Content>
      <AttendanceContent>
        <AttendanceHeader>Attendance</AttendanceHeader>
        <AttendanceList>
          {StudentName.map((student, index) => (
            <React.Fragment key={student.id}>
                <AttendanceItem>
            <StudentName>{student.name} </StudentName>
            <CheckboxLabel>
              <input 
              type="checkbox" 
              checked={attendanceData[index]?.status=== "Present"}
              onChange={() => handleStatusChange(student.id, 'Present')}
              />
              Present
            </CheckboxLabel>
            <CheckboxLabel>
              <input 
              type="checkbox" 
              checked={attendanceData[index]?.status=== "Absent"}
              onChange={() => handleStatusChange(student.id, 'Absent')}
              />
              Absent
            </CheckboxLabel>
            <CheckboxLabel>
              <input 
              type="checkbox" 
              checked={attendanceData[index]?.status=== "Absent with Apology"}
              onChange={() => handleStatusChange(student.id, 'Absent with Apology')}
              />
              Absent with apology
            </CheckboxLabel>
          </AttendanceItem>
            </React.Fragment>
          ))}
        </AttendanceList>
        <SubmitButton onSubmit={handleSubmit} >Submit</SubmitButton>
      </AttendanceContent>
    </Content>
  </AttendanceContainer>
  )
}

export default CheckAttendanceSection;