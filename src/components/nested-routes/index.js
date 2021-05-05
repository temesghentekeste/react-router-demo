import * as React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route, // for later
} from 'react-router-dom';

import { topics } from './data'

export default function NestedRoutes() {
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
      </div>
    </Router>
  );
}
