import React from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import MenuBar from "./componnets/MenuBar";
import Home from "./componnets/Pages/Home";
import Search from "./componnets/Pages/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop smooth />
                <Routes>
                    <Route path="/" element={<MenuBar />}>
                        <Route index  element={<Home />}/>
                        <Route  path="/search"  element={<Search />}/>
                        {/*<Route path="/otherpage" element={<OtherPage/>}/>*/}
                        {/*<Route path="/params/:id" element={<PageWithData/>}/>*/}
                        {/*<Route path={"*"} element={<NotFound/>}/>*/}

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
