import { useState } from "react";
import "./Chart.css";
import BarChart from "./BarChart"
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { UserData } from "./Data";
import axios from "axios";

function Chart() {

  const fetchData =async () =>{
  const fetch = await axios.get("http://localhost:8000/api/hello");
  }
  console.log({"1":"10","2":"20","3":"30"});
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.id),
    datasets: [
      {
        label: "Charts offered for student progress",
        data: UserData.map((data) => data.marks),
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

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="chart">
      {/* <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div> */}
      Marks Table
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default Chart;