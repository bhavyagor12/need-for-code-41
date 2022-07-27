import axios from 'axios';
import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {loginFailure,loginSuccess,loginStart} from '../../redux/userSlice';
import { Navigate, useNavigate } from 'react-router-dom';



const Container = styled.div `
display: flex;
flex-direction: column;
background: linear-gradient(rgba(255, 255, 255, 0.1),
rgba(255, 255, 255, 0.3)),

height: 100vh;
align-items: center;
justify-content: center;
color: ${({theme}) => theme.text}

`;
const Wrapper = styled.div `
background-color: white;
display: flex;
align-items: center;
flex-direction:column;

padding:50px 70px;
border:2px solid ${({theme}) => theme.soft};
gap: 10px;
`;

const Title = styled.h1`
font-size: 48px;
`;

const SubTitle = styled.h2`
font-style: 20px;
font-weight: 300;

`;
const Input = styled.input`
border:1px solid ${({theme}) => theme.soft};
border-radius:3px;
background-color: transparent;
padding:15px;
outline:none;
color: black;
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


const SetAssignments = () => {
  const navigate = useNavigate();
    const [totalmarks,setTotalMarks] = useState("");
  const [description, setDescription] = useState("");
  const [typeofassignment, settypeofassignment] = useState("");
  const[teamname,setTeamName] = useState("");
  const { user } = useSelector(state => state.user);
  const {name,_id} = user;

  const handleClick =  (e) => {
    e.preventDefault();
    // dispatch(loginStart());

    try {
      // if(totalmarks && description && typeofassignment && teamname){
      const res = axios.post("http://localhost:8000/api/teams/addassignments", { _id,name,teamname,description,typeofassignment,totalmarks });
      console.log(res.data);
      // console.log(name);
      // console.log(_id);
      // console.log(res.data);
      // alert("Assignment Added Successfully");
      // navigate("/teacher");}
      // console.log(name);
      // console.log(_id);
      // else{
      //   alert("Please fill all the fields");
      // }

      
    }catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
        <Container>
    
    <Wrapper><Title>Set Assignment</Title>
    <SubTitle>WELCOME TO SterLearn </SubTitle>
    <Input placeholder="Total Marks" onChange={e => setTotalMarks(e.target.value)} className="text-black" />
    <Input placeholder="Description" onChange={e => setDescription(e.target.value)} />
    <Input type="text" placeholder="Type of Assignment" onChange={e => settypeofassignment(e.target.value)} />
    <Input type="text" placeholder="Team Name" onChange={e => setTeamName(e.target.value)} />
    <Button onClick={handleClick}>Set Assignment</Button>
   
    </Wrapper>
   
    </Container>
    </div>
  )
}

export default SetAssignments