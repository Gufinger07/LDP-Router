import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import NavBar from "./components/NavBar";
import Jquery from "./components/Jquery"
import Reactjs from "./components/Reactjs"
import Angular from "./components/Angular"
import Nodejs from "./components/Nodejs"
import Laravel from './components/Laravel';
import Spring from "./components/Spring"
import Home from "./components/Home"

function App() {
  return (
    <>
      <Router>
      <NavBar />
      <div className="card">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/jquery"> 
            <Jquery />
          </Route>
          <Route path="/react"> 
            <Reactjs />
          </Route>
          <Route path="/angular"> 
            <Angular />
          </Route>
          <Route path="/nodejs"> 
            <Nodejs />
          </Route>
          <Route path="/spring"> 
            <Spring />
          </Route>
          <Route path="/laravel"> 
            <Laravel />
          </Route>
        </Switch>
      </div>
    </Router>
  </>
  )
}

export default App;
