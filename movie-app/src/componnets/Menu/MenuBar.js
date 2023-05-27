/**
 * MenuBar Component
 *
 * A component that represents the menu bar in the application.
 * It includes a logo, navigation links, and a cart button.
 */
import {Link, Outlet} from 'react-router-dom';
import '../../styles/MenuBar.css'
import React from "react";
import MenuButton from "./MenuButton";
import MenuCartButton from "./MenuCartButton";


/**
 * MenuBar Component
 *
 * @returns {JSX.Element} The rendered component.
 */
function MenuBar() {

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark border-bottom">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="/assets/logo.png" alt="logo" className="top-0 start-0 logo mx-3"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav justify-content-center text-center mx-auto">
                            <MenuButton optionName={"home"} />
                            <MenuButton optionName={"search"} />
                            <MenuCartButton optionName={"cart"} />
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default MenuBar;
