import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Login from "./pages/login";
import MainPage from "./pages/main-page";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
