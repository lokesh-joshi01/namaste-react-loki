import { useEffect,useState } from "react";
import {MENU_API_URL} from "./constants"

const useRestaurantMenu = (resId) =>{
    console.log("resId in hook" + resId);
      const[jsonData, setJsonData] = useState(null);
      console.log(MENU_API_URL+resId);

      useEffect(()=>{
            fetchMenu();
         },[]);
     
     const fetchMenu = async () =>{
        const data =  await fetch(MENU_API_URL+resId);
        const json = await data.json();

        setJsonData(json);
        console.log(jsonData);
     }
     
     return jsonData;
    }

export default useRestaurantMenu;