import { useContext, useEffect, useState } from 'react';
import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import ShimmerUI from './ShimmerUI';
import { RESTAURANTS_URL } from '../utils/constants';
import UserContent from '../utils/UserContext';

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [resInputValue, setResInputValue] = useState('');
  const [fiteredRestaurant, setFiteredRestaurant] = useState([]);
  const { loggedInUser, setUserName } = useContext(UserContent);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_URL);
    const json = await data.json();

    console.log(json.data);

    setRestaurantData(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
    setFiteredRestaurant(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
    // setRestaurantData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setFiteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const handleSearch = () => {
    const filteredData = restaurantData.filter((resData) =>
      resData.info.name.toLowerCase().includes(resInputValue.toLowerCase())
    );
    setFiteredRestaurant(filteredData);
  };

  if (restaurantData.length === 0) {
    return <ShimmerUI />;
  }
  return (
    <div className="body-container">
      <div className="search">
        <input
          type="search"
          value={resInputValue}
          placeholder="Search here"
          className="border border-black p-1 focus-visible:border-black"
          onChange={(e) => setResInputValue(e.target.value)}
        />
        <button
          className="search-button bg-black text-white px-3"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="filter-btn mx-4 bg-pink-400 px-3 text-white"
          onClick={() => {
            const filteredData = restaurantData.filter(
              (restaurant) => restaurant.info.avgRating > 4.3
            );
            console.log(filteredData);
            setFiteredRestaurant(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
        <label className="p-1">UserName: </label>
        <input
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Enter Your Name"
          className="border-black border px-3 ml-2"
        />
      </div>

      <div className="res-container">
        {fiteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
