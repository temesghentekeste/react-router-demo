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
 -[ ] Sure, we could put them in any order if we use exact in certain ways, but at least we have options.