import React from "react";
import { Row, Col, Form, InputGroup } from "react-bootstrap";

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
