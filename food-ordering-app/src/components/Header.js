import { Link } from 'react-router-dom';
import {LOGO_URL} from '../utils/constants'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} alt="Logo" />
            </div>
            <div className='navbar'>
                <ul className='navlinks'>
                    {/* Instead of refreshing the whole page. It updates the component based on the routes. */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;