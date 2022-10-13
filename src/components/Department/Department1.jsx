import React from "react";
import "./Department1.css";
import "./Department2.jsx";
import header from "../../img/Heart clinic.svg";
import Department2 from "./Department2.jsx";
const Department1 = () => {
    return (
        <>
        <div className="intro" id="Department">
        {/* left name side */}
        {/* <h2 className="heading">DEPARTMENT</h2> */}
        <div className="d-left">
            <div className="d-name">
            <span>Heart CLinics</span>
            <span>
            The Department of Cardiology is a center for integrated cardiac imaging with the latest echocardiography equipment (performs from 700 to 800 echocardiograms annually, as well as transesophageal ECG with 3D technology and contrast), cardiac CT, and magnetic
            </span>
            </div>
            <span>
            <a href="Doctor"><button className="buttonN d-button ">See All</button></a>
            </span>
            </div>
        {/* right image side */}
        <div className="d-right">
            <img src={header} alt=""/>
        </div>
        </div>

        <Department2/>
        </>
    );
};

export default Department1;
