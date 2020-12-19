import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import HomeContainer from "../pages/home/HomeContainer";
import PostContainer from "../pages/post/PostContainer";

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path="/post/:id" component={PostContainer} />
        <Route exact path="/" component={HomeContainer} />
      </Switch>
    </Router>
  );
} 
