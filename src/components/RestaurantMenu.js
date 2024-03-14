 import { useState,useEffect } from "react";
 import Loader from "./Loader"
 import { useParams } from "react-router-dom";
 import { MENU_API } from "../utils/constants";



     

  const RestaurantMenu = () => {
      const[resInfo,setResInfo] = useState(null);
  

      const { resId } = useParams();
      console.log(resId);
            
      useEffect(() => {
        fetchData();
      }, []);

      
      
      
        const fetchData = async() => {       
             const data = await fetch( MENU_API + resId);
             const json = await data.json();
              console.log(json);
              setResInfo(json.data);
          };

         if (resInfo === null) return <Loader /> ;
          
         const {
            name,
            cuisines,
            costForTwoMessage,
                } = resInfo?.cards[0]?.card?.card?.info;

                const { itemCards } =
                resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
            
              console.log(itemCards);     
         
          return(
           <div className="ResMenu">      
            {/* <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
            <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(' , ')} -: {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage} </p> */}
            
            <h1>{name}</h1>
            <p>{cuisines.join(' , ')} -: {costForTwoMessage}</p>
            
            <h3>Menu</h3>
            <ul>
              {itemCards.map((item) => 
              <li key={item.card.info.id}>
                 {item.card.info.name} - {"Rs."}
                 {item.card.info.price/100 || item.card.info.defaultPrice/100}
                 </li>)}
    
            </ul>
              </div>
              );     
            
   }

export default RestaurantMenu;