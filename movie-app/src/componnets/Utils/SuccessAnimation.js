import React from 'react';
import '../../styles/SuccessAnimation.css';

/**
 * SuccessAnimation Component
 *
 * A component that renders a success animation with a checkmark icon.
 *
 * @returns {JSX.Element} The rendered component.
 */
function SuccessAnimation() {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="success-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle className="circle" cx="26" cy="26" r="25" fill="none" />
                    <path className="check" fill="none" d="M14,27l7.1,7.1L38,17" />
                </svg>
            </div>
        </div>
    );
}

export default SuccessAnimation;