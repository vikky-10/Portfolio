import React from "react";

import Topbar from "../Blogcomponent/Topbar";
import Home from "../Blogcomponent/Home/Home";
import CreatePost from "../Blogcomponent/createPost/CreatePost";
import Write from "../Blogcomponent/write/Write";
import Setting from "../Blogcomponent/settings/Setting";
import Login from "../Blogcomponent/Login/Login";
import Register from "../Blogcomponent/Register/Register";
import SinglePost from "../Blogcomponent/SinglePost/SinglePost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Blog = () => {
  let currentUser = true;
  return (
    <Router>
      <Topbar />
      {/* <Home /> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/register">{currentUser ? <Home /> : <Register />}</Route>
        <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
        <Route path="/post/:id">
          <SinglePost />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">{currentUser ? <Setting /> : <Login />}</Route>
      </Switch>
    </Router>
  );
};

export default Blog;
