import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import appStore from './utils/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideoContainer from './components/VideoContainer';
import WatchPage from './components/WatchPage';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: <VideoContainer />,
        },
        {
          path: 'watch',
          element: <WatchPage />,
        },
      ],
    },
  ]);
  // YOUTUBE App
  //  --> Header
  //    --> (Hamburger Menu) and logo
  //    --> Search
  //    --> Profile logo
  //  --> Body
  //    --> Sidebar
  //    --> VideoContainer
  //      --> Video Cards and content
  return (
    <div className="App">
      <Provider store={appStore}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
