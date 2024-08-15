import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useContext, useEffect, useState } from 'react';
import UserContent from '../utils/UserContext';
import { useDispatch, useSelector } from 'react-redux';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { setLoggedIn } from '../utils/loginSlice';

const Header = () => {
  // const [isLoggedIn, setisLoggedIn] = useState(false);
  const isLoggedIn = useSelector((store) => store.login.isLoggedIn);
  const [user, setUser] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const onlineStatus = useOnlineStatus();
  const dispatch = useDispatch();
  // const { loggedInUser } = useContext(UserContent);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems, 'cartItems');
  // authentication with google
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      // setisLoggedIn(true);
      dispatch(setLoggedIn(true));
      setUser(codeResponse);
      sessionStorage.setItem('userInfo', JSON.stringify(codeResponse));
      console.log(codeResponse, 'codeRes');
      return codeResponse;
    },
    onError: (error) => console.log('Login Failed:', error),
  });
  const logOut = () => {
    googleLogout();
    dispatch(setLoggedIn(false));
    setUserProfile(null);
    sessionStorage.clear();
  };

  useEffect(() => {
    console.log('users', user);
    if (user.length != 0) {
      getUserProfile();
    }
  }, [user]);

  useEffect(() => {
    let localUser = JSON.parse(sessionStorage.getItem('userInfo'));
    if (user.length == 0 && localUser) {
      console.log(localUser, 'userss');
      setUser(localUser);
      dispatch(setLoggedIn(true));
    }
  }, []);

  const getUserProfile = async () => {
    const data = await fetch(
      'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' +
        user.access_token
    );
    const json = await data.json();
    console.log(json, 'json');
    setUserProfile(json);
  };

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
          {isLoggedIn && (
            <li className="font-bold text-xl">
              <Link to="/cart">Cart ({cartItems.length} items)</Link>
            </li>
          )}

          <li className="flex items-center">
            {userProfile && isLoggedIn ? (
              <div>
                <img
                  className="w-10 ml-2 rounded-full"
                  src={userProfile.picture}
                ></img>
                <button className="text-lg" onClick={() => logOut()}>
                  Logout
                </button>
              </div>
            ) : (
              <button onClick={() => login()}>Sign in with Google 🚀 </button>
            )}
          </li>
        </ul>
        {/* {isLoggedIn ? (
          <button onClick={() => logOut()}>Logout</button>
        ) : (
          <button onClick={() => login()}>Sign in with Google 🚀 </button>
        )} */}
      </div>
    </div>
  );
};

export default Header;
