import {Container, Row} from "react-bootstrap";
import React from "react";
import CartProduct from "../Cart/CartProduct";
import {useCart} from "../Context/CartProvider";


function CartContent() {
    const cart = useCart();

    const cartItems = () => {
        return cart.map((product, index) => (
            <Row key={index}>
                <CartProduct movie={product} index={index}/>
            </Row>
        ))
    }

    return (
        <>
            <Container className={`justify-content-center mx-auto text-center`} >
                {cartItems()}
            </Container>
        </>
    );
}

export default CartContent;
