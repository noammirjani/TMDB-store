import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
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

    const handleSubmit = (event) => {
        event.defaultPrevented()
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col xs={12} md={isCartEmpty ? 12 : 6} className="mb-3">
                    <Form className="form-register" onSubmit={handleSubmit}>
                        <CheckoutMessage isCartEmpty={isCartEmpty} />
                        {!isCartEmpty && renderCheckoutData()}
                        {!isCartEmpty && <UserRegister />}
                    </Form>
                </Col>
                {!isCartEmpty && (
                    <Col xs={12} md={6} className="mx-auto">
                        <Container className="mx-5">
                            <CartContent />
                        </Container>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default Checkout;
