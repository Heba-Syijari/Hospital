import React,{useState} from "react";
import "./Navbar.css";
import logo from "../../img/Logo-1.svg"
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="Nav" id="Navbar">
      {/* left */}
          <img src={logo} className="logo" alt="" />
      {/* right */}
          <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={
            ()=> setIsMobile(false)
          }>
            {/* <Link to="Home" className="link"><li>Home</li></Link>
            <Link to="Services" path="/Services" className="link"><li>Services</li></Link>
            <Link to="Department" className="link"><li>Department</li></Link>
            <Link to="Footer" className="link"><li>Contact us</li></Link>
            <Link to="Login" className="log"><li>Sign in</li></Link> */}
            <a href="#Home" className="link"><li>Home</li></a>
            <a href="#Services" className="link"><li>Services</li></a>
            <a href="#Department" className="link"><li>Department</li></a>
            <a href="#Footer" className="link"><li>Contact us</li></a>
            <a href="Login" className="log"><li>Sign in</li></a>
          </ul>
          <button className="mobile-mene-icon" onClick={()=> setIsMobile(!isMobile)}>
            {isMobile ? <i className="fa-solid fa-xmark"></i>:<i className="fa-solid fa-bars"></i>}
          </button>
    </nav>
  );
}

export default Navbar;
