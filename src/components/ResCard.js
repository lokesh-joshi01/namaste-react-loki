import React from "react";

import { CDN_URL } from "../utils/constants";

const ResCard =(props) =>{
    const {resData} =props;
    const {name,cuisines,costForTwo,avgRating} = resData?.info;
    const {deliveryTime} = resData?.info?.sla; 
    // console.log(props);
    return(
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={ CDN_URL
             + resData.info.cloudinaryImageId
            }
            />

            <h3>{name} </h3>
            <h6>{cuisines.join(" , ")}</h6>
            <h5>{avgRating} stars</h5>
            <h5>{deliveryTime} minutes</h5>
        </div>
    )
}

export default ResCard;