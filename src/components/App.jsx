import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Food from "./Food";
import Gallery from "./Gallery";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/food" component={Food} />
        <Route exact path="/gallery" component={Gallery} />
      </Switch>
    </Router>
  );
}
export default App;
