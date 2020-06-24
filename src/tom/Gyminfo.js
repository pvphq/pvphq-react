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
    <p>The Official PvP Server for Pokémon GO PvP in India! <br/> Join if you have the valor and skills to prove your worth and become the very best!</p>
    <div className="button_cont" align="center"><a className="example_e" href="https://discord.gg/SVwJFE5" target="_blank" rel="nofollow noopener noreferrer">Challenge Gym</a></div>

    <div className="button_cont" align="center"><a className="example_e" href="https://discord.gg/SVwJFE5" target="_blank" rel="nofollow noopener noreferrer">Join Discord</a></div>

      </div>
    </div>
    <h1 className="heading">▹ GYMS ◃</h1>
    <div className="tourcard">
    <TeamTour />
    <TeamTour />
    </div>
    </div>
  );
}

export default Gyminfo;
