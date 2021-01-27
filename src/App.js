import React from 'react';
import { NavLink, Route, Switch } from "react-router-dom";

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
              <NavLink to='/'>
                <img src="https://blog.logrocket.com/wp-content/uploads/2020/01/logrocket-blog-logo.png" alt="Company Logo" />
              </NavLink>
              <div className="menu-toggle" id="mobile-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
              <ul className="nav no-search">
                <li className="nav-item"><NavLink to="/">Login/Signup</NavLink></li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route path="/" exact>
              <Index />
            </Route>
            <Route path="/details/:id" exact>
              <BlogDetails />
            </Route>
          </Switch>
          <Footer />
        </div>
    </React.Fragment>
  );
}

export default App;
