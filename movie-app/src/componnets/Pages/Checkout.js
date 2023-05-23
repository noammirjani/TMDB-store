import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useCart } from "../Context/CartProvider";
import CartContent from "../Cart/CartContent";
import CheckoutMessage from "../Cart/CheckoutMessage";
import UserRegister from "../Cart/UserRegister";

function Checkout() {
    const cart = useCart();
    const isCartEmpty = cart.length === 0;

    const renderCheckoutData = () => (
        <Container className="bg-white bg-opacity-25 rounded-pill text-center ">
            <h3>Price: {Number((cart.length * 3.99).toFixed(2))}$</h3>
            <h3>Number of Elements: {cart.length}</h3>
        </Container>
    );

    return (
        <Container>
            <Row className="mt-5">
                <Col xs={12} md={isCartEmpty ? 12 : 6} className="mb-3">
                    <CheckoutMessage isCartEmpty={isCartEmpty} />
                    {!isCartEmpty && renderCheckoutData()}
                    {!isCartEmpty && <UserRegister />}
                </Col>
                {!isCartEmpty && (
                    <Col xs={12} md={6}>
                        <CartContent />
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default Checkout;
