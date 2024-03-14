import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Loader from './Loader';
import { Link } from 'react-router-dom';




const Body = () => {
  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText,setSearchText] = useState("");

     useEffect( () => {
         getRestaurants();
     }, [])
     
     async function getRestaurants() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.6093912&lng=75.1397935&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // we get the Swiggy API data in json format
      console.log(json); 
      setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(listOfRestaurants.length === 0)
    return(
       <Loader />
  );
   console.log("body rendered");
  //  when state variable changes whole component get rendered bcz  reconcilation process get triggered
  return (
    <div className="body">
      <div className="flex justify-center gap-9  m-8">
        <input type="text"
        className=' border border-solid border-black   p-2'
          value={searchText}
          onChange={(e) => { 
            setSearchText(e.target.value);
          }}
          placeholder="Search Food or Restaurant" />
       
        <button className='py-2 px-3 font-bold bg-gray-200 rounded-lg ' 
              onClick={() => {
              console.log({searchText});
              const filteredData = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log({filteredData});
              setFilteredRestaurant(filteredData);
               
        }}>Search</button>
        <div className="filter">
        <button
          className='bg-gray-200 py-2 px-3 font-bold rounded-lg' 
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      </div>
     
      <div className="flex flex-wrap justify-center">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                <RestaurantCard  resData={restaurant} />
          </Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;
