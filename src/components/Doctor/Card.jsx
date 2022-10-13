import React from "react";
import "./Doctor.css";
import B from "../../img/background.png";
const Card = () => {
    return (
        <div className="box-d">
                                <div className="photo-d"><img src={B} alt=""/></div>
                                <div className="content-d"><span className="H1">Mohammad SY</span> <span className="H2">heart clinic</span></div>
                                <div className="content-d"> <span className="H3"><i className="fa-solid fa-briefcase"></i> 3 years</span> <button className="buttonN">Add appoint</button></div>
        </div> 
        );
    };
    export default Card;
