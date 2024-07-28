import { Link } from 'react-router-dom';
import {CDN_URL} from '../utils/constants'


const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, id, cuisines, costForTwo, avgRating, cloudinaryImageId} = resData.info; 
    const {slaString} = resData?.info.sla; 
    return (
        <div className='res-card'>
            <Link to={`/restaurants/${id}`}>
            <img src={CDN_URL+cloudinaryImageId} alt="logo" />
            <div className='res-text'>
                 <h3>{name}</h3>
                <h3>{cuisines.join(", ")}</h3>
                <h3>{costForTwo}</h3>
                <h3>{avgRating}</h3>
                <h3>{slaString}</h3>
            </div>
            </Link>
        </div>  
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return () => {
        <div>  
            <label>Promoted</label>
            <RestaurantCard />
        </div>
    }
}

export default RestaurantCard;