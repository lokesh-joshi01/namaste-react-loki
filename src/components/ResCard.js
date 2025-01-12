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
            <h5>{avgRating} <img className="star-logo" src="https://t3.ftcdn.net/jpg/08/92/03/00/240_F_892030091_X5tmpIHqGxaFajUAiFBvmrJinyAjrg1N.jpg"></img></h5>
            <h5>{deliveryTime} minutes</h5>
        </div>
    )
}

export default ResCard;