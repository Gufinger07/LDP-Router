import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import NavBar from "./components/NavBar";
import Jquery from "./components/Jquery";
function App() {
  return (
    <>
      <Router>
      <NavBar />
      <div className="card">
        <Switch>
          <Route exact path="/">
            <h1>
              EAE
            </h1>
          </Route>
          <Route path="/jquery"> 
            <Jquery />
          </Route>
        </Switch>
      </div>
    </Router>
  </>
  )
}

export default App;
