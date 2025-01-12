import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () =>{

    const [loginBtn , setLoginBtn] =useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
            <Link to="/home"><img className="logo" src={LOGO_URL} /></Link>
            </div>
            <div className="nav-items">
            <ul>
                <li>
                <Link style={{ textDecoration: "none" , color: "inherit" }} to="/home">Home</Link>
                </li>
                <li>
                    <Link style={{ textDecoration: "none" , color: "inherit" }} to="/about">About Us</Link>
                </li>
                <li>
                <Link style={{ textDecoration: "none" , color: "inherit" }} to="/contacts">Contact Us</Link>
                </li>
                <li>
                <Link style={{ textDecoration: "none" , color: "inherit" }} to="/cart">Cart</Link>
                </li>
            </ul>
           
            </div>
            <button className="login-btn" onClick={()=>{
             loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login");

            }}>

            {loginBtn}
            </button>
        </div>
    );
};

export default Header;