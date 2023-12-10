/**
 * MenuButton Component
 *
 * A component that represents a menu button in the menu bar.
 * It includes a link to navigate to the corresponding page and an icon.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import SvgIcon from "../Utils/SvgIcon";

/**
 * MenuButton Component
 *
 * @param {Object} props - The component props.
 * @param {string} props.optionName - The name of the menu option.
 * @returns {JSX.Element} The rendered component.
 */
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

