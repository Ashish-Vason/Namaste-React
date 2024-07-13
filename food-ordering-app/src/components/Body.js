import { useEffect, useState } from "react";
import RestaurantsData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [resInputValue, setResInputValue] = useState("");
    const [fiteredRestaurant, setFiteredRestaurant] = useState([]);
    useEffect(() => {
        fetchData()
    },[])
    const fetchData = async() => {
        const data = await fetch('https://www.swiggy.com/api/seo/getListing?lat=30.73390&lng=76.78890');
        const json = await data.json();

        console.log(json.data)

        setRestaurantData(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants)
        setFiteredRestaurant(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants)
    }

    const handleSearch = () => {
      const filteredData =   restaurantData.filter((resData) => (
        resData.info.name.toLowerCase().includes(resInputValue.toLowerCase())
        ))
        setFiteredRestaurant(filteredData);
    }


    if(restaurantData.length === 0) {
        return (
            <ShimmerUI />
        )
    }
    return (
        <div className='body-container'>
            <div className='search'>
                <input type="search" value={resInputValue} placeholder="Search here" className="search-input" onChange={(e) => (
                    setResInputValue(e.target.value)                 
                )} />
                <button className="search-button" onClick={handleSearch}>Search</button>
                <button className="filter-btn" onClick={() => {
               const filteredData =  restaurantData.filter((restaurant => (
                    restaurant.info.avgRating > 4.3
                )))
                console.log(filteredData)
                setFiteredRestaurant(filteredData)
            }}>Top Rated Restaurants</button>
            </div>
            
            <div className='res-container'>
                {fiteredRestaurant.map((restaurant) => (
                    <RestaurantCard key = {restaurant.info.id} resData = {restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;