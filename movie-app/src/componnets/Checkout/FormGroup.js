import React from "react";
import { Row, Col, Form, InputGroup } from "react-bootstrap";

function FormGroup({ controlId, label, feedback, type, value, setValue}) {

    return (
        <Col>
            <Form.Group as={Row} controlId={controlId}>
                <Form.Label column sm={3} visuallyHidden>{label}</Form.Label>
                <Col>
                    <InputGroup hasValidation>
                        {label && <InputGroup.Text>@</InputGroup.Text>}
                        <Form.Control type={type}
                                      placeholder={label}
                                      value={value}
                                      onChange={(event) => setValue(event.target.value)}
                                      required className="text-center"/>
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