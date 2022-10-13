import "./App.css";
import Login from "./components/Login/Login";
import Forgot_pass from "./components/Forgot_pass/Forgot_pass";
import Forgot_pass1 from "./components/Forgot_pass1/Forgot_pass1";
import Forgot_pass2 from "./components/Forgot_pass2/Forgot_pass2";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Services from "./components/Services/Services"
import Department1 from "./components/Department/Department1";
import Department2 from "./components/Department/Department2";
import Contact from "./components/Footer/Footer"
import Doctor from "./components/Doctor/Doctor"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <BrowserRouter basename="">
        <Routes>
          <Route path="/Eyadty" element={<> <Navbar />
                                      <HomePage/>
                                      <Services/>
                                      <Department1/>
                                      <Department1/>
                                      <Contact/></>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Forgot_pass" element={<Forgot_pass/>} />
          <Route path="/Forgot_pass1" element={<Forgot_pass1/>} />
          <Route path="/Forgot_pass2" element={<Forgot_pass2/>} />
          <Route path="/Doctor" element={<><Doctor/><Contact/></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
