import React from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import MenuBar from "./componnets/Menu/MenuBar";
import Home from "./componnets/Pages/Home";
import Checkout from "./componnets/Pages/Checkout";
import Search from "./componnets/Pages/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NotFound from "./componnets/Pages/NotFound";
import { CartProvider } from "./componnets/Context/CartProvider";

const App = () => {

    return (
        <>
        <CartProvider >
            <BrowserRouter>
                <ScrollToTop smooth />
                <Routes>
                    <Route path="/" element={<MenuBar />}>
                        <Route index  element={<Home />}/>
                        <Route  path="/search"  element={<Search />}/>
                        <Route  path="/checkout"  element={<Checkout />}/>
                        {/*<Route path="/otherpage" element={<OtherPage/>}/>*/}
                        {/*<Route path="/params/:id" element={<PageWithData/>}/>*/}
                    </Route>
                    <Route path={"*"} element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </CartProvider>
        </>
    );
};

export default App;