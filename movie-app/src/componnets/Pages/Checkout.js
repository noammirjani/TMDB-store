import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import CheckoutMessage from "../Checkout/CheckoutMessage";
import { useCart } from "../Context/CartProvider";
import CartContent from "../Cart/CartContent";
import CheckoutCartInfo from "../Checkout/CheckoutCartInfo";
import CheckoutUserRegister from "../Checkout/CheckoutUserRegister";
import '../../styles/Checkout.css';

function Checkout() {
    const cart = useCart();
    const renderCartData = cart.length !== 0;
    const mdScreenColSize = cart.length === 0 ? 12 : 6;

    return (
        <Container fluid>
            <Row>
                <Row className="row-cols-2 mb-2">
                    <Col xs={12} md={mdScreenColSize}>
                        <Container>
                            <CheckoutMessage />
                        </Container>
                    </Col>
                    <Col xs={12} md={mdScreenColSize} className="d-flex justify-content-center align-items-center">
                        <div className="d-flex justify-content-center cart-container">
                            <Container>
                                <CartContent />
                            </Container>
                        </div>
                    </Col>
                </Row>
                {renderCartData && (
                    <Row className="row-cols-2">
                        <Col xs={12} md={mdScreenColSize}>
                            <CheckoutCartInfo />
                            <CheckoutUserRegister />
                        </Col>
                        <Col xs={12} md={mdScreenColSize} className="d-none d-md-block"></Col>
                    </Row>
                )}
            </Row>
        </Container>
    );
}

export default Checkout;