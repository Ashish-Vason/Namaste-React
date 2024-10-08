import React, { lazy, Suspense, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Cart from './components/Cart';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
// import About from './components/About'
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import { GoogleOAuthProvider } from '@react-oauth/google';
import SuccessPage from './components/SuccessPage';
import FailurePage from './components/FailurePage';
=======
>>>>>>> parent of 832102c (Integration google oauth and stripe payment gateway)
// import About from './components/About'
// chuncked the code into 2 bundle components for optimization
const About = lazy(() => import('./components/About'));

const App = () => {
  const { loggedInUser } = useContext(UserContext);
  const [userName, setUserName] = useState(loggedInUser);
  useEffect(() => {
    // authentication
    const data = {
      name: 'Ashish Vason',
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appLayout = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1>Rendering....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/success',
        element: <SuccessPage />,
      },
      {
        path: '/failure',
        element: <FailurePage />,
      },
    ],
  },
]);

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appLayout} />);
