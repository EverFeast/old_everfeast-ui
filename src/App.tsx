import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './assets/css/inc/bootstrap/bootstrap.min.css';
import './assets/css/style.css';

import Search from "./containers/Search";
import Profile from "./containers/Profile";
import Login from "./containers/Login";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/login">
            <Login />
          </Route>
        <Route path="/profile">
            <Profile />
        </Route>
        <Route path="/">
            <Search/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
