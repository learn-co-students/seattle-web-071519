## SWBAT

Understand build tools and show how webpack works
Use historical context and the Mod 3 experience to explain why React and declarative programming is special
Start to understand the Virtual DOM
See what a React Component actually is (an object, made by a class or function)
Build custom components and see initial JSX

--

Learn how to identify components on a page, visually
Understand how create-react-app works and what it offers a developer
Learn the difference between props and state, and why one would use one or the other
Get more familiarity with component hierarchy and the flow of information

## DAY 2

Explain the difference between imperative and declarative programming
Differentiate between presentational(dumb) and container(smart) components
Instantiate state in and out of the constructor
Trigger rerenders by calling setState
Manipulate the DOM by changing values in state
Create event handler callbacks that manipulate state
Write fully controlled forms

## DAY 4

### Important lifecycle methods
constructor(props)
render()
componentDidMount()
componentDidUpdate(prevProps, prevState, snapshot)
componentWillUnmount()

### Birth (Mounting)
constructor(props)
called before it is mounted
set initial state here
static getDerivedStateFromProps(props, state)
invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.
render()
called after mounting and updating
componentDidMount()
invoked immediately after a component is mounted (inserted into the tree).
this is where you should request data from remote endpoints

### Life (Updating)
render()
called after mounting and updating
componentDidUpdate(prevProps, prevState)
invoked immediately after updating occurs. This method is not called for the initial render
watch out for infinite loops if setting state!
componentWillRecieveProps(props, prevState)
invoked when the value of props passed into the component have updated

### Death (Unmounting)
componentWillUnmount()
invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
