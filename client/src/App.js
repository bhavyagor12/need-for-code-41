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
import Teacher from "./teacher/pages/Teacher";
import StudentCalender from "./student/pages/StudentCalender";
import Profile from "./parent/pages/Profile";
import Signin from "./login/pages/Signin";
import StudentTable from "./student/pages/StudentTable";
// import Teacher from './teacher/teachersidebar'
// import StudentTable from "./student/pages/StudentTable";
import MassEntry from "./teacher/teachermassentry.js";
import Papaparsing from "./Papaparsing";
import SetAssign from "./teacher/pages/SetAssign";
import TeacherProfile from "./teacher/pages/TeachersProfile";
import TeacherCalender from "./teacher/pages/TeacherCalendar";
import GradeAssignment from "./teacher/pages/GradeAssignments";
import LandingPage from "./components/LandingPage";
import ParentRaiseQuery from "./parent/pages/ParentRaiseQuery";
import ParentReport from "./parent/pages/ParentReport";
import ParentFeedbacks from "./parent/pages/ParentFeedbacks";
import ParentAppointment from "./parent/pages/ParentAppointment";
// import StudentRaiseQuery from "./student/pages/StudentRaiseQuery";
// import StudentTable from "./student/pages/StudentTable";
// import MassEntry from "./teacher/pages/teachermassentry.js";

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
      <Route path='/teacher' element={<Teacher />} />
      <Route path="/student/table" element={<StudentTable/>} />
      <Route path="/parent/profile" element={<Profile/>} />
      <Route path="/parent/raisequery" element={<RaiseQuery/>} />
      <Route path="/papaparsing" element={<Papaparsing/>} />
      <Route path='/teacher' element={<Teacher/>} />
      <Route path='/teacher/setassignments' element={<SetAssign />} />
      <Route path="/teacher/calender" element={<TeacherCalender/>} />
      <Route path='/teacher/gradeassignments' element={<GradeAssignment />} />
      <Route path='/teacher/profile' element={<TeacherProfile />} />
      

      <Route path="/login" element={<Login/>} />

      <Route path="/teacher/massentry" element={<MassEntry/>} />

      <Route path="/" element={<LandingPage/>} />



    </Routes>
  </BrowserRouter>
  
  </div>
  );
}

export default App;
