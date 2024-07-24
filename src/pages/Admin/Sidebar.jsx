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
      <SidebarContainer style={{ width: isOpen ? "250px" : "50px" }}>
        <SidebarHeader>
          <Logo src={LogoImg} alt="logo" />
        </SidebarHeader>
        <SidebarNav>
          <SidebarNavItem>
            <SidebarIcon>
              <BsGraphUp />
              
            </SidebarIcon>
            <StyledLink to="/admin/dashboard">Dashboard</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsPeople />
              
            </SidebarIcon>
            <StyledLink to="/admin/classes">Classes</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsPeople />
              
            </SidebarIcon>
            <StyledLink to="/admin/students">Students</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsPerson />
              
            </SidebarIcon>
            <StyledLink to="/admin/teachers">Teahcers</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsFileText />
              
            </SidebarIcon>
            <StyledLink to="/admin/assigments">Assignments</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsBook />
              
            </SidebarIcon>
            <StyledLink to="/admin/exams">Exams</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsGraphDown />
              
            </SidebarIcon>
            <StyledLink to="/admin/performance">Performance</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsCalendar />
              
            </SidebarIcon>
            <StyledLink to="/admin/attendance">Attendance</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsBook />
              
            </SidebarIcon>
            <StyledLink to="/admin/library">Library</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsChatDots />
              
            </SidebarIcon>
            <StyledLink to="/admin/communication">Annoucement</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsCalendarEvent />
              
            </SidebarIcon>
            <StyledLink to="/admin/events">Events and Calander</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsGear />
              
            </SidebarIcon>
            <StyledLink to="/admin/setingprofile">
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
