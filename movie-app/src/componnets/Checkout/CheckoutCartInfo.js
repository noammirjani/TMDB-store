import React from "react";
import { Container } from "react-bootstrap";
import { useCart } from "../Context/CartProvider";

function CheckoutCartInfo({payment}) {
    const cart = useCart();

    // const calcPrice = () => {
    //
    //     //get from server the prices
    //     // do not consider it as 3.99 gere
    //     return Number((cart.length * 3.99).toFixed(2));
    // }

    return (
        <Container className="bg-white bg-opacity-25 rounded-pill text-center">
            <h6 className="fs-4"> Total Price: {payment}$</h6>
            <h6 className="fs-4">Number of Movies: {cart.length}</h6>
        </Container>
    );
}

export default CheckoutCartInfo;
