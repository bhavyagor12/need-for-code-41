import axios from 'axios';
import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components';


const Container = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
align-items: center;
justify-content: center;
color: ${({ theme }) => theme.text}

`;
const Wrapper = styled.div`
background-color: ${({ theme }) => theme.bg};
display: flex;
align-items: center;
flex-direction:column;
padding:50px 70px;
border:2px solid ${({ theme }) => theme.soft};
gap: 10px;
color: ${({ theme }) => theme.text}
`;

const Title = styled.h1`
font-size: 48px;
color: ${({ theme }) => theme.text};
`;

const SubTitle = styled.h2`
font-style: 20px;
font-weight: 300;
color: ${({ theme }) => theme.text};


`;
const Input = styled.input`
border:1px solid ${({ theme }) => theme.soft};
border-radius:3px;
background-color: transparent;
padding:15px;
outline:none;
color: ${({ theme }) => theme.text}
`;

const Button = styled.button`
border-radius: 3px;
border:none;
padding:10px 20px;
font-weight: 500;
cursor:pointer;
background-color: ${({ theme }) => theme.soft};
color: ${({ theme }) => theme.text};
`;

const RaiseQuery = () => {

    const [teamname, setTeamName] = useState('');
    const [sapid, setSapid] = useState('');
    const [question, setQuestion] = useState('');


    const inputs = [
        {
            id: 2,
            name: 'sapid',
            type: 'text',
            placeholder: 'SAPID',
            errorMessage: "SAPID should be 10 digits and shouldn't include any other characters!",
            label: 'SAPID',
            pattern: "^[0-9]{10}$",
            required: true,
        },
        {
            id: 1,
            name: "teamname",
            type: "text",
            placeholder: "teamname",
            required: true,
        },
        {
            id: 3,
            name: "query",
            type: "text",
            placeholder: "Query",
            errorMessage: "Please enter a query!",
            label: "Query",
            //   pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },

    ]


    const raiseQuery = async (e) => {
        try {
            const res = await axios.post("/query/add", { teamname, sapid, question });
            console.log(res.data);
            alert("query has been added getting back to you soon!");
        }
        catch (e) {
            console.log("error")
        }
    }

    return (
        < Container >
            <Wrapper><Title>Raise a query</Title>
                <SubTitle> Feel free to raise issues at our platform</SubTitle>
                <Input placeholder="team name" type="string" onChange={e => setTeamName(e.target.value)} />
                <Input placeholder="sapid" type="string" onChange={e => setSapid(e.target.value)} />
                <Input placeholder='question' type="text" onChange={e => setQuestion(e.target.value)} />
                <Button onClick={raiseQuery}>Query</Button>

            </Wrapper>

        </Container >
    )
}

export default RaiseQuery