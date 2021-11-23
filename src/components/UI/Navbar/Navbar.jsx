import React from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";

const Navbar = () => {

    return (
        <div className="navbar">
            <MyButton>
                <Link to="/home">Home</Link>
            </MyButton>
            <MyButton>
                <Link to="/about">About</Link>
            </MyButton>
        </div>
    );
};

export default Navbar;
