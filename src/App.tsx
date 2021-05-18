import "./App.css";
import React from "react";

import { Switch, Route } from "react-router-dom";

import NavBar from "./pages/navBar";
import Login from "./pages/login";
import MainPage from "./pages/main-page";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
