import React from 'react';
import { Link } from 'react-router-dom';
import Cart from "../Pages/cart";
import SvgIcon from "../utils/SvgIcon";

function MenuButton({ optionName }) {

    const getButtonContent = () => {
        if (optionName === 'cart') {
            return (
                <div className="dropdown">
                    <div className="btn nav-link text-white border rounded-pill hover-opacity text-capitalize dropdown-toggle"
                         data-bs-toggle="dropdown" aria-expanded="false">
                        {optionName + '   '}
                        <SvgIcon name={optionName} size={16} />
                    </div>
                    <Cart />
                </div>
            );
        }

        return (
            <Link to={`/${optionName === 'home' ? '' : optionName}`}
                  className="nav-link text-white border rounded-pill hover-opacity text-capitalize">
                {optionName + '  '}
                <SvgIcon name={optionName} size={16} />
            </Link>
        );
    };

    return (
        <li className="nav-item col-6 mx-auto my-1" key={optionName}>
            {getButtonContent()}
        </li>
    );
}

export default MenuButton;
