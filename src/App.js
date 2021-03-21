// import React from "react";
// import Nav from "./Nav";
// import Home from "./Home";
// import Content from "./Content";
// // import Education from "./Education";
// // import Contact from "./Contact";
// function App() {
//   return (
//     <div className="app">
//       <Nav />

//       <Home />

//       <Content />
//       {/* <Education /> */}
//       {/* <Contact /> */}
//       {/* <About /> */}
//     </div>
//   );
// }

// export default App;
import React from "react";
import "./App.css";
import Banner from "./components/Banner";
// import Nav from "./components/Nav";
import Nav from "./Nav";
import Skill from "./Skill";
import Services from "./components/Services";
import About from "./components/About";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import Contacts from "./Contact";
import Error from "./components/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Card from "./components/Education/Education";
// import Services from "./components/Services";
function App() {
  return (
    <div>
      {/* <Nav /> */}
      {/* <Nav /> */}

      <Switch>
        <Route exact path="/" component={Banner} />
        <Route path="/About" component={About} />
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
          <Contacts />

          <Contact />
        </Route>

        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
