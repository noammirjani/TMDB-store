import React, {useState} from "react";
import {Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import CheckoutFormContent from "./CheckoutFormContent";
import ToastMsg from "../Utils/ToastMsg";
import axios from "axios";


function CheckoutUserRegister({payment}) {

    const [showToast, setShowToast] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName,  setLastName] = useState("");
    const [email,     setEmail] = useState("");
    //payment
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(firstName, lastName, email, payment);
        let data = {
            firstName: firstName.toLowerCase(),
            lastName: lastName.toLowerCase(),
            email: email.toLowerCase(),
            payment: payment,
        }
        fetchPostPurchase(data);
        //do fetch
        //if not error!! -> turn the toast to true
        setShowToast(true)
    }

    async function  fetchPostPurchase (data)  {
        const headers = {
            'Content-Type': 'application/json',
        };
        try {
            const response = await axios.post("/api/purchase", data, { headers });
            console.log( response.data);
        } catch (error) {
            console.log(error.message, error.code);
        }
    };

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
