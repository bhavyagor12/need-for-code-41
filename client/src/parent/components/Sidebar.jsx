import React from "react";
import styled from "styled-components";
import logo from "../../images/needforcode.png";
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { MdSubscriptions, MdOutlineVideoLibrary, MdHistory, MdOutlineLibraryMusic, MdSportsSoccer, MdSportsEsports, MdOutlineLocalMovies, MdOutlineLiveTv, MdOutlineReport, MdHelpOutline, MdOutlineAccountCircle } from 'react-icons/md';
import { IoMdSettings } from "react-icons/io"
import { SiGooglenews } from 'react-icons/si';
import { VscColorMode } from 'react-icons/vsc'
import { Link } from "react-router-dom";
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
            <Link to="/parent" style={{ textDecoration: "none", color: "inherit" }}>
                <Logo >
                    <Img src={logo} />
                    Parent Portal
                </Logo>
            </Link>
            <Link to="/parent" style={{ textDecoration: "none", color: "inherit" }}>
                <Item>
                    <AiOutlineHome />
                    Home
                </Item>
            </Link>
            <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
                <Item>
                    <AiOutlineSearch />
                    Report
                </Item>
            </Link>
            <Link to="subscriptions" style={{ textDecoration: "none", color: "inherit" }}>
                <Item>
                    <MdSubscriptions />
                    Feedbacks
                </Item>
            </Link>
            <Hr />
            <Link to="hello">
                <Item>
                    <MdOutlineVideoLibrary />
                    Raise Query
                </Item>
            </Link>

            <Item >
                <MdOutlineVideoLibrary />
                Calender
            </Item>
            <Item>
                <MdOutlineVideoLibrary />
                To do list
            </Item>
            <Item>
                <MdOutlineVideoLibrary />
                Appointment
            </Item>
            <Item>
                <MdOutlineVideoLibrary />
                Teachers table
            </Item>
            <Button onClick={logoutUser}>Log out</Button><Hr />

            <Item onClick={() => setDarkMode(!darkMode)}>
                <VscColorMode />
                {darkMode ? "Light" : "Dark"}
            </Item>
        </Wrapper></Container>;
};

export default Sidebar;