import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import appStore from './utils/appStore';

function App() {
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
        <Body />
      </Provider>
    </div>
  );
}

export default App;
