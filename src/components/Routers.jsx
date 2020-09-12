import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import HomeContainer from "./HomeContainer";
import Post from "./Post";

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route path="/post/:id" component={Post} />
        <Route path="/" component={HomeContainer} />
      </Switch>
    </Router>
  );
}
