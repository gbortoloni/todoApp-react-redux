import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Todo from "../todo/todo";
import About from "../about/about";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Todo} />
      <Route path="/todos" component={Todo} />
      <Route path="/about" component={About} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
