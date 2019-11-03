import React from 'react';
import logo from '../../../assets/images/logo/logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from '../Login';
import Register from '../Register';
import Dashboard from '../Dashboard';

function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
