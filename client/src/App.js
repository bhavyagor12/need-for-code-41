import Login from "./login/pages/Login"
import ReactDOM from "react-dom/client";
// import Parent from "./parents/pages/parents"
// import Sidebar from "./components/Sidebar";
import Calender from "./parent/pages/Calender"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { useEffect, useState } from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import Parent from "./parent/pages/Parent";
import { ThemeProvider } from "styled-components";

function App() {

  return (
    <div>
    <BrowserRouter>
    
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/parent" element={<Parent/>} />
      <Route path="/parent/calender" element={<Calender/>} />
    </Routes>
  </BrowserRouter>
  
  </div>
  );
}

export default App;
