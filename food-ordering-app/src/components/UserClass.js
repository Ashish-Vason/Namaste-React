import React from 'react'

class UserClass extends React.Component {
    // Always pass the props with the super keyword

    constructor(props) {
        super(props);
        console.log(this.props.name,"Child Constructor")
        this.state = {
            // a big object where all state variables are created.
            count: 0,
            user: {
                name: 'dummy',
                location: 'Default'
            }
        }
    }

   async componentDidMount() {
        // Making API calls as it rendered after the component did mount/ after the component rendered.
        // React will batch the render and commit phase. In order to make things faster.
        const userApi = await fetch("https://api.github.com/users/Ashish-Vason");
        const json =  await userApi.json(); 
        console.log( this.props.name,"Child Did mount called");
        this.setState({
            user: json
        })
    }

    componentDidUpdate() {
        // this is called when DOM manipualtes occurs and react updated the DOM.
        console.log("Child Did update called");
    }

    componentWillUnmount() {
        // this is called before when component will destroy or updated by some other component.
        console.log("Child will unmount");
    }

    // render function is used to render the JSX inside the class based component
    render() {
        console.log("Child Rendered");
        const {name, location, blog, avatar_url} = this.state.user;
        return (
            <div className="user-card">
            {/* <h3>{this.props.name}</h3>
            <h3>{this.props.location}</h3>
            <h3>{this.state.count}</h3>
            <button onClick={() => this.setState({
                count: this.state.count + 1
            })}>Count increment</button> */}
            <img src={avatar_url} />
            <h3>Name: {name}</h3>
            <h3>location:{location}</h3>
            <h3>Portfolio: <a href={blog}>{blog}</a></h3>
        </div>
        )
    }
}

export default UserClass;