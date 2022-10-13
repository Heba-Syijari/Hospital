import React from "react";
import { useState } from "react";
import "./Login.css"
import login from "../../img/Login.svg";
import log from "../../img/Logolog.svg";
import { Link } from "react-router-dom";
import { Container,Row,Form ,Col} from "react-bootstrap";
import {AiOutlineEyeInvisible , AiOutlineEye} from 'react-icons/ai'

const Login = () => {
    const [passwordEye , setPasswordEye] = useState(false);//start false
    const handlePasswordClick = () => {
        setPasswordEye (!passwordEye)
    }
    return(
        <div className="back">
            <img src={log} className="marg" alt=""/> 
            <Container className="cont">
                <Row>
                    <Col xl={1} lg={0} md={0}sm={0}> </Col>
                    <Col xl={5} lg={5} md={5} sm={0} className="mt-5 none">
                        <img src={login} className="mb-3 mt-3 " alt=""/>
                    </Col>
                    <Col xl={1} lg={1} md={1} sm={0}> </Col>
                    <Col xl={5} lg={6} md={6} sm={12} className=" mb-5 mid ">
                        <Form className="backwhite p-5 mb-5">
                            <div className="welcome">Welcome back</div>
                            <div className="login">Log in to your account</div>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="label mt-4">Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" />
                                {/* <Form.Text className="text-muted">
                                </Form.Text> */}
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword ">
                                <Form.Label className="label mt-4">Password</Form.Label>
                                <div className="rela" >
                                <Form.Control type={(passwordEye === false)? "password" : "text"} placeholder="Password" className=""/>
                                <i className="abs"> 
                                    {
                                        (passwordEye === false)?<AiOutlineEyeInvisible onClick={handlePasswordClick}/> : <AiOutlineEye onClick={handlePasswordClick}/>
                                    }
                                    
                                </i></div>
                            </Form.Group>
                            <div className="forgot">
                                <a href="Forgot_pass">Forget password?</a>
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn text-white btn-primary mt-5 mb-5" type="button"><a href="Eyadty">Sign in</a></button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Login;