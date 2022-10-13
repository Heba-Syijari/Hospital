import React from "react";
import "./Doctor.css";
import Card from  "./Card";
const Doctor = () => {
    return (
                <section className="Doctor" id="Doctor">
                        <div className="backg-d">
                            <h1 className="heading-d">Heart clinic</h1>  
                            <span style={{color:"var(--blue6)"}}>13 type of heart clincs</span>
                        </div>   
                        <div className="box-container-d">
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                            
                </section>
    );
};
export default Doctor;