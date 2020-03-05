import React from "react";
import { Route, Switch } from "react-router-dom";

import Choose from "../pages/choose";
import SinglePage from "../pages/single-page";
import Custom from "../pages/custom";
import MultiPage from "../pages/multi-page";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Choose} />
      <Route exact path="/single-page" component={SinglePage} />
      <Route exact path="/multi-page" component={MultiPage} />
      <Route exact path="/custom" component={Custom} />
    </Switch>
  );
};

export default Main;
