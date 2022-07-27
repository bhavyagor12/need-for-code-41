import React from 'react'
import needforcode from '../../images/needforcode.png';

import axios from 'axios'
import { useSelector } from 'react-redux';

const TeacherProfile = () => {
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
                  <h2 className="text"> Role: Teacher </h2>
                </div>
              </div>
              <div>
                <h2 className="text2">Owner of Teams: </h2>
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

export default TeacherProfile