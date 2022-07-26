import Login from "./login/pages/Login"
import ReactDOM from "react-dom/client";
// import Parent from "./parents/pages/parents"
// import Sidebar from "./components/Sidebar";
<<<<<<< HEAD
import ParentCalender from "./parent/pages/ParentCalender"
=======
import Calender from "./parent/pages/Calender"
>>>>>>> parent of 58bf72f (Merge branch 'main' of https://github.com/bhavyagor12/need-for-code-41)
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
<<<<<<< HEAD
      <Route path="/parent/calender" element={<ParentCalender/>} />
      <Route path="/parent/profile/:sapid" element={<Profile/>} />

=======
      <Route path="/parent/calender" element={<Calender/>} />
>>>>>>> parent of 58bf72f (Merge branch 'main' of https://github.com/bhavyagor12/need-for-code-41)
    </Routes>
  </BrowserRouter>
  
  </div>
  );
}

export default App;
