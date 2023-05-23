import React from "react";
import {Link} from "react-router-dom";


function CheckoutMessage({isCartEmpty}) {

    const linkBtn = (link, color, text) => (
        <Link to={`/${link}`} className={`btn btn-outline-${color} btn-lg px-4 gap-3`}>
            {text}
        </Link>
    );

    const renderCardNotEmptyBtns = () => (
        <div className="d-flex justify-content-center">
            {linkBtn('','primary','Continue Shopping') }
            {linkBtn('pay','danger disabled',' Pay & Buy') }
        </div>
    );

    return (
        <div className="bg-white bg-opacity-25 rounded-circle text-wrap">
            <div className="px-4 py-5 my-5 text-center">
                <img className="d-block mx-auto mb-4 w-50 h-25" src="/assets/logo.png" alt="logo" />
                <h1 className="display-6 fw-bold text-body-emphasis">THANK YOU FOR CHOOSING US</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead">
                        Discover the world of movies at MovieTime. We offer a wide range of movies in various genres. Whether
                        you're a casual moviegoer or a passionate film enthusiast, we have something for everyone.
                    </p>
                    {isCartEmpty ? linkBtn('','primary','Go Shopping and Come Back!') : renderCardNotEmptyBtns()}
                </div>
            </div>
        </div>
    );
}

export default CheckoutMessage;
