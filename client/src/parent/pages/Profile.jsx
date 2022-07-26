import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Sidebar from "../components/Sidebar";
import { darkTheme, lightTheme } from "../../utils/Theme";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../../login/pages/Login";
import needforcode from "../../images/needforcode.png";
import axios from "axios";
const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-image: url("https://img.freepik.com/free-vector/high-school-concept-illustration_114360-8279.jpg?w=1500");
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  place-items: center;
  padding: 22px 96px;
`;
// const Profilee = styled.div`
//     background-color: white;
//     padding: 0px 60px;
//     border-radius: 15px;
//     width: 50%;
// `;

const Profile = () => {
  const [darkMode, setDarkMode] = useState(true);
  const SapID= useParams.sapid

  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };

  const[dataa,setDataa]=useState(false);

    const getDataa=()=>{
        axios.post('http://localhost:8000/api/get/getuser',{sapid:SapID}, axiosConfig).then(
            (response)=> response.json()
        ).then(data => {
            console.log(data);
            // setDataa({
            //     ...dataa
            // });
            console.log(dataa);
        })
    };

    useEffect(()=>getDataa(),[]);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container className="App">
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />

          <Wrapper>
            {/* <Profilee> */}
            <div className="form">
              <div className="image">
                <img src={needforcode} alt="photo" className="photo" />
                <div className="place">
                  <h1 className="text1"> HI Name!</h1>
                  <h2 className="text"> SAPid: 6000320010 </h2>
                  <h2 className="text"> Email-ID: xyz@gmail.com </h2>
                  <h2 className="text"> Year Of Graduation: 2024 </h2>
                </div>
              </div>
              <div>
                <h2 className="text2"> Teams: </h2>
                <div className="hello">
                <div className="square">
                  COMPUTERS
                  {/* <img src={computer} alt="computer" className="computer" /> */}
                </div>

                <div className="square">
                  COMPUTERS
                  {/* <img src={computer} alt="computer" className="computer" /> */}
                </div>
                </div>
              </div>
            </div>
            {/* </Profilee> */}
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default Profile;
