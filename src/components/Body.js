import React, { useState, useEffect } from "react";
import ResCard from "./ResCard.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import EmojiPicker from 'emoji-picker-react';
import useOnlineStatus from "../utils/useOnlineStatus.js";


const Body = ()=>{

    const onlineStatus = useOnlineStatus();


    const [listOfRestro,setListOfRestro] = useState([]);

    const[filteredListOfRestro, setFilteredListOfRestro] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() =>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.2182644&lng=79.5129767&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json = await data.json();
       console.log("json data" + json);
       setListOfRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setFilteredListOfRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    if(onlineStatus===false){
        
        return(
            <h1> 🛑You are Offline, check your Internet Connection!!!! </h1>
        )
    }

    return listOfRestro.length===0?<Shimmer />: (
        <div className="m-5 p-5 ">
            <div className="flex m-2 p-2 flex items-center">
            <div className="filter-topRated">
                <button className="filter-btn mx-10 px-5 py-3 bg-yellow-400 rounded-lg " onClick={() => {
                    const filteredListTopRated = listOfRestro.filter(
                        (res) => res.info.avgRating > 4.3
                    );
                    setFilteredListOfRestro(filteredListTopRated);
                }
            }>
                Top Rated Restaurents
                </button>
            </div>
            <div className="filter-budget">
                <button className="filter-btn-budget mx-10  px-5 py-3 bg-blue-400 rounded-lg " onClick={() => {
                    const filteredListBudget = listOfRestro.filter(
                        (res) => res.info.sla.deliveryTime < 25
                    );
                    setFilteredListOfRestro(filteredListBudget);
                }
            }>
                Fast Delivery Restaurents
                </button>
            </div>
            <div className="filter-clear">
                <button className="filter-clear-btn mx-10  px-5 py-3 bg-gray-400 rounded-lg " onClick={() => {
                    setFilteredListOfRestro(listOfRestro);
                }
            }>
                Clear Filters
                </button>
            </div>
            </div>
            <div className="search m-1 p-4 bg-green-200 font-medium rounded-lg">
                Search Bar
                <input className="m-4 p-2 border-black rounded-lg" type="text" placeholder="search here" value={searchText}
                onChange={(e)=>{
                    console.log(searchText);
                setSearchText(e.target.value);
               
                }}></input>
                <button className="search-btn m-4 p-2 rounded-lg bg-green-600" onClick={()=>{
                    //Filter the restaurent and update the UI
                    //search text
                    console.log(searchText);
                    const filteredRestro = listOfRestro.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText));

                    setFilteredListOfRestro(filteredRestro);
                
                }}>Search</button>
            </div>
            <div className="res-container flex flex-wrap">
                {
                filteredListOfRestro.map((restro) => (
                <Link style={{textDecoration: "none" , color: "inherit"}} key={restro.info.id} to={"/restaurants/"+restro.info.id}
                >
                    <ResCard  resData={restro}/>
                    </Link>))

                }
                
            </div>
        </div>
    );
};

export default Body;
