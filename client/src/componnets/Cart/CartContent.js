/**
 * CartContent Component
 *
 * A component that displays the content of a shopping cart.
 * It renders a list of cart products using the CartProduct component.
 */

import React from "react";
import { Container, Row } from "react-bootstrap";
import CartProduct from "../Cart/CartProduct";
import { useCart } from "../Context/CartProvider";

/**
 * CartContent Component
 *
 * @returns {JSX.Element} The rendered component.
 */
function CartContent() {
    const cart = useCart();

    /**
     * Render cart items
     *
     * Renders a list of cart products.
     *
     * @returns {JSX.Element[]} An array of JSX elements representing the cart products.
     */
    const cartItems = () => {
        return cart.map((product, index) => (
            <Row key={index}>
                <CartProduct movie={product} />
            </Row>
        ));
    };

    return (
        <>
            <Container className={`justify-content-center mx-auto text-center`}>
                {cartItems()}
            </Container>
        </>
    );
}

export default CartContent;
