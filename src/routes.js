import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// components
import Home from "./pages/Home/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
