import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/error" element={<Error/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
    );
};

export default AppRouter;