import React from "react";
import Footer from "../Footer";
import "../../App.css";

function Rules() {
  return (
    <div>
      <div>
        <img src="/img/logorule.png"></img>
      </div>
      <div className="rule-heading">
        <h1>PVP HEADQUARTERS</h1>
        <h3>PVP HQ TOURNAMENT RULES</h3>
      </div>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8 rules-text">
          <div className="rules-head"></div>
          <div className="rules-text"></div>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Rules;
