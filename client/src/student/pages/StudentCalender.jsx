import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Sidebar from '../components/StudentSidebar'
import { darkTheme, lightTheme } from "../../utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../../components/Navbar';
import Login from '../../login/pages/Login';
import Calender from '../../components/Calender/Calender';
const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-image:url("https://img.freepik.com/free-vector/high-school-concept-illustration_114360-8279.jpg?w=1500"); 
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 22px 96px;
`;

const StudentCalender = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>

        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />

          <Wrapper>
            <Calender />
          </Wrapper>
        </Main>

      </Container>
    </ThemeProvider >
  )
}

export default StudentCalender