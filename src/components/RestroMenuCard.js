import React from 'react'
import { CDN_URL } from '../utils/constants';

const RestroMenuCard = (props) => {
    const { resData} = props;
  return (
    <div className="menu-card">
     <div>
     <img className="menu-img" alt="res-logo" src={ CDN_URL
                     + resData.card.info.imageId
                    }></img>
                    <h3>{resData.card.info.itemAttribute.portionSize} </h3>
     </div>
                    <div>
                    <h2><span>
                    {resData.card.info.itemAttribute.vegClassifier ==="VEG" ?
                    (<img src="https://www.shutterstock.com/image-vector/vegetarian-sign-veg-logo-symbol-260nw-2443020419.jpg" className="veg-nonveg-logo"></img>)
                    :

                  (<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png" className="veg-nonveg-logo"></img>)
                        
                    }  
                     </span>
                     {resData.card.info.name}</h2>
                    
                    <p>{resData.card.info.description}</p>
                    </div>
        
        
      
    </div>
  )
}

export default RestroMenuCard
