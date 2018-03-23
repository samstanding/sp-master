import React from 'react';
import {HashRouter as Router, Route, Redirect, Switch, } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserPage from './pages/UserPage';
import LandingPage from './pages/LandingPage';
import ReviewPage from './pages/ReviewPage';
import EditPage from './pages/EditPage';
import MyAppBar from './components/MyAppBar/MyAppBar';

import './styles/main.css';

const App = () => (
  <MuiThemeProvider>
  <Router>
  <div>
    {/* <Header title="Prime Solo Projects" /> */}
    {/* <Nav/> */}
    <div>
    <MyAppBar />
      </div>
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
        <Route 
        path="/edit"
        component={EditPage}
        />
      </Switch>
    
  </div>
  </Router>
  </MuiThemeProvider>
);

export default App;
