import { useEffect, useState } from "react";
import RestaurantsData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    useEffect(() => {
        fetchData()
    },[])
    const fetchData = async() => {
        const data = await fetch('https://www.swiggy.com/api/seo/getListing?lat=30.73390&lng=76.78890');
        const json = await data.json();

        console.log(json.data)

        setRestaurantData(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants)
    }


    if(restaurantData.length === 0) {
        return (
            <ShimmerUI />
        )
    }
    return (
        <div className='body-container'>
            <div className='search'>
                Search
            </div>
            <button className="filter-btn" onClick={() => {
               const filteredData =  restaurantData.filter((restaurant => (
                    restaurant.info.avgRating > 4.3
                )))
                console.log(filteredData)
                setRestaurantData(filteredData)
            }}>Top Rated Restaurants</button>
            <div className='res-container'>
                {restaurantData.map((restaurant) => (
                    <RestaurantCard key = {restaurant.info.id} resData = {restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;