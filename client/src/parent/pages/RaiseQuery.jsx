import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Sidebar from '../components/Sidebar'
import { darkTheme, lightTheme } from "../../utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import Login from '../../login/pages/Login';
import FormInput from '../../login/components/FormInput';
import './RaiseQuery.css';
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

// const Profilee = styled.div`
  
  
// `;
const RaiseQuery = () => {
  const [darkMode, setDarkMode] = useState(true);

  const[values,setValues]=useState({
    sapid:'',
    email:'',
    query:'',
    moreInfo:'',
  })
  const inputs=[
    {
      id:1,
      name:'sapid',
      type:'text',
      placeholder:'SAPID',
      errorMessage:"SAPID should be 10 digits and shouldn't include any other characters!",
      label:'SAPID',
      pattern: "^[0-9]{10}$",
      required:true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "query",
      type: "text",
      placeholder: "Query",
      errorMessage:"Please enter a query!",
      label: "Query",
    //   pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
        id: 4,
        name: "moreInfo",
        type: "text",
        placeholder: "Detailed Info about the query",
        errorMessage:"Please enter a query!",
        label: "Query Info",
      //   pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
      },
  ]

  

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange=(e)=>{
    setValues({...values,
      [e.target.name]:e.target.value})
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container className="App">

        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />

          <Wrapper>
            {/* <Profilee> */}
          <div className='app'>
        <form onSubmit={handleSubmit}>
        <h1>RAISE A QUERY</h1>
        {inputs.map((input)=>(
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        
        <button>RAISE QUERY</button>
      </form>
    </div>
    {/* </Profilee> */}
          </Wrapper>
        </Main>

      </Container>
    </ThemeProvider >
  )
}

export default RaiseQuery