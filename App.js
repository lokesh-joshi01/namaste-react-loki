import React from "react";
import ReactDOM from "react-dom/client";

const Header =() =>{
    return(
        <div className="header">
            <div className="logo-container">
               <img className="logo" src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg" />
            </div>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
    )
}

const ResCard =() =>{
    return(
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/972a37599772cdc7df93a0855ad87591"/>
            <h3>Maggi Point </h3>
            <h6>North Indian, Chinese</h6>
            <h5>4.5 stars</h5>
            <h5>500 for two</h5>
        </div>
    )
}

const Body = ()=>{
    return(
        <div className="body">
            <div className="search">
                Search Bar
                <input className="search-input" type="text" placeholder="search here"></input>
            </div>
            <div className="res-container">
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className="app">
        <Header/>
        <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
