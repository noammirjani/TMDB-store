/**
 * CheckoutMessage Component
 *
 * A component that displays a checkout message and options for the user.
 * It shows a thank-you message, a brief description, and a link to go shopping if the cart is empty.
 */
import React from "react";
import {Container} from "react-bootstrap";
import {useCart} from "../Context/CartProvider";
import {Link} from "react-router-dom";


/**
 * CheckoutMessage Component
 *
 * @returns {JSX.Element} The rendered component.
 */
function CheckoutMessage() {
    const cart = useCart();
    const isCartEmpty = cart.length === 0;


    const text = "Discover the world of movies at MovieTime. We offer a wide range of movies in various genres. Whether\n" +
                  "you're a casual moviegoer or a passionate film enthusiast, we have something for everyone."

    /**
     * Render link button
     *
     * Renders a link button to navigate to the given route.
     *
     * @param {string} link - The route path to navigate to.
     * @param {string} color - The color variant of the button.
     * @param {string} text - The text content of the button.
     * @returns {JSX.Element} The rendered link button.
     */
    const linkBtn = (link, color, text) => (
        <Link to={`/${link}`} className={`btn btn-${color} px-4 gap-3`}>
            {text}
        </Link>
    );

    return (
        <Container fluid>
            <Container className="rounded-circle bg-opacity-25 bg-white ">
                <div className="bg-white bg-opacity-25 rounded-circle text-wrap pb-4 text-center py-5 my-5">
                    <div className="px-4 py-5 my-5 text-center">
                        <img className="d-block mx-auto w-50 h-25" src="/assets/logo.png" alt="logo" />
                        <h1 className="display-6 fw-bold text-body-emphasis">THANK YOU FOR CHOOSING US</h1>
                        <div className="col-lg-6 mx-auto text-wrap">
                            <p className="lead"> {text}</p>
                        </div>
                        {isCartEmpty && linkBtn('', 'outline-primary', 'Go Shopping and Come Back!')}
                    </div>
                </div>
            </Container>
        </Container>
    );
}

export default CheckoutMessage;

