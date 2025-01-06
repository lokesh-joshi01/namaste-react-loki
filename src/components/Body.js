import React, { useState, useEffect } from "react";
import ResCard from "./ResCard.js";
import Shimmer from "./Shimmer.js";


const Body = ()=>{


    const [listOfRestro,setListOfRestro] = useState([]);

    const[filteredListOfRestro, setFilteredListOfRestro] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() =>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.2182644&lng=79.5129767&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json = await data.json();

       console.log(json);
       setListOfRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setFilteredListOfRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfRestro.length===0?<Shimmer />: (
        <div className="body">
            <div className="filter-btns">
            <div className="filter-topRated">
                <button className="filter-btn" onClick={() => {
                    
                    const filteredListTopRated = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setListOfRestro(filteredListTopRated);
                    console.log(listOfRestro);
                }
            }>
                Top Rated Restaurents
                </button>
            </div>
            <div className="filter-budget">
                <button className="filter-btn-budget" onClick={() => {
                    const filteredListBudget = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.filter(
                        (res) => res.info.sla.deliveryTime < 25
                    );
                    setListOfRestro(filteredListBudget);
                    console.log(listOfRestro);
                }
            }>
                Fast Delivery Restaurents
                </button>
            </div>
            </div>
            <div className="search">
                Search Bar
                <input className="search-input" type="text" placeholder="search here" value={searchText}
                onChange={(e)=>{
                    console.log(searchText);
                setSearchText(e.target.value);
               
                }}></input>
                <button className="search-btn" onClick={()=>{
                    //Filter the restaurent and update the UI
                    //search text
                    console.log(searchText);
                    const filteredRestro = listOfRestro.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText));

                    setFilteredListOfRestro(filteredRestro);
                
                }}>Search</button>
            </div>
            <div className="res-container">
                {
                filteredListOfRestro.map((restro) => (<ResCard key={restro.info.id} resData={restro}/>))

                }
                
            </div>
        </div>
    );
};

export default Body;
