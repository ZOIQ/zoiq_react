import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import Home from "./views/Home.jsx";
import NavBar from "./molecules/navigation/NavBar.jsx";

const App = () => {
  return (
    <div className="w-screen h-screen overflow-y-scroll bg-black">
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/home">
            <Redirect to="/" />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default hot(module)(App);
