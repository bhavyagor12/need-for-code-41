import React, { useState } from 'react'
import { UserData } from "./Data";
import PieChart from "./PieChart";
import "./Chart.css";

const AssignmentsChart = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
  return (
    <div className='chart'> 
    <div style={{ width: 500 }}>
    Assignments
    <PieChart chartData={userData} />
  </div>
  </div>
  )
}

export default AssignmentsChart