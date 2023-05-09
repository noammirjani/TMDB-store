import React from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import MenuBar from "./componnets/MenuBar";
import Home from "./componnets/Home";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop smooth />
                <Routes>
                    <Route path="/" element={<MenuBar/>}>
                        <Route index element={<Home/>}/>
                        {/*<Route path="/otherpage" element={<OtherPage/>}/>*/}
                        {/*<Route path="/params/:id" element={<PageWithData/>}/>*/}
                        {/*<Route path={"*"} element={<NotFound/>}/>*/}
                        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
