import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
    ClassContainer,
    Content,
    ClassHeader,
    ClassList,
    ClassItem
} from '../../styles/ClassesStyles';




const ClassesSection = () => {

  const [newClassName, setNewClassName] = useState(" ");
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/class/getall"
      );
      if (response.data && Array.isArray(response.data.classes)) {
        setClasses(response.data.classes);
      } else {
        console.log(
          "Error while fetching classes: Invalid data format",
          response.data
        );
      }
    } catch (error) {
      console.log(`Error fetching events`, error);
    }
  };

  const handleAddClass = async (e) => {
    e.preventDefault();
    if (newClassName.trim() !== "") {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/class", {grade: newClassName}
        );
        console.log(`Response data:`, response.data); // this will log the response data
        setClasses(prevClasses => {
          if (Array.isArray(prevClasses)) {
            return [...prevClasses, response.data];
          } else {
            console.log(
              "Error adding class: Invalid state for class", prevClasses);
              return [];
          }
        });
        setNewClassName('');
      } catch (error) {
        console.log("Error adding class:", error);
      }
    }
  };
  return (
    <ClassContainer>
      <Sidebar />
      <Content>
        <ClassesContent>
          <ClassHeader>Classes</ClassHeader>
          <AddClassForm onSubmit={handleAddClass}>
            <AddClassInput type="text" placeholder="Enter Class Name"
            value={newClassName} 
            onChange={(e) => setNewClassName(e.target.value)}
            />
            <AddClassButton type="submit">Add Class</AddClassButton>
          </AddClassForm>
          <ClassList>
            {Array.isArray(classes) && classes.map((classItem, index) => (
                <ClassItem key={index}>{classItem.grade}</ClassItem>
            ))}
          </ClassList>
        </ClassesContent>
      </Content>
    </ClassContainer>
  )
}

export default ClassesSection;