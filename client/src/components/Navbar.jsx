import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { RiAddBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,
} from "./Navbar.style";
// import LogoImg from "../assets/logo.png";
const Search = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin:auto;
  width: 50%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius:3px;

`;
const Input = styled.input`
  border: none;
  background-color:transparent;
  width: 100%;
  outline: none;
  color:${({ theme }) => theme.text};
`;
const User = styled.div`
display: flex;
align-items: center;
gap: 10px;
font-weight: 500;
color:${({ theme }) => theme.text};
`;
const Avatar = styled.img`
height:32px;
width:32px;
border-radius:50%;
background-color: #999;
`;
function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);
    const { user } = useSelector(state => state.user);

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <Search>
                        <Input
                            placeholder="Search"

                        />
                        <MdSearch />
                    </Search>
                </LeftContainer>
                <RightContainer>
                    <User>
                        <Avatar src="https://imgs.search.brave.com/3hoi7NV2Nv6I6qX2OMhh1DmzpLX8ApGoT22G8s5iFWM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzQz/OS84NjMvb3JpZ2lu/YWwvdmVjdG9yLXVz/ZXJzLWljb24uanBn " />
                        {user?.name}
                    </User>
                </RightContainer>
            </NavbarInnerContainer>
        </NavbarContainer>
    );
}

export default Navbar;