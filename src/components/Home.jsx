import React from "react";
import {
  Navbar,
  Logo,
  NavigationLinks,
  NavLink,
  ButtonsContainer,
  LoginButton,
  GuestButton,
  HomeContainer,
  SchoolImage,
  SchoolInfo,
  Title,
  LoremTextContainer,
  AdminRegisterLink,
} from "../styles/styles";
import { motion } from "framer-motion"
import bg from "../assets/bg.png";
import bg1 from "../assets/bg1.png";
import { Link, useNavigate } from "react-router-dom";



const Home = () => {
  const navigate = useNavigate();
   

  const handleLoginClick = () => {
    navigate('/choose-user')
  };

  const container  = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
      x:0,
      opacity: 1,
      transition: {duration: 0.5, delay: delay}
    }
  })

  return <>
        <Navbar>
            <Logo src={bg1} alt='logo'/>
            <NavigationLinks>
                <NavLink href="#">About us</NavLink>
                <NavLink href="#">Products</NavLink>
                <NavLink href="#">Contact us</NavLink>
            </NavigationLinks>
            <ButtonsContainer>
                <LoginButton onClick={handleLoginClick}>Sigin In</LoginButton>
                <GuestButton onClick={handleLoginClick}>Guest Mode</GuestButton>
            </ButtonsContainer>
        </Navbar>
        <HomeContainer>
            <SchoolInfo>
                <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                style={{textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"}}
                >School Management System</motion.h1>
                <LoremTextContainer>
                    <p>A school management system streamlines administrative tasks 
                      such as attendance tracking, grade management, and scheduling. It 
                      enhance communication between teachers, students through integrated latforms. This 
                      system promotes efficiency by automating routine processes and centralizing
                      academic information, ultimately improving overall educational outcomes. </p>
                </LoremTextContainer>
            </SchoolInfo>
            <SchoolImage src={bg} alt='bgImg'/>
        </HomeContainer>
  </>;
};

export default Home;
