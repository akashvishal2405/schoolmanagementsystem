import React, { useEffect } from 'react';
import Sidebar from './Sidebar';

import {
    ClassContainer,
    ClassesContent,
    AddClassForm,
    AddClassButton,
    AddClassInput,
    Content,
    ClassHeader,
    ClassList,
    ClassItem
} from '../../styles/ClassesStyles';







const ClassesSection = () => {

  
  

  return (
    <ClassContainer>
      <Sidebar />
      <Content>
        <ClassesContent>
          <ClassHeader>Classes</ClassHeader>
          <AddClassForm>
            <AddClassInput type="text" placeholder="Enter Class Name"
           
            />
            <AddClassButton type="submit">Add Class</AddClassButton>
          </AddClassForm>
          <ClassList>
           
          </ClassList>
        </ClassesContent>
      </Content>
    </ClassContainer>
  )
}

export default ClassesSection;