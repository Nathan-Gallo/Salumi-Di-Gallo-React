import React, { useState, useEffect } from 'react';
import { Switch, Route, Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import AuthService from "./services/auth.service";
import DataService from "./services/data.service";


import Login from './pages/login.tsx';
import Register from './pages/register';
import Recipes from './pages/recipes';
import Home from './pages/home';

import Footer from './footer/footer'
import './App.css';


const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    const user = AuthService.getCurrentUser()
    const all = DataService.getAllRecipes

    if (user) {
      setCurrentUser(user);
    }

    if(all) {
      setAllRecipes(all.data)
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="masthead mb-auto">
        <div className="inner">
          <Link to={"/"} id="mastheadLink" className="masthead-brand"><img src="images/logo-sm.png" alt="logo small"
          /></Link>
          <nav id="navLinks" className="nav nav-masthead justify-content-center">
            <NavLink to={"/"} className="nav-link" >Home</NavLink>
            {currentUser && (<NavLink to={"/recipes"} className="nav-link">Recipes</NavLink>)}
            {currentUser ? (
              <a href={"/"} className="nav-link"
                onClick={logOut}>Log out</a>
            ) : (
                <>
                  <NavLink to={"/login"} className="nav-link" >Login</NavLink>
                  <NavLink to={"/register"} className="nav-link" >Register</NavLink>
                </>)}

          </nav >
        </div >

      </header >
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/recipes" component={Recipes} />
      </Switch>
      <Footer />
    </div>
  )

}

export default App;
