# React Router Concepts

## API Concept I:

An app that is meant for the browser,

- [ ] We need to wrap it in &lt;BrowserRouter&gt; which comes from v4.
- [ ] We import from react-router-dom now (which means we npm install react-router-dom not react-router).
- [ ] It’s called react-router-dom because there’s also a native version.

## API Concept II:

### V3 Example:

```
import { Router, Route, IndexRoute } from 'react-router'

const PrimaryLayout = props => (
  <div className="primary-layout">
    <header>
      Our React Router 3 App
    </header>
    <main>
      {props.children}
    </main>
  </div>
)

const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={PrimaryLayout}>
      <IndexRoute component={HomePage} />
      <Route path="/users" component={UsersPage} />
    </Route>
  </Router>
)

render(<App />, document.getElementById('root'))
```

### V4 Example:

```
import { BrowserRouter, Route } from 'react-router-dom'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Our React Router 4 App
    </header>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/users" component={UsersPage} />
    </main>
  </div>
)

const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

render(<App />, document.getElementById('root'))
```

- [ ] V3 routing rules were “exclusive” which meant that only one route would win.
- [ ] V4 routes are “inclusive” by default which means more than one &lt;Route&gt; can match and render at the same time.
- [ ] In the previous example, we’re trying to render either the HomePage or the UsersPage depending on the path. If the exact prop were removed from the example, both the HomePage and UsersPage components would have rendered at the same time when visiting `/users` in the browser.

## API Concept III:

### Code block for inclusive route

```
const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Our React Router 4 App
      <Route path="/users" component={UsersMenu} />
    </header>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/users" component={UsersPage} />
    </main>
  </div>
)
```

- [ ] Now, when the user visits `/users`, both components will render. Something like this was doable in v3 with certain patterns, but it was more difficult. Thanks to v4’s inclusive routes, it’s now a breeze.

## API Concept IV:

### Exclusive Routing

- [ ] If you need just one route to match in a group, use &lt;Switch&gt; to enable exclusive routing:

```
const PrimaryLayout = () => (
  <div className="primary-layout">
    <PrimaryHeader />
    <main>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/users/add" component={UserAddPage} />
        <Route path="/users" component={UsersPage} />
        <Redirect to="/" />
      </Switch>
    </main>
  </div>
)
```

- [ ] Only one of the routes in a given &lt;Switch&gt; will render. We still need exact on the HomePage route though if we’re going to list it first. Otherwise the home page route would match when visiting paths like `/users` or `/users/add`.
- [ ] Notice that we strategically place the routes for /users/add before /users to ensure the correct matching. Since the path /users/add would match for `/users` and `/users/add`, putting the /users/add first is best.
- [ ] Sure, we could put them in any order if we use exact in certain ways, but at least we have options.

## API Concept V:

### &lt;Redirect&gt;

- [ ] The &lt;Redirect&gt; component will always do a browser-redirect if encountered, but when it’s in a &lt;Switch&gt; statement, the redirect component only gets rendered if no other routes match first.

## API Concept VI:

### “Index Routes” and “Not Found”

- [ ] While there is no more &lt;IndexRoute&gt; in v4, using &lt;Route exact&gt; achieves the same thing. Or if no routes resolved, then use &lt;Switch&gt; with &lt;Redirect&gt; to redirect to a default page with a valid path (as I did with HomePage in the example), or even a not-found page.

## API Concept VII:

### Nested Routes using version 5 React Router

- [ ] To demonstrate the concept of nested routes our example demo has a list of topics, those topics have resources, and those resources have a URL.
- [ ] Our data structure is:

```
const topics = [
{
  name: 'React Router',
  id: 'react-router',
  description: 'Declarative, component based routing for React',
  resources: [
    {
      name: 'URL Parameters',
      id: 'url-parameters',
      description: "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
      url: 'https://ui.dev/react-router-v5-url-parameters/'
    },
    {
      name: 'Programmatically navigate',
      id: 'programmatically-navigate',
      description: "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
      url: 'https://ui.dev/react-router-v5-programmatically-navigate/'
    }
  ]
},
{
  name: 'React.js',
  id: 'reactjs',
  description: 'A JavaScript library for building user interfaces',
  resources: [
    {
      name: 'React Lifecycle Events',
      id: 'react-lifecycle',
      description: "React Lifecycle events allow you to tie into specific phases of a component's life cycle",
      url: 'https://ui.dev/an-introduction-to-life-cycle-events-in-react-js/'
    },
    {
      name: 'React AHA Moments',
      id: 'react-aha',
      description: "A collection of 'Aha' moments while learning React.",
      url: 'https://ui.dev/react-aha-moments/'
    }
  ]
},
{
  name: 'Functional Programming',
  id: 'functional-programming',
  description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
  resources: [
    {
      name: 'Imperative vs Declarative programming',
      id: 'imperative-declarative',
      description: 'A guide to understanding the difference between Imperative and Declarative programming.',
      url: 'https://ui.dev/imperative-vs-declarative-programming/'
    },
    {
      name: 'Building User Interfaces with Pure Functions and Function Composition',
      id: 'fn-composition',
      description: 'A guide to building UI with pure functions and function composition in React',
      url: 'https://ui.dev/building-user-interfaces-with-pure-functions-and-function-composition-in-react-js/'
    }
  ]
}
]
```

- [ ] Before we start worrying about nested routes, let’s first create the skeleton of our app including the navbar which will allow us to navigate between Home (/) and Topics (/topics).

```
import * as React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'

const topics = [
  // ...
]

export default function App () {
  return (
      <Router>
        <div style={{width: 1000, margin: '0 auto'}}>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/topics'>Topics</Link></li>
          </ul>
        </div>
      </Router>
  )
}
```

- [ ] Now what we want to do is render a few Routes so that we can map different components to the user’s path. However, before we can do that, we need to actually build out those components.The two top-level components we’ll need are Home and Topics. For now, we’ll throw some placeholder text in both of them.

```
function Home () {
  return <h1>HOME</h1>
}

function Topics () {
  return <h1>TOPICS</h1>
}
```

- [ ] Now that we have our two top-level components, we need to create a Route for each of them. Home will be rendered when the user is at / and Topics will be rendered when the user is at /topics.

```
export default function App () {
  return (
    <Router>
      <div style={{width: 1000, margin: '0 auto'}}>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
        </ul>

        <hr />

        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/topics'>
          <Topics />
        </Route>
      </div>
    </Router>
  )
}
```

- [ ] When we’re at /, we’ll see the navbar and the Home component. When we’re at /topics, we’ll see the navbar and the Topics component.
- [ ] When we go to /topics, the UI we get is another navbar which should include all of the topics. Let’s modify our Topics component to include this navbar. This time instead of hard-coding our Links, we’ll need to use our topics array to create a Link for each high-level topic.

```
function Topics () {
 return (
   <div>
     <h1>Topics</h1>
     <ul>
       {topics.map(({ name, id }) => (
         <li key={id}>
           <Link to={`/topics/${id}`}>{name}</Link>
         </li>
       ))}
     </ul>
   </div>
 )
}
```

- [ ] Now, when we go to /topics and the Topics component is rendered, we’ll get three Links - each linking to a different high-level topic.

- [ ] Notice where we’re linking to, /topics/${id}. If we’re going to link someone to /topics/${id}, that means we need to render a Route which is going to match at that path. This is the first big concept of nested routes with React Router v5 - it doesn’t matter if you render a Route in your main component or in a child component, if the path matches the app’s location, the children element will be rendered.

- [ ] With that in mind, let’s create a Route to match the Links we just created.

```
function Topic () {
 return <div>TOPIC</div>
}

function Topics () {
 return (
   <div>
     <h1>Topics</h1>
     <ul>
       {topics.map(({ name, id }) => (
         <li key={id}>
           <Link to={`/topics/${id}`}>{name}</Link>
         </li>
       ))}
     </ul>

     <hr />

     <Route path={`/topics/:topicId`}>
       <Topic />
     </Route>
   </div>
 )
}
```

- [ ] This is why understanding Route was so important. The mental model for Route is still the exact same, but for some reason your brain gets all worked up the first time you render a Route outside of the main App component.

- [ ] Here’s a step by step step walk-through of what’s happening. When we go to /topics, the Topic component is rendered. Topics then renders a navbar and a new Route which will match for any of the Links in the navbar we just rendered (since the Links are linking to /topics/${id} and the Route is matching for /topics/:topicId). This means that if we click on any of the Links in the Topics component, the Topic component is going to be rendered.

- [ ] It’s important to note that just because we matched another Route component, that doesn’t mean the previous Routes that matched aren’t still rendered. This is what confuses a lot of people. Remember, Route will always render something, either a component if the path matches or null. The same way you think of nesting normal components in React can apply directly to nesting Routes.

- [ ] At this point, we’re progressing along nicely. What if, for some reason, another member of your team who wasn’t familiar with React Router decided to change /topics to /concepts? They’d probably head over to the main App component and change the Route

- [ ] NBD, right? Well, now our routing is all broken. Inside of the Topics component, we’re assuming that the path begins with /topics but now it’s been changed to /concepts. Instead of hard coding the initial path, what we need is a way for the Topics component to get access to whatever the initial path is up to that point. That way, regardless of if someone changes the parent Route, it’ll always work.

- [ ] Good news for us is React Router v5 comes with a custom Hook to give us access to this information called useRouteMatch. useRouteMatch returns an object which contains information about how the Route was matched. Specifically, it has two properties on it, path and url.

- [ ] path - The path pattern used to match. Useful for building nested &lt;Route&gt;s

- [ ] url - The matched portion of the URL. Useful for building nested &lt;Link&gt;s

- [ ] The most important takeaway from those definitions is to use path for creating nested Routes and url for nested Link.

- [ ] Assume we were using an app that had nested route’s and the current URL was /topics/react-router/url-parameters.

- [ ] If we were to use useRouteMatch and log path and url in the most nested component, here’s what we would get.

```
const { path, url } = useRouteMatch()

console.log(path) // /topics/:topicId/:subId
console.log(url) // /topics/react-router/url-parameters

return (
  ...
)
```

- [ ] Notice that path is including the URL parameters and url is just the full URL. This is why one is used for Links and the other used for Routes.

- [ ] When you’re creating a nested Link, you don’t want to include the URL parameters. You want the user to literally go to /topics/react-router/url-parameters. That’s why url is better for nested Links. However, when you’re matching certain patterns with Route, you want to include the URL parameters - that’s why path is used for nested Routes.

- [ ] Now let’s head back to our example. As of right now, we’re hard-coding /topics into our Route and Links.

```
function Topics () {
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map(({ name, id }) => (
          <li key={id}>
            <Link to={`/topics/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Route path={`/topics/:topicId`}>
        <Topic />
      </Route>
    </div>
  )
}
```

- [ ] As we just learned, we want our nested Route’s path to be dynamic instead of hard coded. To do this, we can replace the /topics portion of our Link with url and the /topics portion of our Route with path - both coming from useRouteMatch.
```
function Topics () {
  const { url, path } = useRouteMatch()

  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Route path={`${path}/:topicId`}>
        <Topic />
      </Route>
    </div>
  )
}
```
