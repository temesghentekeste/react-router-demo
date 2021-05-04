# React Router Concepts

## API Concept I: 
  An app that is meant for the browser, 
  
  - [ ] We need to wrap it in &lt;BrowserRouter&gt; which comes from v4. 
  - [ ] We import from react-router-dom now (which means we npm install react-router-dom not react-router). 
  - [ ] It’s called react-router-dom because there’s also a native version.
## API Concept I: 
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
  - [ ]V3 routing rules were “exclusive” which meant that only one route would win. 
  - [ ] V4 routes are “inclusive” by default which means more than one &lt;Route&gt; can match and render at the same time.