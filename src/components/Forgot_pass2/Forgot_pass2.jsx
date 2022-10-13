import React from "react";
import { useState } from "react";
import "./Forgot_pass2.css"
import forgot from "../../img/Forgot.svg";
import log from "../../img/Logolog.svg";
import { Container,Row,Form ,Col} from "react-bootstrap";
import {AiOutlineEyeInvisible , AiOutlineEye} from 'react-icons/ai'


const Forgot_pass2 = () => {
    const [passwordEye , setPasswordEye] = useState(false);
    const handlePasswordClick = () => {
        setPasswordEye (!passwordEye)
    }
    return(
        <div className="back">
            <img src={log} className="marg" alt=""/> 
            <Container className="cont">
                <Row>
                <Col xl={1} lg={0} md={0}sm={0}> </Col>
                    <Col xl={5} lg={5} md={4} sm={0} className="mt-5 none ">
                        <img src={forgot} className="mb-3 size" alt=""/>
                    </Col>
                    <Col xl={1} lg={1} md={2} sm={0}> </Col>
                    <Col xl={5} lg={6} md={6} sm={12} className="mb-5 pb-5 mid ">
                        <Form className="backwhite p-5 mb-5">
                            <div className="welcome">Reset password</div>
                            <div className="font">Type your new password</div>
                            <Form.Group controlId="formBasicPassword ">
                                <Form.Label className="label mt-4">New password</Form.Label>
                                <div className="rela" >
                                <Form.Control type={(passwordEye === false)? "password" : "text"} placeholder="New password"/>
                                <i className="abs"> 
                                    {
                                        (passwordEye === false)?<AiOutlineEyeInvisible onClick={handlePasswordClick}/> : <AiOutlineEye onClick={handlePasswordClick}/>
                                    }
                                    
                                </i></div>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword ">
                                <Form.Label className="label mt-4">Confirm Password</Form.Label>
                                <div className="rela" >
                                <Form.Control type={(passwordEye === false)? "password" : "text"} placeholder="Confirm Password"/>
                                <i className="abs"> 
                                    {
                                        (passwordEye === false)?<AiOutlineEyeInvisible onClick={handlePasswordClick}/> : <AiOutlineEye onClick={handlePasswordClick}/>
                                    }
                                    
                                </i></div>
                            </Form.Group>
                            
                            <div className="d-grid gap-2">
                                <button className="btn text-white btn-primary mt-5 mb-1" type="button">Sign in</button>
                            </div>
                            
                            <div className="font mb-5 pb-3">
                                Remember It ? <a href="Login">Sign In</a> here
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Forgot_pass2;