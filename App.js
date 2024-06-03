
let heading = React.createElement("div", {id: 'parent'}, [React.createElement("div", {id: 'child'}, [React.createElement('h1', {}, "I'm an h1 tag"), React.createElement('h2', {}, "I'm an h2 tag")]), React.createElement("div", {id: 'child2'}, [React.createElement('h1', {}, "I'm an h1 tag"), React.createElement('h2', {}, "I'm an h2 tag")])])


console.log(heading)

// createElement returns a ReactElement(Object) 

// The React.createElement causes the code complex and difficult to understands that's why JSX comes into the picture.

let root = ReactDOM.createRoot(document.getElementById('root'))

// The render methord converts the ReactElement into Browser (HTML) 

root.render(heading)