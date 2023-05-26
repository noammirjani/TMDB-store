import React, {useState} from "react";
import {Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import CheckoutFormContent from "./CheckoutFormContent";
import ToastMsg from "../Utils/ToastMsg";
import axios from "axios";
import {fetchRequest} from "../Utils/ServerFetchRequest"


function CheckoutUserRegister({payment}) {

    const [showToast, setShowToast] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName,  setLastName] = useState("");
    const [email,     setEmail] = useState("");
    //payment
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(firstName, lastName, email, payment);
        let data = {
            firstName: firstName.toLowerCase(),
            lastName: lastName.toLowerCase(),
            email: email.toLowerCase(),
            payment: payment,
        }
        await fetchRequest('POST',  {url: "/api/purchase", data:data})
        setShowToast(true)
    }


    return (
        <>
            <Form className="form-register" onSubmit={handleSubmit}>
                <CheckoutFormContent firstName={firstName}
                                     setFirstName={setFirstName}
                                     lastName={lastName}
                                     setLastName={setLastName}
                                     email={email}
                                     setEmail={setEmail}
                />
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
