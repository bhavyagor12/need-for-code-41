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

function App() {

  return (
    <div>
    <BrowserRouter>
    
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/parent" element={<Parent/>} />
      <Route path="/student" element={<Student/>} />
      <Route path="/student/calender" element={<StudentCalender/>} />
      <Route path="/parent/calender" element={<ParentCalender/>} />
    </Routes>
  </BrowserRouter>
  
  </div>
  );
}

export default App;
