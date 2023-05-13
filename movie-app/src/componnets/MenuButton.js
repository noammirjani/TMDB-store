import React from 'react';
import { Link } from 'react-router-dom';
import Cart from "./Pages/cart";

function MenuButton({ menuOptions, menuIcons }) {
    const getIcon = (index) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                <path d={menuIcons[index]} />
            </svg>
        );
    };

    const getButtonContent = (op, index) => {
        if (op === 'cart') {
            return (
                <>
                    <div className="dropdown">
                    <div className="btn nav-link text-white border rounded-pill hover-opacity text-capitalize dropdown-toggle"
                        data-bs-toggle="dropdown" aria-expanded="false"
                    >
                        {op + '  '}
                        {getIcon(index)}
                    </div>
                        <Cart />
                    </div>
                </>
            );
        }

        return (
            <>
                <Link to={`/${op === 'home' ? '' : op}`}
                      className="nav-link text-white border rounded-pill hover-opacity text-capitalize"
                >
                    {op + '  '}
                    {getIcon(index)}
                </Link>
            </>
        );
    };

    const optionsList = menuOptions.map((op, index) => (
        <li className="nav-item col-6 mx-auto my-1" key={op}>
            {getButtonContent(op, index)}
        </li>
    ));

    return <>{optionsList}</>;
}

export default MenuButton;
