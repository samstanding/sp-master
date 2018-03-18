import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserPage from './pages/UserPage';
import LandingPage from './pages/LandingPage';
import ReviewPage from './pages/ReviewPage';

import './styles/main.css';

const App = () => (
  <Router>
  <div>
    <Header title="Prime Solo Projects" />
    <Nav/>
      
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LandingPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/login"
          component={LoginPage}
        />
        <Route 
        path="/review"
        component={ReviewPage}
        />
      </Switch>
    
  </div>
  </Router>
);

export default App;
