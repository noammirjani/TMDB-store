import React from 'react';
import Cart from "../Pages/Cart";
import SvgIcon from "../Utils/SvgIcon";
import {useCart} from "../Context/CartProvider";

function MenuCartButton({ optionName }) {
    const cart = useCart();

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

