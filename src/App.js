import React from "react";
import "./App.css";
import NavMenu from "./components/Nav";
import Home from "./components/pages/Home";
import TeamHQ from "./components/pages/TeamHQ";
import AboutUs from "./components/pages/AboutUs";
import Rules from "./components/pages/Rules";
import Gyminfo from "./tom/Gyminfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <NavMenu />
        <Switch>
          <Route path="/rules" component={Rules} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/team-hq" component={TeamHQ} />
          <Route path="/tom" component={Gyminfo} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
