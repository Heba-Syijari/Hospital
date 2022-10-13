import React from "react";
import "./Forgot_pass1.css"
import forgot from "../../img/Forgot.svg";
import log from "../../img/Logolog.svg";
import { Container,Row,Form ,Col} from "react-bootstrap";

const Forgot_pass1 = () => {

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
                            <div className="font">Type the code to reset password</div>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="label mt-5">Code</Form.Label>
                                <Form.Control type="text" placeholder="Code" />
                                {/* <Form.Text className="text-muted">
                                </Form.Text> */}
                            </Form.Group>
                            
                            <div className="d-grid gap-2">
                                <button className="btn text-white btn-primary mt-5 mb-1" type="button"><a href="Forgot_pass2">Next</a></button>
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
export default Forgot_pass1;