import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import UserMessage from "../moviesDisplay/UserMessage";
import SvgIcon from "../utils/SvgIcon";
import SearchDateInput from "./SearchDateInput";

function SearchByDates({ setUrl }) {
    const errMsg = "End date should be greater than or equal to the start date (not more than the current date).";
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isValid, setIsValid] = useState(true);

    const checkDates = () => {
        const isValidDateRange = startDate <= endDate && endDate <= new Date();
        setIsValid(isValidDateRange);
        return isValidDateRange;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!checkDates()) {
            setUrl("")
            return;
        }

        const formattedStartDate = startDate.toISOString();
        let formattedEndDate = endDate.toISOString();

        if(formattedStartDate === formattedEndDate){
            formattedEndDate = new Date(endDate.getFullYear(), 12, 31).toISOString();
        }

        const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${formattedStartDate}&primary_release_date.lte=${formattedEndDate}`;
        setUrl(url);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Container fluid className="bg-white bg-opacity-10 rounded-pill py-3 text-center mx-0">
                    <Row className="justify-content-center align-items-center">
                        <SearchDateInput label="Start Date:" selectedDate={startDate} onDateChange={setStartDate}/>
                        <SearchDateInput label="End Date:" selectedDate={endDate} onDateChange={setEndDate}/>
                    </Row>
                    <Row className="justify-content-center align-items-center">
                        <Col className={"col-12"}>
                            <Button type="submit" className="mt-3 dates-search-btn btn-danger rounded-circle">
                                <SvgIcon size={16} name={"search"} />
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
            {!isValid && <UserMessage userInfo={errMsg} isAlert={true} />}
        </>
    );
}

export default SearchByDates;