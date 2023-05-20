import React, { useState } from 'react';
import SvgIcon from "../utils/SvgIcon";

function Cart() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [products, setProducts] = useState([]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            {products.length === 0 && (
                <div className="dropdown" onClick={toggleDropdown}>
                    <div
                        id="cartDropdownMenu"
                        className={`dropdown-menu custom-dropdown-menu justify-content-center mx-auto text-center ${isDropdownOpen ? 'show' : ''}`}
                    >
                        <p className="text-cart">Oh, your cart is empty..</p>
                        <SvgIcon size={70} name={"film"} />
                        <p className="text-cart mt-3">Continue shopping and come back!</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Cart;
