import * as React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route, // for later
} from 'react-router-dom';

import Home from './Home';
import Topics from './Topics';

export default function App() {
  return (
    <Router>
      <div style={{ width: 1000, margin: '0 auto' }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
      </div>
    </Router>
  );
}
