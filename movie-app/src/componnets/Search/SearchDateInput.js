import {Col, Form, Row} from "react-bootstrap";
import DatePicker from "react-datepicker";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";

function SearchDateInput({ label, selectedDate, onDateChange }) {

    return (
        <Col className="mb-2 col-12">
            <Row className="justify-content-center align-items-center">
                <Col className="text-white col-3">
                    <Form.Label>{label}</Form.Label>
                </Col>
                <Col className="col-3 text-center">
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => onDateChange(date)}
                        dateFormat="yyyy"
                        showYearPicker
                        yearItemNumber={4}
                        scrollableYearDropdown
                    />
                </Col>
            </Row>
        </Col>
    );
}

export default SearchDateInput;