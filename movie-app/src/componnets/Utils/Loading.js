import React from 'react';
import '../../styles/Loading.css';
import {Container} from "react-bootstrap";


/**
 * Loading Component
 *
 * A component for displaying a loading animation.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
function Loading() {
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
