import React, { useState } from 'react';
import { useCart, useCartDispatch } from '../Context/CartProvider';
import { Container, Row, Button } from "react-bootstrap";
import SvgIcon from "../utils/SvgIcon";
import CartProduct from "../moviesDisplay/CartProduct"


function Cart() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const cart = useCart();
    const dispatch = useCartDispatch();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <div className="dropdown" onClick={toggleDropdown}>
                <div
                    id="cartDropdownMenu"
                    className={`dropdown-menu custom-dropdown-menu justify-content-center mx-auto text-center`}
                >
                    {cart.length === 0 && (
                        <>
                            <p className="text-cart">Oh, your cart is empty..</p>
                            <SvgIcon size={70} name={"film"} />
                            <p className="text-cart mt-3">Continue shopping and come back!</p>
                        </>
                    )}

                    {cart.length > 0 && (
                        <Container>
                            {cart.map((product, index) => (
                                <Row key={index}>
                                    {console.log("Current ", product, index)}
                                    <CartProduct movie={product} index={index}/>
                                </Row>
                            ))}
                            <Button variant="danger" onClick={() => {
                                dispatch({
                                    type: 'delete',
                                });
                            }}>
                                Empty Cart
                            </Button>
                        </Container>
                    )}
                </div>
            </div>
        </>
    );
}

export default Cart;
