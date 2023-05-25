import React, {useState} from "react";
import {Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import CheckoutFormContent from "./CheckoutFormContent";
import ToastMsg from "../Utils/ToastMsg";


function CheckoutUserRegister() {

    const [showToast, setShowToast] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();

        //do fetch
        //if not error!! -> turn the toast to true
        setShowToast(true)
    }


    return (
        <>
            <Form className="form-register" onSubmit={handleSubmit}>
                <CheckoutFormContent />
                <Container className="d-flex justify-content-center mt-3">
                    <Link to={`/`} className={`btn btn-primary px-4 gap-3 mx-1`}>
                        Continue Shopping
                    </Link>
                    <button className={`btn btn-danger submit px-4 gap-3`}>
                        Pay & Buy
                    </button>
                </Container>
            </Form>
            <ToastMsg text="BOUGHT SUCCESSFULLY, ENJOY!" setMode={setShowToast} mode={showToast} />
        </>

    );
}

export default CheckoutUserRegister;
