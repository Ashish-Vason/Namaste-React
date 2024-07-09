import {CDN_URL} from '../utils/constants'


const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, costForTwo, avgRating, cloudinaryImageId} = resData.info; 
    const {slaString} = resData?.info.sla; 
    return (
        <div className='res-card'>
            <img src={CDN_URL+cloudinaryImageId} alt="logo" />
            <div className='res-text'>
                 <h3>{name}</h3>
                <h3>{cuisines.join(", ")}</h3>
                <h3>{costForTwo}</h3>
                <h3>{avgRating}</h3>
                <h3>{slaString}</h3>
            </div>
        </div>  
    )
}

export default RestaurantCard;