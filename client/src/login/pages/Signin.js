import axios from 'axios';
import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import {useDispatch} from 'react-redux';
import {loginFailure,loginSuccess,loginStart} from '../../redux/userSlice';



const Container = styled.div `
display: flex;
flex-direction: column;
background: linear-gradient(rgba(255, 255, 255, 0.1),
rgba(255, 255, 255, 0.3)),
url('https://img.freepik.com/free-vector/high-school-concept-illustration_114360-8279.jpg?w=2000');
height: 100vh;
align-items: center;
justify-content: center;
color: ${({theme}) => theme.text}

`;
const Wrapper = styled.div `
display: flex;
align-items: center;
flex-direction:column;

padding:20px 50px;
border:1px solid ${({theme}) => theme.soft};
gap: 10px;
`;

const Title = styled.h1`
font-size: 24px;
`;

const SubTitle = styled.h2`
font-style: 20px;
font-weight: 300;

`;
const Input = styled.input`
border:1px solid ${({theme}) => theme.soft};
border-radius:3px;
background-color: transparent;
padding:10px;
outline:none;
color: ${({theme}) => theme.text}
`;
const Button = styled.button`
border-radius: 3px;
border:none;
padding:10px 20px;
font-weight: 500;
cursor:pointer;
background-color: ${({theme}) => theme.soft};
color: ${({theme}) => theme.textSoft};
`;
const More = styled.div`
display: flex;
font-size: 10px;
color: ${({theme}) => theme.textSoft};
margin-top: 10px;
`;
const Link = styled.div`
margin-left:50px;

`;
const Links = styled.span`
display: flex;
margin-left:30px;`;
const Signin = () => {
  const [sapid,setSapid] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", { sapid,email, password });
      // console.log(res.data);
      dispatch(loginSuccess(res.data));
    //   if(res.typeofuser === "teacher"){}
      if(res.data.typeofuser === "student"){
        window.location.href = "http://localhost:3001/student";
      }
      if(res.data.typeofuser === "parent"){
        window.location.href = "http://localhost:3001/parent";
      }
    } catch (err) {
      dispatch(loginFailure());
    }
  };





  return (
    <Container><Wrapper><Title>Signin</Title>
    <SubTitle>To continue to YTUBE</SubTitle>
    <Input placeholder="sapid" onChange={e => setSapid(e.target.value)} />
    <Input placeholder="email" onChange={e => setEmail(e.target.value)} />
    <Input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
    <Button onClick={handleLogin}>Sign in</Button>
   
    </Wrapper>
    </Container>
  )
}

export default Signin