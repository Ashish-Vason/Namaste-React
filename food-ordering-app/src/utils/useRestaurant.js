import { useEffect, useState } from "react";
import { RESTAURANTS_URL } from "./constants";

const useRestaurant = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const data = await fetch(RESTAURANTS_URL);
        const json = await data.json();
        console.log(json);
        setRestaurantData(json);


    }
    return restaurantData;
}

export default useRestaurant;