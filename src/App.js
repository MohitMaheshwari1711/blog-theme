import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Index from './Components/Index';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import Footer from './Components/Footer/Footer';

import './App.css';





function App() {

  return (
    <React.Fragment>
      <div className="grad-bar"></div>
      <div className="page-wrapper">
        <div className="nav-wrapper">
          <nav className="navbar">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png" alt="Company Logo" />
            <div className="menu-toggle" id="mobile-menu">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className="nav no-search">
              <li className="nav-item"><a href="#">Login/Signup</a></li>
            </ul>
          </nav>
        </div>
        <Router>
          <Switch>
            <Route path="/" exact='true'>
              <Index />
            </Route>
            <Route path="/details/:id" exact='true'>
              <BlogDetails />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
