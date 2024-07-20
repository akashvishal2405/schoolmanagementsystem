import React, { useState, useEffect } from "react";
import { MdMenuOpen } from "react-icons/md";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/bg1.png";
import {
  Logo,
  SidebarContainer,
  SidebarHeader,
  SidebarIcon,
  SidebarNav,
  SidebarNavItem,
  StyledLink,
  ToggleButton,
  ToggleIcon,
} from "../../styles/SidebarStyles";


import {
  BsGraphUp,
  BsPeople,
  BsPerson,
  BsFileText,
  BsBook,
  BsGraphDown,
  BsCalendar,
  BsGear,
  BsChatDots,
  BsCalendarEvent,
  BsQuestionSquare,
} from "react-icons/bs";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SidebarContainer style={{ width: isOpen ? "250px" : "80px" }}>
        <SidebarHeader>
          <Logo src={LogoImg} alt="logo" />
        </SidebarHeader>
        <SidebarNav>
          <SidebarNavItem>
            <SidebarIcon>
              <BsGraphUp />
            </SidebarIcon>
            <StyledLink to="/teacher/dashboard">Dashboard</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsPeople />
            </SidebarIcon>
            <StyledLink to="/teacher/classes">Classes</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsPeople />
            </SidebarIcon>
            <StyledLink to="/teacher/students">Students</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsPerson />
            </SidebarIcon>
            <StyledLink to="/teacher/teachers">Teahcers</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsFileText />
            </SidebarIcon>
            <StyledLink to="/teacher/assignments">Assignments</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsBook />
            </SidebarIcon>
            <StyledLink to="/teacher/exams">Exams</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsGraphDown />
            </SidebarIcon>
            <StyledLink to="/teacher/performance">Performance</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsCalendar />
            </SidebarIcon>
            <StyledLink to="/teacher/attendance">Attendance</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsChatDots />
            </SidebarIcon>
            <StyledLink to="/teacher/annoucement">Annoucement</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsCalendarEvent />
            </SidebarIcon>
            <StyledLink to="/teacher/events">Events and Calander</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsGear />
            </SidebarIcon>
            <StyledLink to="/teacher/profile">
              Settings and Profile
            </StyledLink>
          </SidebarNavItem>
        </SidebarNav>
        <ToggleButton onClick={toggleSidebar}>
          <ToggleIcon isOpen={isOpen}><MdMenuOpen size={30}/>
          </ToggleIcon>
        </ToggleButton>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
