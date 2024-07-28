import ShimmerUI from './ShimmerUI';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurtCategory';
import { useState } from 'react';

// selected res Name - data.cards[2].card.card.info.name

// name: data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name
// locality: data.cards[2].card.card.info.locality
// areaName: data.cards[2].card.card.info.areaName

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const [showIndex, setShowIndex] = useState(null);
  const restaurant = useRestaurantMenu(resId);
  if (!restaurant) {
    return <ShimmerUI />;
  }
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    feeDetails,
  } = restaurant.data.cards[2].card.card.info;
  const { title } =
    restaurant.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card
      .card;

  console.log(
    restaurant.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards,
    'itemCards'
  );

  const categories =
    restaurant.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (item) =>
        item.card.card['@type'] ==
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  console.log(categories);

  return (
    <div>
      <div className="main-restaurant text-center">
        <h1 className="font-bold my-5 text-2xl">{name}</h1>
        <div className="description">
          <h2 className="font-bold text-md text-gray-400">
            {cuisines.join(', ')}
          </h2>
          <h2 className="font-bold text-md">
            {avgRating}({totalRatingsString})
          </h2>
          <h2 className="font-bold text-md">{costForTwoMessage}</h2>
          <h3 className="font-bold text-md">{feeDetails.message}</h3>
        </div>
      </div>
      <div className="category-container text-center font-bold text-md">
        {categories.map((item, index) => (
          // lifting up the state. Controlled component
          <RestaurantCategory
            isAccOpen={index == showIndex ? true : false}
            key={item.card.card.title}
            data={item}
            setShowIndex={() => setShowIndex(index)}
            nullShowIndex={() => setShowIndex(null)}
          />
        ))}
      </div>
      {/* <div className='restaurant-menu'>
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
                        <ul key={itemCard.card.info.id}>
                            <li>{itemCard.card.info.name} - <span>₹{itemCard.card.info.price/100}</span>
                            <div>
                                { itemCard.card.info.ratings.aggregatedRating.rating && <span>{itemCard.card.info.ratings.aggregatedRating.rating}<span>({itemCard.card.info.ratings.aggregatedRating.ratingCount})</span></span>}
                            </div>
                            </li>
                            
                        </ul> 
                    ))}
                    
                    
                </div>
            </div> */}
    </div>
  );
};

export default RestaurantMenu;
