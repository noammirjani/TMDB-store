import React from 'react';
import { Link } from 'react-router-dom';
import SvgIcon from "../Utils/SvgIcon";


function MenuButton({ optionName }) {

    const btnClasses = "nav-link text-white border rounded-pill hover-opacity text-capitalize";

    return (
        <li className="nav-item col-6 mx-auto my-1" key={optionName}>
            <Link to={`/${optionName === 'home' ? '' : optionName}`} className={btnClasses}>
                {optionName + '  '}
                <SvgIcon name={optionName} size={16} />
            </Link>
        </li>
    );
}

export default MenuButton;

