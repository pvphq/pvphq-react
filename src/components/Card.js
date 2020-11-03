import React from "react";
import "../App.css";
import "./Card.css"

function Card(props) {
  return (
    <div className="card-container">
        <div className="card-image">
            <img src={props.image}></img>
        </div>
        <div className="card-heading">
            {props.heading}
        </div>
        <div className="card-description">
            {props.description}
        </div>
        <button className="card-button">
            Know More <i class="fas fa-chevron-circle-right"></i>
        </button>
    </div>
  );
}

export default Card;
