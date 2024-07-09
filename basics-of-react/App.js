import React from 'react';
import ReactDOM from 'react-dom/client';

// let heading = React.createElement("div", {id: 'parent'}, [React.createElement("div", {id: 'child'}, [React.createElement('h1', {}, "I'm an h1 tag"), React.createElement('h2', {}, "I'm an h2 tag")]), React.createElement("div", {id: 'child2'}, [React.createElement('h1', {}, "I'm an h1 tags"), React.createElement('h2', {}, "I'm an h2 tag")])])

// Using JSX

let heading = <h1 className='heading'>Namaste react</h1>


console.log(heading)

// createElement returns a ReactElement(Object) 

// The React.createElement causes the code complex and difficult to understands that's why JSX comes into the picture.

let root = ReactDOM.createRoot(document.getElementById('root'))

// The render methord converts the ReactElement into Browser (HTML) 



// React Component - A simple JS function which returns JSX


const Title = () => {
    return <h1>This is the Title</h1>
} 

const Heading1 = () => (
   (
    <div>
        <Title />
        <Title></Title>
        {Title()} 
        <h1>This is the heading1</h1>
    </div>
   ) 
)

root.render(<Heading1 />)