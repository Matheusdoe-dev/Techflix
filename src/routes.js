import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// components
import Home from "./pages/Home/index";
import Index from "./pages/Index/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/index" component={Index} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
