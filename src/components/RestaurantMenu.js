import React from 'react'
import { useEffect,useState } from "react";
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API_URL } from '../utils/constants';

const RestaurantMenu = () => {

    const[resInfo , setResInfo] = useState(null);
    const[resMenu , setResMenu] = useState(null);
  const params = useParams();
    console.log(params);

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

if(resInfo===null){
    return (<Shimmer/>)
    } 




  return (
    <div className='menu'>
        <h1>{resInfo.name}</h1>
        <h3>{resInfo.cuisines.join(" , ")}</h3>
        <h3>{resInfo.costForTwoMessage}</h3>
        <h3>{resInfo.avgRating}</h3>
        <h2>Menu</h2>
        <ul>
           {resMenu.map((item) => <li key="index">{item.card.info.name} - {item.card.info.defaultPrice/100} Rupees</li> )

           }                    
        </ul>
      
    </div>
  )
}

export default RestaurantMenu
