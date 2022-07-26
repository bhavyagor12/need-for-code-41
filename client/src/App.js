// import Login from "./login/pages/Login"
// import ReactDOM from "react-dom/client";
// // import Parent from "./parents/pages/parents"
// // import Sidebar from "./components/Sidebar";
// import Calender from "./parent/pages/Calender"
// import Profile from "./parent/pages/Profile";
import RaiseQuery from "./parent/pages/RaiseQuery";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// import { useEffect, useState } from "react";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// import { FiSettings } from "react-icons/fi";
// import Parent from "./parent/pages/Parent";
// import { ThemeProvider } from "styled-components";
import Login from "./login/pages/Login"
import ReactDOM from "react-dom/client";
// import Parent from "./parents/pages/parents"
// import Sidebar from "./components/Sidebar";
import ParentCalender from "./parent/pages/ParentCalender"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Parent from "./parent/pages/Parent";
import { ThemeProvider } from "styled-components";
import Student from "./student/pages/Student";
import StudentCalender from "./student/pages/StudentCalender";
import Profile from "./parent/pages/Profile";
import Signin from "./login/pages/Signin";
// import StudentTable from "./student/pages/StudentTable";

function App() {

  return (
    <div>
    <BrowserRouter>
    
    <Routes>
      <Route path="/signin" element={<Signin/>} />
      <Route path="/parent" element={<Parent/>} />
      <Route path="/parent/calender" element={<ParentCalender/>} />
      <Route path="/student/calender" element={<StudentCalender/>} />
      <Route path='/student' element={<Student />} />
      {/* <Route path="/student/table" element={<StudentTable/>} /> */}
      <Route path="/parent/profile" element={<Profile/>} />
      <Route path="/parent/raisequery" element={<RaiseQuery/>} />



    </Routes>
  </BrowserRouter>
  
  </div>
  );
}

export default App;
