
import React from 'react';
import { Link } from 'react-router-dom';
import Cart from "./Pages/cart";

function MenuButton({ optionName, optionIcon }) {
    const getIcon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                <path d={optionIcon} />
            </svg>
        );
    };

    const getButtonContent = () => {
        if (optionName === 'cart') {
            return (
                <>
                    <div className="dropdown">
                    <div className="btn nav-link text-white border rounded-pill hover-opacity text-capitalize dropdown-toggle"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        {optionName + '  '}
                        {getIcon()}
                    </div>
                        <Cart />
                    </div>
                </>
            );
        }

        return (
            <>
                <Link to={`/${optionName === 'home' ? '' : optionName}`}
                      className="nav-link text-white border rounded-pill hover-opacity text-capitalize">
                    {optionName + '  '}
                    {getIcon()}
                </Link>
            </>
        );
    };


    return <li className="nav-item col-6 mx-auto my-1" key={optionName}>
        {getButtonContent()}
    </li>
}

export default MenuButton;
