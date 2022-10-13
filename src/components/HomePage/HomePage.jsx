import React from "react";
import "./homepage-styles.css";
import header from "../../img/Header.svg";
const HomePage = () => {
  return (
    <>
    <div className="Intro" id="Home">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span >We Take Care Of Your Health</span>
          <span>
          Whether you are a doctor or a patient log in with your account to be able to benefit
          from our services
          </span>
        </div>
        <span>
        <a href="Login"><button className="button i-button">Sign in</button></a>
        <a href="Doctor"><button className="buttonN i-button ">Show all doctor</button></a>
        </span>
        </div>
      {/* right image side */}
      <div className="i-right">
        <img src={header} alt=""/>
      </div>
    </div>
    </>
  );
};

export default HomePage;
