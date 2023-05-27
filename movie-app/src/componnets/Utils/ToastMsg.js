import React, { useEffect } from 'react';
import { ToastContainer, Toast } from 'react-bootstrap';
import SuccessAnimation from "./SuccessAnimation";

/**
 * ToastMsg Component
 *
 * A component that displays a toast message with a success animation.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.mode - The mode to control the visibility of the toast message.
 * @param {function} props.setMode - The function to toggle the visibility of the toast message.
 * @param {string} props.text - The text content of the toast message.
 * @returns {JSX.Element} The rendered component.
 */
function ToastMsg({ mode, setMode, text }) {
    const toggleShowToast = () => setMode(false);

    useEffect(() => {
        if (mode) {
            const timer = setTimeout(() => {
                toggleShowToast();
            }, 2500); // Adjust the duration (in milliseconds) as needed
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