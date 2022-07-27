import React, { useState } from 'react'
import { UserData } from "./Data";
import BarChart from "./BarChart";
import "./Chart.css";

const MarksChart = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Marks Obtained",
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
    <div style={{ width: 800 }}>
    <h2>Marks</h2>
    <BarChart chartData={userData} />
  </div>
  </div>
  )
}

export default MarksChart