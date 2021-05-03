import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Profile from './Profile';
import Users from './Users';
import About from './About';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/profile" component={Profile} />
        <Route path="/users" component={Users} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
