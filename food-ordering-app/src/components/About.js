import UserContext from '../utils/UserContext';
import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {
  constructor(props) {
    console.log('Parent Constructor');
    super(props);
  }

  componentDidMount() {
    // Making API calls as it rendered after the component did mount/ after the component rendered.
    console.log('Parent Did mount called');
  }

  render() {
    console.log('Parent Render');
    return (
      <div>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
        <h1>About Us Page</h1>
        {/* <h2>{loggedInUser}</h2> */}
        <UserClass name={'Ashish Class'} location={'Ambala'} />
      </div>
    );
  }
}

export default About;
