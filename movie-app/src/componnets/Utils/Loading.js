import React from 'react';
import '../../styles/Loading.css';
import {Container} from "react-bootstrap";

function Loading({props}) {
    return (
        <div className="page mt-5">
            <Container className=" container-loading">
                <div className="ring ring1"></div>
                <div className="ring ring2"></div>
                <div className="ring ring3"></div>
                <div className="ring ring4"></div>
                <div className="loading-text">Loading</div>
            </Container>
        </div>
    );
}

export default Loading;
