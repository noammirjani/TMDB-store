import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import CheckoutFormContent from "./CheckoutFormContent";
import ToastMsg from "../Utils/ToastMsg";
import { fetchRequest } from "../Utils/ServerFetchRequest";
import {useCartDispatch} from "../Context/CartProvider";

function CheckoutUserRegister({ payment }) {
    const dispatch = useCartDispatch();
    const [showToast, setShowToast] = useState(false);
    const [formData, setFormData] = useState({firstName: "", lastName: "", email: "",});

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData.firstName, formData.lastName, formData.email, payment);
        let data = {
            firstName: formData.firstName.toLowerCase().trim(),
            lastName: formData.lastName.toLowerCase().trim(),
            email: formData.email.toLowerCase().trim(),
            payment: payment,
        };
        await fetchRequest("POST", { url: "/api/purchase", data: data });
        setShowToast(true);
        setTimeout(() => {
            dispatch({ type: 'update', dispatch:dispatch});
        }, 2500);
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
            <ToastMsg
                text="BOUGHT SUCCESSFULLY, ENJOY!"
                setMode={setShowToast}
                mode={showToast}
            />
        </>
    );
}

export default CheckoutUserRegister;
