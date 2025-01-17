import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () =>{

    const [loginBtn , setLoginBtn] =useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-purple-400 shadow-md h-28">
            <div className="logo-container">
            <Link to="/home"><img className="w-28" src={LOGO_URL} /></Link>
            </div>
            <div className="location-container flex items-center">
            <Link to="/location" style = {{ textDecoration: "none" , color: "inherit"}}><img className="w-10 rounded-lg" src="https://img.freepik.com/free-vector/location_53876-25530.jpg?semt=ais_hybrid" height="40px"></img></Link>
            <input type="text" className="px-5 mx-5 py-1 rounded-lg" placeholder="Your location"></input>
            </div>
            <div className="nav-items flex items-center">
                <div className="m-10 mr-14 font-medium">
                
                 {onlineStatus===true ?  "You are Online 🟢":"You are Offline 🔴" }
                
                </div>
            <ul className="flex p-4 m-10 items-center">
                <li className="px-5 font-medium">
                <Link style={{ textDecoration: "none" , color: "inherit" }} to="/home">Home</Link>
                </li>
                <li className="px-5 font-medium">
                <Link style={{ textDecoration: "none" , color: "inherit" }} to="/grocery">Grocery</Link>
                </li>
                <li className="px-5 font-medium">
                    <Link style={{ textDecoration: "none" , color: "inherit" }} to="/about">About Us</Link>
                </li>
                <li className="px-5 font-medium">
                <Link style={{ textDecoration: "none" , color: "inherit" }} to="/contacts">Contact Us</Link>
                </li>
                <li className="px-5 font-medium">
                <Link style={{ textDecoration: "none" , color: "inherit" }} to="/cart">Cart</Link>
                </li>
            </ul>
           
            </div>
            <div className="flex items-center">
                
            <button className="mr-5 rounded-lg px-10 py-2 bg-red-400 font-medium" onClick={()=>{
             loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login");

            }}>

            {loginBtn}
            </button>
            </div>
        </div>
    );
};

export default Header;