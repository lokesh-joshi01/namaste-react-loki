import React from 'react'
import { useEffect,useState } from "react";
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API_URL } from '../utils/constants';
import RestroMenuCard from './restroMenuCard';
import { CDN_URL } from "../utils/constants"
// import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

    const[resInfo , setResInfo] = useState(null);
    const[resMenu , setResMenu] = useState(null);
  const params = useParams();
    console.log(params);

    // const json = useRestaurantMenu(params.resID);

    useEffect(()=>{
       fetchMenu();
    },[]);

const fetchMenu = async () =>{
   const data =  await fetch(MENU_API_URL+params.resID);
   const json = await data.json();

  

   console.log(json);

   setResInfo(json?.data?.cards[2]?.card?.card?.info);
   setResMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
}
console.log("resInfo ");
console.log(resInfo);
console.log("resMenu ");
console.log(resMenu);
if(resInfo===null){
    return (<Shimmer/>)
    } 




  return (
    <div className='menu'>
        <div className="res-title">
        <div>
        <h1>{resInfo.name}</h1>
        <h3>{resInfo.cuisines.join(" , ")}</h3>
        <h3>{resInfo.areaName}</h3>
        <h3>{resInfo.avgRating}</h3>
        </div>
        <div>
         <img className="res-logo-menu" alt="res-logo" src={ CDN_URL
                      + resInfo.cloudinaryImageId
                     } ></img>
        </div>
        </div>
        
         <div className='menu-container'>
         <h2>Menu</h2>
         {resMenu.map((item) => <RestroMenuCard resData={item} key="index" /> )

         } 

         </div>
                               
        
      
    </div>
  )
}

export default RestaurantMenu
