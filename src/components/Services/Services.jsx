import React from "react";
import "./Services.css";
import Doctors from "../../img/Doctors service.svg";
import Heart from "../../img/healty service.svg";
const Services = () => {
    return (
                <section className="about" id="Services">
                    <div className="backg">
                        <h2 className="heading">SERVICES</h2>    
                        
                        <div className="box-container">
                        
                            <div className="box">
                                <div className="photo"><img src={Heart} alt=""/></div>
                                <span className="content">We provide health care in a variety of medical specialties and multiple services that make it easier for patients to reach their goals quickly and easily</span>
                            </div>
                        
                            <div className="box">
                                <div className="photo"><img src={Doctors} alt=""/></div>
                                <span className="content">We have a distinguished staff of experienced doctors and an integrated service staff we strive to achieve comfort and happiness for all patients</span>
                            </div>

                            <div className="box">
                                <div className="photo"><img src={Heart} alt=""/></div>
                                <span className="content">We provide health care in a variety of medical specialties and multiple services that make it easier for patients to reach their goals quickly and easily</span>
                            </div>        
                        </div>
                    </div>        
                </section>
    );
};
export default Services;
