import React from "react";
import "./App.css";
import Banner from "./components/Home/Banner";
import Skill from "./components/Skills/Skill";
import Services from "./components/Project/Services";
import About from "./components/Home/About";
import Error from "./components/Error/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Education/Education";
import Form from "./components/Contact/Form";
import Footer from "./components/Contact/Footer";

import Topbar from "./Blogcomponent/Topbar";
import Home from "./Blogcomponent/Home/Home";
import CreatePost from "./Blogcomponent/createPost/CreatePost";
import Write from "./Blogcomponent/write/Write";
import Setting from "./Blogcomponent/settings/Setting";
import Login from "./Blogcomponent/Login/Login";
import Register from "./Blogcomponent/Register/Register";
import SinglePost from "./Blogcomponent/SinglePost/SinglePost";
function App() {
  var currentUser = false;
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Banner />
          <About />
        </Route>
        <Route path="/Services">
          <Navbar />
          <Services />
        </Route>
        <Route path="/Skill" component={Skill} />
        <Route path="/Cards" component={Card} />
        {/* --------- */}

        <Route exact path="/Blog/">
          <Topbar />
          <Home />
        </Route>
        <Route exact path="/Blog/posts">
          <Topbar />
          <Home />
        </Route>
        <Route exact path="/Blog/register">
          <Topbar />
          {currentUser ? <Home /> : <Register />}
        </Route>

        <Route exact path="/Blog/login">
          <Topbar />
          {currentUser ? <Home /> : <Login />}
        </Route>
        <Route exact path="/Blog/post/:id" component={(Topbar, SinglePost)}>
          {/* <SinglePost /> */}
        </Route>
        <Route exact path="/Blog/write">
          <Topbar />
          {currentUser ? <Write /> : <Login />}
        </Route>
        <Route exact path="/Blog/settings">
          <Topbar />
          {currentUser ? <Setting /> : <Login />}
        </Route>

        {/* ----- */}
        <Route path="/Contact">
          <Navbar />
          <Form />
          <Footer />
        </Route>
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
