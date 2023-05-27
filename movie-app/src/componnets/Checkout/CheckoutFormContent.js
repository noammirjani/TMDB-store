import React from "react";
import { Container, Row } from "react-bootstrap";
import FormGroup from "./FormGroup";

/**
 * CheckoutFormContent Component
 *
 * A component that represents the form content in the checkout section.
 * It includes form groups for collecting user information such as first name, last name, and email.
 */
function CheckoutFormContent({ formData, setFormData }) {

    /**
     * CheckoutFormContent Component
     *
     * @param {Object} props - The component props.
     * @param {Object} props.formData - The form data object containing user information.
     * @param {Function} props.setFormData - The function to update the form data.
     * @returns {JSX.Element} The rendered component.
     */
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
