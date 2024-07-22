// styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #6BD4E7;
  color: black;
  font-family: Arial, sans-serif;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: auto;

  @media screen and (max-width: 768px) {
    // margin-bottom: 10px;
    display: none;
  }
`;

export const NavigationLinks = styled.div`
  display: flex;
  align-items: center;
  font-family:'inherit';
  @media screen and (max-width: 768px) {
    margin-top: 10px;
     margin-bottom: 8px;
  }
`;

export const NavLink = styled.a`
  margin-right: 30px;
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-weight: 300;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    margin: 0 10px;
    font-size: 16px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 35px;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-right: 0;
    overflow: hidden;
    transform: scale(1.5);
  }
`;

export const LoginButton = styled.button`
  // background-color: orange;
  background-color: transparent;
  border-radius: 5px;
  color: black;
  border: none;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  
  
   

  &:hover {
    color: white;
    background-color: green;
  }

  @media screen and (max-width: 768px) {
  padding: 8px 16px;
    font-size: 8px;
    font-weight: normal;
    background-color: blue;
    padding: 5px 5px;
    color: white;
  }
`;

export const GuestButton = styled.button`
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.3s ease;

  &:hover {
     color: white;
    background-color: green;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 8px;
    font-weight: normal;
    background-color: blue;
    padding: 5px 5px;
    color: white;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(45deg, #6BD4E7, #6FC3DF);
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding-top: 80px;
  @media screen and (max-width: 768px) {
    padding-top: 60px;
  }
`;

export const SchoolInfo = styled.div`
  margin-top: 20px;
  font-size: 10px;

  
  
`;

export const SchoolImage = styled.img`
  width: 80%;
  max-height: 80vh;
  object-fit: cover;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const LoremTextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 18px;
  color: black;
  text-align: justify;
  padding: 0 20px;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const AdminRegisterLink = styled(Link)`
  color: black;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
