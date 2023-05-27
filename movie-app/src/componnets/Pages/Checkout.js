/**
 * Checkout Component
 *
 * A component that displays the checkout page with cart information and user registration form.
 */
import React, {useEffect, useState} from "react";
import { Col, Row, Container } from "react-bootstrap";
import CheckoutMessage from "../Checkout/CheckoutMessage";
import { useCart } from "../Context/CartProvider";
import CartContent from "../Cart/CartContent";
import CheckoutCartInfo from "../Checkout/CheckoutCartInfo";
import CheckoutUserRegister from "../Checkout/CheckoutUserRegister";
import '../../styles/Checkout.css';


/**
 * Checkout Component
 *
 * @returns {JSX.Element} The rendered component.
 */
function Checkout() {
    const cart = useCart();
    const renderCartData = cart.length !== 0;
    const mdScreenColSize = cart.length === 0 ? 12 : 6;
    const [payment, setPayment] = useState(calcPrice());

    // hook for cart change, update payment
    useEffect(() => {
        setPayment(calcPrice())
    }, [cart]);


    /**
     * Calculate the total payment based on the cart items.
     */
    function calcPrice() {
        return Number((cart.length * 3.99).toFixed(2));
    }

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
                            <CheckoutCartInfo payment={payment}/>
                            <CheckoutUserRegister payment={payment}/>
                        </Col>
                        <Col xs={12} md={mdScreenColSize} className="d-none d-md-block"></Col>
                    </Row>
                )}
            </Row>
        </Container>
    );
}

export default Checkout;