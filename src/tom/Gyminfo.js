import React from "react";
import TeamTour from "./TeamTour.js";
import "../App.css";
import "../css/Button.scss";


function Gyminfo() {
  return (
    <div>
      <div class="gyminfo-image">
    <div class="gyminfo-text">
    <h1>
      <img src="../img/TOMB.png" alt=""/>
    </h1>
    <p>The first Gym League covering the cities of India! <br/> Join if you wanna be the very best, and defeat the Gym League!</p>

    <div className="button_cont" align="center"><a className="example_e" href="https://discord.gg/SVwJFE5" target="_blank" rel="nofollow noopener noreferrer">Join Discord</a></div>

      </div>
    </div>
    <h1 className="heading">▹ GYMS ◃</h1>
    <div className="tourcard">
    <TeamTour />
    </div>
    </div>
  );
}

export default Gyminfo;
