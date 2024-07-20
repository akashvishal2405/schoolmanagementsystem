import React from 'react';
import {ChooseUserContainer, UserSection, Title, Button} from '../styles/ChooseUserStyles';
import { Link } from 'react-router-dom';


const ChooseUser = () => {

  return (

    <>
        <ChooseUserContainer>
            <UserSection>
                <Title>Admin</Title>
                <Button to="/admin-sigin">Login as Admin</Button>
            </UserSection>
            <UserSection>
                <Title>Teacher</Title>
                <Button to="/teacher-sigin">Login as Teacher</Button>
            </UserSection>
            <UserSection>
                <Title>Student</Title>
                <Button to="/student-sigin">Login as Student</Button>
            </UserSection>
            
        </ChooseUserContainer>
    </>
  )
}

export default ChooseUser;