import Login from "./login/pages/Login"
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>} />
    </Routes>
  </BrowserRouter>
  
  </div> 
  );
}

export default App;
