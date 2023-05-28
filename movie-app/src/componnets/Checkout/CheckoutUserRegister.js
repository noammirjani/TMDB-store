/**
 * CheckoutUserRegister Component
 *
 * A component that handles the user registration and purchase in the checkout section.
 * It includes a form for collecting user information and options to continue shopping or complete the purchase.
 */
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import CheckoutFormContent from "./CheckoutFormContent";
import ToastMsg from "../Utils/ToastMsg";
import { fetchRequest } from "../Utils/ServerFetchRequest";
import {useCartDispatch} from "../Context/CartProvider";

/**
 * CheckoutUserRegister Component
 *
 * @param {Object} props - The component props.
 * @param {number} props.payment - The total payment amount.
 * @returns {JSX.Element} The rendered component.
 */
function CheckoutUserRegister({ payment }) {
    const {getCart} = useCartDispatch();
    const [showToast, setShowToast] = useState(false);
    const [formData, setFormData] = useState({firstName: "", lastName: "", email: "",});
    const [isError, setIsError] = useState(false)

    const msgTextSuccess = "BOUGHT SUCCESSFULLY, ENJOY!"
    const errMsg = "SERVER ERROR, BUY FAILED - TRY AGAIN LATER"

    /**
     * Handle form submission
     *
     * Handles the form submission and sends the user information and payment details to the server.
     * Updates the cart and shows a success toast message.
     *
     * @param {Event} event - The form submit event.
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData.firstName, formData.lastName, formData.email, payment);
        let data = {
            firstName: formData.firstName.toLowerCase().trim(),
            lastName: formData.lastName.toLowerCase().trim(),
            email: formData.email.toLowerCase().trim(),
            payment: payment,
        };
        fetchRequest("POST", { url: "/api/purchase", payload: data })
            .then(() => {
                setIsError(false);
                setTimeout(() => {getCart();}, 4000);
            })
            .catch(() => setIsError(true))
            .finally(() => {setShowToast(true);});
    };

    return (
        <>
            <Form className="form-register" onSubmit={handleSubmit}>
                <CheckoutFormContent formData={formData} setFormData={setFormData} />
                <Container className="d-flex justify-content-center mt-3">
                    <Link to={`/`} className={`btn btn-primary px-4 gap-3 mx-1`}>
                        Continue Shopping
                    </Link>
                    <button className={`btn btn-danger submit px-4 gap-3`}>
                        Pay & Buy
                    </button>
                </Container>
            </Form>
            <ToastMsg text={isError ? errMsg : msgTextSuccess}
                      setMode={setShowToast} mode={showToast}
                      error={isError}
            />
        </>
    );
}

export default CheckoutUserRegister;
