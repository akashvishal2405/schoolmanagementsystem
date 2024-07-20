import React, { useState, useEffect } from "react";
import { MdMenuOpen } from "react-icons/md";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
import LogoImg from "../../assets/bg1.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SidebarContainer style={{ width: isOpen ? "250px" : "60px" }}>
        <SidebarHeader>
          <Logo src={LogoImg} alt="logo" />
        </SidebarHeader>
        <SidebarNav>
          <SidebarNavItem>
            <SidebarIcon>
              <BsGraphUp />
            </SidebarIcon>
            <StyledLink to="/student/dashboard">Dashboard</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsFileText />
            </SidebarIcon>
            <StyledLink to="/student/assignments">Assignments</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsBook />
            </SidebarIcon>
            <StyledLink to="/student/exams">Exams</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsGraphDown />
            </SidebarIcon>
            <StyledLink to="/student/performance">Performance</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsCalendar />
            </SidebarIcon>
            <StyledLink to="/student/attendance">Attendance</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsBook />
            </SidebarIcon>
            <StyledLink to="/student/library">Library</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsChatDots />
            </SidebarIcon>
            <StyledLink to="/student/announcement">Annoucement</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon>
              <BsGear />
            </SidebarIcon>
            <StyledLink to="/student/profile">
            Profile
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
