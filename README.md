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
