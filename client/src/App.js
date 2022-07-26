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
function App() {

  return (
    <div>
    <BrowserRouter>
    
    <Routes>
      <Route path="/signin" element={<Login/>} />
      <Route path="/parent" element={<Parent/>} />
      <Route path="/parent/calender" element={<ParentCalender/>} />
      <Route path="/parent/profile/:sapid" element={<Profile/>} />

    </Routes>
  </BrowserRouter>
  
  </div>
  );
}

export default App;
