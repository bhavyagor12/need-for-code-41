// import Login from "./login/pages/Login"
// import ReactDOM from "react-dom/client";
// // import Parent from "./parents/pages/parents"
// // import Sidebar from "./components/Sidebar";
// import Calender from "./parent/pages/Calender"
// import Profile from "./parent/pages/Profile";

import Login from "./login/pages/Login"
import ReactDOM from "react-dom/client";
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
import MassEntry from "./teacher/teachermassentry.js";
import ParentRaiseQuery from "./parent/pages/ParentRaiseQuery";
import ParentReport from "./parent/pages/ParentReport";
import ParentFeedbacks from "./parent/pages/ParentFeedbacks";
import ParentAppointment from "./parent/pages/ParentAppointment";
// import StudentRaiseQuery from "./student/pages/StudentRaiseQuery";
// import StudentTable from "./student/pages/StudentTable";
import MassEntry from "./teacher/pages/teachermassentry.js";

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
      <Route path="/parent/calender" element={<ParentCalender/>} />
      <Route path="/parent/feedback" element={<ParentFeedbacks/>} />
      <Route path="/parent/raisequery" element={<ParentRaiseQuery/>} />
      <Route path="/parent/report" element={<ParentReport/>} />
      <Route path="/parent/appointment" element={<ParentAppointment/>} />
      <Route path="/login" element={<Login/>} />

      <Route path="/teacher/massentry" element={<MassEntry/>} />



    </Routes>
  </BrowserRouter>
  
  </div>
  );
}

export default App;
