import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Profile from './Profile';
import Users from './Users';
import About from './About';
import Navbar from './Navbar';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
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
