import React from "react";
import styled from "styled-components";
import logo from "../../images/needforcode.png";
import { VscColorMode } from 'react-icons/vsc'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { logout } from "../../redux/userSlice";
import { AiOutlineCalendar, AiOutlineHome, AiOutlineQuestionCircle, AiOutlineSearch, AiOutlineTable } from "react-icons/ai";
import { MdAssignment, MdOutlineDateRange, MdOutlineVideoLibrary, MdSubscriptions } from "react-icons/md";
import { SiTodoist } from "react-icons/si";
import { HiDocumentReport } from "react-icons/hi";
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

const StudentSidebar = ({ darkMode, setDarkMode }) => {
    const { user } = useSelector(state => state.user);
    const dispatch = new useDispatch();

    const logoutUser = async () => {
        dispatch(logout());
        try {
            const res = await axios.get("auth/logout")
            console.log(res);

        } catch (e) {
            console.log(e.response);

        }
    }
    return <Container>
        <Wrapper>
            <Link to="/student" style={{ textDecoration: "none", color: "inherit" }}>
                <Logo >
                    <Img src={logo} />
                    Student Portal
                </Logo>
            </Link>
            <Link to="/student" style={{ textDecoration: "none", color: "inherit" }}>
                <Item>
                    <AiOutlineHome />
                    Home
                </Item>
            </Link>
            <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
                <Item>
                    <HiDocumentReport />
                    Report
                </Item>
            </Link>
            <Link to="subscriptions" style={{ textDecoration: "none", color: "inherit" }}>
                <Item>
                    <MdAssignment />
                    Assignments
                </Item>
            </Link>
            <Hr />
            <Link to="hello">
                <Item>
                    <AiOutlineQuestionCircle />
                    Raise Query
                </Item>
            </Link>
            <Link to="/student/calender">
                <Item >
                    <AiOutlineCalendar />
                    Calender
                </Item>
            </Link>
            <Item>
                <SiTodoist />
                To do list
            </Item>
            <Item>
                <MdOutlineDateRange />
                Appointment
            </Item>
            <Item>
                <AiOutlineTable />
                Time table
            </Item>
            <Button onClick={logoutUser}>Log out</Button><Hr />

            <Item onClick={() => setDarkMode(!darkMode)}>
                <VscColorMode />
                {darkMode ? "Light" : "Dark"}
            </Item>
        </Wrapper>
    </Container>;
};

export default StudentSidebar;