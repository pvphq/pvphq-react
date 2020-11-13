import React from "react";
import "../App.css";
import "./Banner.css"

function Banner(props) {
  return (
    <div className="banner-container">
        <div className="banner-image">
            <img src={props.image}></img>
        </div>
        <div className="banner-heading">
            {props.heading}
        </div>
        <div className="banner-description">
            {props.description}
        </div>
        <button className="banner-button">
            Know More <i class="fas fa-chevron-circle-right"></i>
        </button>
    </div>
  );
}

export default Banner;
