import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Sidebar from '../components/Sidebar'
import { darkTheme, lightTheme } from "../../utils/Theme";
import Navbar from '../../components/Navbar';
import RaiseQuery from "../../components/RaiseQuery";
const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-image:url("https://img.freepik.com/free-vector/high-school-concept-illustration_114360-8279.jpg?w=1500"); 
`;
const Wrapper = styled.div`
  
  padding: 22px 96px;
   
  align-items: center;
  justify-content: center;
  place-items: center;
`;


// `;
const ParentRaiseQuery = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>

        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />

          <Wrapper>
            <RaiseQuery />
          </Wrapper>
        </Main>

      </Container>
    </ThemeProvider >
  )
}

export default ParentRaiseQuery