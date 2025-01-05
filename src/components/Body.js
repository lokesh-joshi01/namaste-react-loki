import React from "react";
import ResCard from "./ResCard.js";
import resData from "../utils/mockData.js";

const Body = ()=>{
    return (
        <div className="body">
            <div className="search">
                Search Bar
                <input className="search-input" type="text" placeholder="search here"></input>
            </div>
            <div className="res-container">
                {
                resData.map((restro) => (<ResCard key={restro.info.id} resData={restro}/>))

                }
                
            </div>
        </div>
    );
};

export default Body;
