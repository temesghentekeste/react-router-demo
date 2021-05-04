import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Profile from './Profile';
import Users from './Users';
import About from './About';
import Navbar from './Navbar';
import UsersMenu from './UsersMenu';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Route path="/users" component={UsersMenu} />
        <Route path="/" component={App} exact />
        <Route path="/profile" component={Profile} />
        <Route path="/users" component={Users} />
        <Route path="/about" component={About} />
      </main>
    </BrowserRouter>
  );
};

export default Routes;
