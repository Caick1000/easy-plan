import React from "react";
import { Route, Switch } from "react-router-dom";

import Choose from "../pages/choose";
import Questions from "../pages/questions";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Choose} />
      <Route exact path="/questions" component={Questions} />
    </Switch>
  );
};

export default Main;
