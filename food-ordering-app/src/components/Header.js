import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useContext } from 'react';
import UserContent from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContent);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems, 'cartItems');
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="navbar">
        <ul className="navlinks text-lg">
          {/* Instead of refreshing the whole page. It updates the component based on the routes. */}
          <li>Online Status{onlineStatus ? ' 🟢' : ' 🔴'}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="font-bold text-xl">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li>User: {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
