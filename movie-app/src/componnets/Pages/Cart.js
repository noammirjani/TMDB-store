/**
 * Cart Component
 *
 * A component that displays the cart dropdown menu with cart items and actions.
 */
import React, { useState } from 'react';
import { useCart, useCartDispatch } from '../Context/CartProvider';
import { Container, Button } from "react-bootstrap";
import SvgIcon from "../Utils/SvgIcon";
import { Link } from "react-router-dom";
import CartContent from "../Cart/CartContent";


/**
 * Cart Component
 *
 * @returns {JSX.Element} The rendered component.
 */
function Cart() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const cart = useCart();
    const dispatch = useCartDispatch();


    /**
     * Toggle the cart dropdown menu.
     */
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    /**
     * Rendered component when there are no items in the cart.
     *
     * @returns {JSX.Element} The rendered component.
     */
    const noItems = () => {
        return (
            <>
                <p className="text-cart">Oh, your cart is empty..</p>
                <SvgIcon size={70} name={"film"} />
                <p className="text-cart mt-3">Continue shopping and come back!</p>
            </>
        );
    };


    /**
     * Render the empty cart button.
     *
     * @returns {JSX.Element} The rendered component.
     */
    const emptyCartButton = () => {
        return (
            <Button variant="danger" onClick={() => { dispatch({ type: 'clear', dispatch:dispatch}); }}>
                Empty Cart
            </Button>
        );
    };


    /**
     * Render the checkout button.
     *
     * @returns {JSX.Element} The rendered component.
     */
    const checkoutButton = () => {
        return (
            <Link to={`/checkout`} className="btn btn-danger text-white mx-1">
                checkout
                <SvgIcon name="cart" size={16} />
            </Link>
        );
    };


    /**
     * Styling for the cart container.
     */
    const cartContainerStyle = {
        maxHeight: "300px",
        overflowY: "auto"
    };

    return (
        <>
            <div className="dropdown" onClick={toggleDropdown}>
                <div id="cartDropdownMenu"
                    className={`dropdown-menu custom-dropdown-menu justify-content-center
                     mx-auto text-center ${isDropdownOpen ? "show" : ""}`}>
                    <div style={cartContainerStyle}>
                        {cart.length === 0 && noItems()}
                        {cart.length > 0 && (
                            <Container>
                                <CartContent />
                                <h6>Total Price: {Number((cart.length * 3.99).toFixed(2))}$</h6>
                                {emptyCartButton()}
                                {checkoutButton()}
                            </Container>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
