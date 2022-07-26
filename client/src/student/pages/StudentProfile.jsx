import React from 'react'
import needforcode from '../../images/needforcode.png';
import './StudentProfile.css';
import axios from 'axios'
import { useSelector } from 'react-redux';

const StudentProfile = () => {
    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     dispatch(loginStart());
    //     try {
    //       const res = await axios.post("/auth/signin", { sapid,email, password });
    //       console.log(res.data);
    //       dispatch(loginSuccess(res.data));
    //     //   if(res.typeofuser === "teacher"){}
    //       if(res.data.typeofuser === "student"){
    //         window.location.href = "http://localhost:3001/student";
    //       }
    //       if(res.data.typeofuser === "parent"){
    //         window.location.href = "http://localhost:3001/parent";
    //       }
    
    
          
    //     } catch (err) {
    //       dispatch(loginFailure());
    //     }
    //   };
    const { user } = useSelector(state => state.user);
    
    
  return (
    <div>
        <div className="form">
              <div className="image">
                <img src={needforcode} alt="photo" className="photo" />
                <div className="place">
                  <h1 className="text1"> HI {user?.name}! </h1>
                  <h2 className="text"> SAPid: {user?.sapid} </h2>
                  <h2 className="text"> Email-ID: {user?.email} </h2>
                  <h2 className="text"> Year Of Graduation: 2024 </h2>
                </div>
              </div>
              <div>
                <h2 className="text2"> Teams: </h2>
                <div className="hello">
                  <div className="square">
                    COMPUTERS
                    <img src={needforcode} alt="computer" className="computer" />
                  </div>

                  <div className="square">
                    COMPUTERS
                    <img src={needforcode} alt="computer" className="computer" />
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default StudentProfile