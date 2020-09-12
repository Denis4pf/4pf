import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import HomeContainer from "./HomeContainer";
import PostContainer from "./PostContainer";

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route path="/post/:id" component={PostContainer} />
        <Route path="/" component={HomeContainer} />
      </Switch>
    </Router>
  );
}
