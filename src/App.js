import React from "react";
import "./App.css";
import NavMenu from "./components/Nav";
import About from "./basic/About";
import Home from "./basic/Home";
import Gyminfo from "./tom/Gyminfo";
import SilphLeague from "./tournaments/SilphLeague";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <NavMenu />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/gyms-info" component={Gyminfo} />
        <Route path="/silphleague" component={SilphLeague} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
