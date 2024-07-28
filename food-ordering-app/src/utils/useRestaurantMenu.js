import { useEffect, useState } from "react"
import { MENU_URL } from "./constants"

const useRestaurantMenu = (resId) => {
    // fetching the data
    const [restaurant, setRestaurant] = useState(null);
    

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json()
        setRestaurant(json)

    }
    return restaurant
}

export default useRestaurantMenu;