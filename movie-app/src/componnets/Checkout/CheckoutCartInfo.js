/**
 * CheckoutCartInfo Component
 *
 * A component that displays the cart information in the checkout section.
 * It shows the total price and the number of movies in the cart.
 */

import React from "react";
import { Container } from "react-bootstrap";
import { useCart } from "../Context/CartProvider";

/**
 * CheckoutCartInfo Component
 *
 * @param {Object} props - The component props.
 * @param {number} props.payment - The total payment amount.
 * @returns {JSX.Element} The rendered component.
 */
function CheckoutCartInfo({ payment }) {
    const cart = useCart();

    return (
        <Container className="bg-white bg-opacity-25 rounded-pill text-center">
            <h6 className="fs-4">Total Price: {payment}$</h6>
            <h6 className="fs-4">Number of Movies: {cart.length}</h6>
        </Container>
    );
}

export default CheckoutCartInfo;
