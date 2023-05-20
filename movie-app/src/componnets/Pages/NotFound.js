import React from 'react';
import "../../styles/NotFound.css"
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import SvgIcon from "../utils/SvgIcon";

const NotFound = () => {
    return (
        <Container className="text-white text-center text-break mt-5">
            <Container>
                <h1 className="display-2"> Whoops! </h1>
                <p className=" display-5">It seems like we couldn't find the page you were looking for</p>
            </Container>
            <section className="error-container">
                <span>4</span>
                <span><span className="screen-reader-text">0</span></span>
                <span>4</span>
            </section>
                <Link to={`/`} className="button">
                    <button >Back To Website</button>
                </Link>
        </Container>
    );
};

export default NotFound;
