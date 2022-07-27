import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";



function AttendancePieChart() {

  const [attendanceData, setAttendanceData] = useState({});
  axios.post("http://localhost:8000/api/evaluation/getattendance").then((res) => 
  {console.log("success")})
  .catch((err) => {console.log(err)})

  return <Pie data={chartData} />;
}

export default PieChart;