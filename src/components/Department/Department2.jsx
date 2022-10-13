import React from "react";
import "./Department2.css";
import header from "../../img/Dental clinic.svg";
const Department2 = () => {
    return (
        <div className="intr">
            <div className="m">
            {/* left name side */}
            <div className="d2-left">
                <img src={header} alt=""/>
            </div>

            {/* right image side */}
            <div className="d2-right">
                <div className="d2-name">
                    <span>Heart CLinics</span>
                    <span>
                    The Department of Cardiology is a center for integrated cardiac imaging with the latest echocardiography equipment (performs from 700 to 800 echocardiograms annually, as well as transesophageal ECG with 3D technology and contrast), cardiac CT, and magnetic
                    </span>
                </div>
                <span>
                <a href="Doctor"><button className="buttonN d2-button ">See All</button></a>
                </span>
            </div>
            </div>
        </div>
    );
};

export default Department2;
