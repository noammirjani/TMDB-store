import React from "react";
import { Container, Row } from "react-bootstrap";
import FormGroup from "./FormGroup";


function CheckoutFormContent() {

    return (
        <>
            <Container className="mt-5 rounded-pill bg-white bg-opacity-25 text-center p-4">
                <Row className="g-3 mx-auto row-cols-2 mx-5">
                    <FormGroup controlId="firstName" label="First Name" type={"text"}
                               feedback="Valid first name is required."/>
                    <FormGroup controlId="lastName" label="Last Name"  type={"text"}
                               feedback="Valid last name is required."/>
                </Row>
                <Row className="g-3 mx-auto row-cols-1 mt-2">
                    <FormGroup controlId="email" label="email" type={"email"}
                               feedback="Your email is required."/>
                </Row>
            </Container>
        </>

    );
}

export default CheckoutFormContent;
