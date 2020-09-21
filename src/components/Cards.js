import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1><i class="fas fa-quote-left"/>PvP FORMATS<i class="fas fa-quote-right"></i></h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="img/TOMF1.png"
              text="TOWER OF MASTERY"
              path="/gyms-info"
            />
            <CardItem
              src="img/4.png"
              text="BATTLE FRONTIER"
              path="/products"
            />
            <CardItem
              src="img/3.png"

              text="DRAFTS & AUCTIONS"
              path="/products"
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
