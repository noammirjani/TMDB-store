import React from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";

function UserRegister() {
    return (
        <Container className="mt-5 rounded-pill bg-white bg-opacity-25 text-center">
            <Row className="g-3 mx-auto row-cols-2 mx-5">
                <Col>
                    <Form.Group as={Row} className="" controlId="firstName">
                        <Form.Label column sm={3} visuallyHidden>First Name</Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="First Name" required/>
                            <Form.Control.Feedback type="invalid">
                                Valid first name is required.
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group as={Row} className="mb-3" controlId="lastName">
                        <Form.Label column sm={3} visuallyHidden>Last Name</Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Last Name" required/>
                            <Form.Control.Feedback type="invalid">
                                Valid last name is required.
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Form.Group as={Row} className="mb-3 mx-1" controlId="username">
                    <Form.Label column sm={3} visuallyHidden>Username</Form.Label>
                    <Col>
                        <InputGroup hasValidation>
                            <InputGroup.Text>@</InputGroup.Text>
                            <Form.Control type="text" placeholder="Username" required/>
                            <Form.Control.Feedback type="invalid">
                                Your username is required.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                </Form.Group>
            </Row>
        </Container>
    );
}

export default UserRegister;
