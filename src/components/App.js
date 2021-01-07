import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderPizza from "./OrderPizza";
import Menu from "./Menu";
import Ingredients from "./Ingredients";

const App = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/orderpizza">
          <OrderPizza />
        </Route>
        <Route exact path="/ingredients">
          <Ingredients />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
