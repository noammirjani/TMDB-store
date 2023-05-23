import React from "react";
import '../../styles/UserRegister.css'

function UserRegister() {
    return (
        <form className="form">
            <div className="flex">
                <label>
                    <input required placeholder="" type="text" className="input" />
                    <span>Firstname</span>
                </label>

                <label>
                    <input required placeholder="" type="text" className="input" />
                    <span>Lastname</span>
                </label>
            </div>

            <label>
                <input required placeholder="" type="email" className="input" />
                <span>Email</span>
            </label>
        </form>
    );
}

export default UserRegister;
