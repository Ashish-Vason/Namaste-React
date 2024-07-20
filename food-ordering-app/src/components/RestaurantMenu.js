import { useEffect, useState } from 'react'
import ShimmerUI from './ShimmerUI';
import { useParams } from 'react-router-dom';

// selected res Name - data.cards[2].card.card.info.name

// name: data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name
// locality: data.cards[2].card.card.info.locality
// areaName: data.cards[2].card.card.info.areaName

const RestaurantMenu = () => {
    const [restaurant, setRestaurant] = useState('');
    const {resId} = useParams();
    console.log(resId);
    const fetchData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}`)
    
        const json = await data.json();
        // console.log(json.data.cards[2].card.card.info.name);
        setRestaurant(json);
    
    
    }
    useEffect(() => {
        fetchData();
    
    }, [])
    if(!restaurant) {
        return <ShimmerUI />
    }
    const {name, cuisines, costForTwoMessage, avgRating, totalRatingsString, feeDetails} = restaurant.data.cards[2].card.card.info;
    const {title} = restaurant.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    const {itemCards} = restaurant.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    const {price, ratings} = restaurant.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[1].card.info;
    
    return (
        <div>
            <div className='main-restaurant'>
                <h1>{name}</h1>
                <h2>{avgRating}({totalRatingsString})</h2>
                <h2>{costForTwoMessage}</h2>
                <h2>{cuisines.join(", ")}</h2>
                <h3>{feeDetails.message}</h3>
            </div>
            <div className='restaurant-menu'>
                <div className='functional-btn'>
                    <button className="bestsellers">
                        Bestsellers
                    </button>
                    <button className="vegOnly">Veg Only</button>
                </div>
                <div className='restaurant-menu-items'>
                    <h1 className='menu' style={{alignItems: 'center'}}>Menu</h1>
                    <h2>{title}</h2>
                    {itemCards.map((itemCard) => (
                        <ul>
                            <li>{itemCard.card.info.name} - <span>₹{itemCard.card.info.price/100}</span>
                            <div>
                                { itemCard.card.info.ratings.aggregatedRating.rating && <span>{itemCard.card.info.ratings.aggregatedRating.rating}<span>({itemCard.card.info.ratings.aggregatedRating.ratingCount})</span></span>}
                            </div>
                            </li>
                            
                        </ul> 
                    ))}
                    
                    
                </div>
            </div>
            
        </div>
    )
}

export default RestaurantMenu;