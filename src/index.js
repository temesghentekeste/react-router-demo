import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Routes from './components/Routes';
import NestedRoutes from './components/nested-routes/App';
import reportWebVitals from './reportWebVitals';
import './App.css';


ReactDOM.render(
  <React.StrictMode>
    <NestedRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
