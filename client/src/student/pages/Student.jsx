import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Sidebar from '../components/StudentSidebar'
import { darkTheme, lightTheme } from "../../utils/Theme";
import Navbar from '../components/Navbar';


const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-image:url("https://img.freepik.com/free-vector/high-school-concept-illustration_114360-8279.jpg?w=1500"); 
`;
const Wrapper = styled.div`
  
  padding: 22px 96px;
`;

const Student = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container className="App">

        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
          </Wrapper>
        </Main>

      </Container>
    </ThemeProvider >

  )
}

export default Student