import React from "react";
import "./App.css";
import Banner from "./components/Home/Banner";
// import Nav from "./components/Nav";
import Nav from "./Nav";
import Skill from "./components/Skills/Skill";
import Services from "./components/Services";
import About from "./components/Home/About";
import Prices from "./components/Prices";
// import Contact from "./components/Contact";
// import Contacts from "./Contact";
import Error from "./components/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Card from "./components/Education/Education";
import Form from "./components/Contact/Form";
import Footer from "./components/Contact/Footer";
// import Services from "./components/Services";
function App() {
  return (
    <div>
      {/* <Nav /> */}
      {/* <Nav /> */}

      <Switch>
        <Route exact path="/">
          <Banner />

          <About />
        </Route>
        {/* <Route path="/About" component={About} /> */}
        <Route
          path="/Services"
          // component={() => {
          //   window.location.href =
          //     "https://60084bc0fdb28f23947f9faf--xenodochial-bhabha-8817e5.netlify.app/";
          //   return null;
          // }}
        >
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
