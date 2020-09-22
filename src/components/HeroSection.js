import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>
            <img src="../img/logo.png" alt="" />
          </h1>
      <p>Welcome to the PvP Headquarters:</p>
      <div className="hero-btns">
      <a
                href="https://discord.gg/SVwJFE5"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          
                JOIN DISCORD <i class="fas fa-chevron-circle-right"></i>
              
        </Button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
