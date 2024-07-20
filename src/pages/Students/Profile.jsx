import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
    ProfileContainer,
    SidebarContainer,
    Content,
    ProfileHeader,
    ProfileInfo,
    ProfileDetail,
    Label,
    Value
} from '../../styles/SettingsProfileStyles';


const ProfileSection = () => {

const studentProfile = {
  name: "Steve",
  age: 17,
  grade: "11th",
  school: "Does High School",
  email: "steve2405@gmail.com"
}

  return (
    <ProfileContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ProfileHeader>Profile</ProfileHeader>
        <ProfileDetail>
        <Label>Name: </Label>
        <Value>{studentProfile.name}</Value>
        </ProfileDetail>
        <ProfileDetail>
        <Label>Age: </Label>
        <Value>{studentProfile.age}</Value>
        </ProfileDetail>
        <ProfileDetail>
        <Label>Grade: </Label>
        <Value>{studentProfile.grade}</Value>
        </ProfileDetail>
        <ProfileDetail>
        <Label>School: </Label>
        <Value>{studentProfile.school}</Value>
        </ProfileDetail>
        <ProfileDetail>
        <Label>email: </Label>
        <Value>{studentProfile.email}</Value>
        </ProfileDetail>
      </Content>
    </ProfileContainer>
  )
}

export default ProfileSection;