import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Sidebar from '../components/teachersidebar'
import { darkTheme, lightTheme } from "../../utils/Theme";
import Navbar from '../../components/Navbar';
import StudentProfile from '../../student/pages/StudentProfile';


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
  padding: 22px 96px;
`;

const Teacher = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            {/* <StudentProfile /> */}
          </Wrapper>
        </Main>
=======
=======
>>>>>>> parent of 82409cd (charts and parents done)
    const [darkMode, setDarkMode] = useState(true);
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Container>
                <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
                <Main>
                    <Navbar />
                    <Wrapper>
<<<<<<< HEAD
                        <StudentProfile />
                    </Wrapper>
                </Main>
>>>>>>> refs/remotes/origin/main
=======
                        {/* <StudentProfile /> */}
                    </Wrapper>
                </Main>
>>>>>>> parent of 82409cd (charts and parents done)

            </Container>
        </ThemeProvider >

    )
}

export default Teacher