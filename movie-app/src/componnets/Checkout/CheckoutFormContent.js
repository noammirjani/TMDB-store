import React from "react";
import { Container, Row } from "react-bootstrap";
import FormGroup from "./FormGroup";

function CheckoutFormContent({ formData, setFormData }) {
    return (
        <>
            <Container className="mt-5 rounded-pill bg-white bg-opacity-25 text-center p-4">
                <Row className="g-3 mx-auto row-cols-2 mx-5">
                    <FormGroup
                        label="First Name"
                        type="text"
                        value={formData.firstName}
                        setValue={(value) => setFormData((prevFormData) => (
                            {...prevFormData, firstName: value,}))}
                    />
                    <FormGroup
                        label="Last Name"
                        type="text"
                        value={formData.lastName}
                        setValue={(value) => setFormData((prevFormData) => (
                            {...prevFormData, lastName: value,}))}
                    />
                </Row>
                <Row className="g-3 mx-auto row-cols-1 mt-2">
                    <FormGroup
                        label="email"
                        type="email"
                        value={formData.email}
                        setValue={(value) => setFormData((prevFormData) => (
                            {...prevFormData, email: value,}))}
                    />
                </Row>
            </Container>
        </>
    );
}

export default CheckoutFormContent;
