import React from "react";
import "./App.css";
import Banner from "./components/Home/Banner";
import Skill from "./components/Skills/Skill";
import Services from "./components/Services";
import About from "./components/Home/About";
import Error from "./components/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Education/Education";
import Form from "./components/Contact/Form";
import Footer from "./components/Contact/Footer";

function App() {
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
