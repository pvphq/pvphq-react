import React from "react";
import "../App.css";
import "../Button.scss";


function Gyminfo() {
  return (
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
  );
}

export default Gyminfo;
