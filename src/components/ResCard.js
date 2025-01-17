import React from "react";

import { CDN_URL } from "../utils/constants";

const ResCard =(props) =>{
    const {resData} =props;
    const {name,cuisines,costForTwo,avgRating} = resData?.info;
    const {deliveryTime} = resData?.info?.sla; 
    // console.log(props);
    return(
        <div className="res-card w-[300px] mx-6 my-5 py-4 bg-gray-200 rounded-lg shadow-xl hover:bg-gray-300">
            <img className="res-logo w-[275px] h-[200px] mx-3 mb-5 rounded-lg" alt="res-logo" src={ CDN_URL
             + resData.info.cloudinaryImageId
            }
            />

            <h3 className="mx-4 font-bold text-lg p-2">{name} </h3>
            <h6 className="mx-4 p-2">{cuisines.join(" , ")}</h6>
            <h5 className="mx-4 p-2 flex">{avgRating} <img className="w-6 ml-2" src="https://t3.ftcdn.net/jpg/08/92/03/00/240_F_892030091_X5tmpIHqGxaFajUAiFBvmrJinyAjrg1N.jpg"></img></h5>
            <h5 className="mx-4 p-2">{deliveryTime} minutes</h5>
        </div>
    )
}

export default ResCard;