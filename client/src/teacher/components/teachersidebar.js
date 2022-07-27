import React from "react";
import styled from "styled-components";
import logo from "../../images/needforcode.png";
import { AiOutlineCalendar,AiOutlineQuestionCircle,AiOutlineTeam,AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { MdAssignment,MdSubscriptions, MdOutlineVideoLibrary, MdHistory, MdOutlineLibraryMusic, MdSportsSoccer, MdSportsEsports, MdOutlineLocalMovies, MdOutlineLiveTv, MdOutlineReport, MdHelpOutline, MdOutlineAccountCircle } from 'react-icons/md';
import {TbEngine} from 'react-icons/tb';
import { RiFeedbackFill} from 'react-icons/ri';
import { IoMdSettings } from "react-icons/io"
import { SiGooglenews } from 'react-icons/si';
import { VscColorMode } from 'react-icons/vsc'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { logout } from "../../redux/userSlice";




const Container = styled.div`
  flex: 1;
  background-color:${({ theme }) => theme.bg};
  height: 100vh;
  color:${({ theme }) => theme.text};
  font-size:20px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
 display: flex;
 align-items: center;
 gap: 5px;
 font-weight:bold;
 margin-bottom: 25px;
 
`;
const Item = styled.div`
display: flex;
align-items: center;
cursor: pointer;
gap: 20px;
padding: 7.5px 0;
&:hover{
  background-color: ${({ theme }) => theme.soft}
}
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`
const Img = styled.img`
height: 25px;
`;

const Login = styled.div`
  
`
const Button = styled.button`
display: flex;
align-items: center;
gap: 3px;
  padding:5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius:3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
`

const Sidebar = ({ darkMode, setDarkMode }) => {
    const { user } = useSelector(state => state.user);
    const dispatch = new useDispatch();
    const navigate = useNavigate();
    const logoutUser = async () => {
        dispatch(logout());
        navigate("/signin");
        try {
            const res = await axios.get("auth/logout")
            console.log(res);

        } catch (e) {
            console.log(e.response);

        }
    }
    return <Container>
        <Wrapper>
            <Link to="/teacher" style={{ textDecoration: "none", color: "inherit" }}>
                <Item >
                    <Img src={logo} />
                    Teacher Portal
                </Item>
            </Link>
            <Link to="/teacher/profile" style={{ textDecoration: "none", color: "inherit" }}>
                <Item>
                    <AiOutlineHome />
                    Profile
                </Item>
            </Link>
            <Link to="/teacher/teams" style={{ textDecoration: "none", color: "inherit" }}>
                <Item>
                    <AiOutlineTeam/>
                    Teams
                </Item>
            </Link>
            <Hr/>
            <Link to="/teacher/setassignments" style={{ textDecoration: "none", color: "inherit" }}>
                <Item>
                    <MdAssignment/>
                    Set Assignments
                </Item>
            </Link>
            <Link to="/teacher/gradeassignments" style={{ textDecoration: "none", color: "inherit" }}>
                <Item>
                    <MdAssignment/>
                    Grade Assignments
                </Item>
            </Link>
            <Link to="/teacher/queries" style={{ textDecoration: "none", color: "inherit" }}>
                <Item>
                <AiOutlineQuestionCircle/>
                    Answer Queries
                </Item>
            </Link>
            <Hr />
            <Link to="/teacher/massentry" style={{ textDecoration: "none", color: "inherit" }}>
            <Item>
                <TbEngine/>
                    Mass Entry
            </Item>
            </Link>
            <Link to="/teacher/calender" style={{ textDecoration: "none", color: "inherit" }}>
            <Item >
                <AiOutlineCalendar/>
                Calender
            </Item>
            </Link>
            <Link to="/teacher/todolist" style={{ textDecoration: "none", color: "inherit" }}>
            <Item>
                <MdOutlineVideoLibrary />
                To do list
            </Item>
            </Link>
            {/* <Link to="/teacher/appointments" style={{ textDecoration: "none", color: "inherit" }}>
            <Item>
                <MdOutlineVideoLibrary />
                Appointment
            </Item>
            </Link>  */}
    
            <Button onClick={logoutUser}>Log out</Button><Hr />
            <Item onClick={() => setDarkMode(!darkMode)}>
                <VscColorMode />
                {darkMode ? "Light" : "Dark"}
            </Item>
        </Wrapper></Container>
};

export default Sidebar;