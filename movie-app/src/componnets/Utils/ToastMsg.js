import React, { useEffect } from 'react';
import { ToastContainer, Toast } from 'react-bootstrap';
import SuccessAnimation from "./SuccessAnimation";

function ToastMsg({ mode, setMode, text }) {
    const toggleShowToast = () => setMode(false);

    useEffect(() => {
        if (mode) {
            const timer = setTimeout(() => {
                toggleShowToast();
            }, 2000); // Adjust the duration (in milliseconds) as needed
            return () => clearTimeout(timer);
        }
    }, [mode]);

    return (
        <ToastContainer className="p-3 position-fixed bottom-0 end-0 text-black">
            <Toast show={mode} onClose={toggleShowToast} >
                <Toast.Header className="bg-success">
                    <strong className="me-auto">Movie Time</strong>
                    <small> just now </small>
                </Toast.Header>
                <Toast.Body className="d-flex align-items-center">
                    <SuccessAnimation />
                    <span className="ms-2">{text}</span>
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default ToastMsg;