/**
 * MenuCartButton Component
 *
 * A component that represents the cart button in the menu bar.
 * It includes a dropdown menu to display the cart items and a badge indicating the number of items in the cart.
 */
import React from 'react';
import Cart from "../Pages/Cart";
import SvgIcon from "../Utils/SvgIcon";
import {useCart} from "../Context/CartProvider";

/**
 * MenuCartButton Component
 *
 * @param {Object} props - The component props.
 * @param {string} props.optionName - The name of the menu option.
 * @returns {JSX.Element} The rendered component.
 */
function MenuCartButton({ optionName }) {
    const cart = useCart();

    /**
     * Get Badge Icon
     *
     * Returns the badge icon indicating the number of items in the cart.
     *
     * @returns {JSX.Element} The rendered badge icon.
     */
    const getBudgeIcon = () => (
        <span className="position-absolute top-0 start-100 translate-middle
                        badge border border-light rounded-circle bg-danger">
            { cart.length }
            <span className="visually-hidden">items-in-cart</span>
        </span>
    );


    return (
        <li className="nav-item col-6 mx-auto my-1" key={optionName}>
            <div className="dropdown">
                <div className={`btn position-relative dropdown-toggle nav-link text-white
                                 border rounded-pill hover-opacity text-capitalize`}
                     data-bs-toggle="dropdown"
                     aria-expanded="false">
                    {optionName + '   '}
                    <SvgIcon name={optionName} size={16} />
                    {cart.length !== 0 && getBudgeIcon()}
                </div>
                <Cart />
            </div>
        </li>
    );
}

export default MenuCartButton;

