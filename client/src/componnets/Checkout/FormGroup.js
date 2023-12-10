/**
 * FormGroup Component
 *
 * A component that represents a form group in the checkout form.
 * It includes a label, input field, and validation feedback.
 */
import React from "react";
import { Row, Col, Form, InputGroup } from "react-bootstrap";


/**
 * FormGroup Component
 *
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the form group.
 * @param {string} props.type - The type of input field (e.g., "text", "email").
 * @param {string} props.value - The value of the input field.
 * @param {Function} props.setValue - The function to update the input field value.
 * @returns {JSX.Element} The rendered component.
 */
function FormGroup({ label, type, value, setValue }) {
    const pattern = type === "text" ? "^\\s*[A-Za-z]{2,20}\\s*$" : null;
    const controlId = label.toLowerCase().replace(" ", "");
    const feedback = `Your valid ${label.toLowerCase()} is required`;

    return (
        <Col>
            <Form.Group as={Row} controlId={controlId}>
                <Form.Label column sm={3} visuallyHidden>
                    {label}
                </Form.Label>
                <Col>
                    <InputGroup hasValidation>
                        {label && <InputGroup.Text>@</InputGroup.Text>}
                        <Form.Control
                            type={type}
                            placeholder={label}
                            value={value}
                            pattern={pattern}
                            onChange={(event) => setValue(event.target.value)}
                            required
                            className="text-center"
                        />
                        <Form.Control.Feedback type="invalid">
                            {feedback}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
            </Form.Group>
        </Col>
    );
}

export default FormGroup;
