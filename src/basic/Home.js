import React from "react";
import "../App.css";
import "../css/Button.scss";


function Home() {
  return (
    <div class="home-image">
    <div class="home-text">
    <h1>
      <img src="../img/logo.png" alt=""/>
    </h1>
    <p>The Official PvP Server for Pokémon GO PvP in India! <br/> Join if you have the valor and skills to prove your worth and become the very best!</p>
    <div className="button_cont" align="center"><a className="example_e" href="https://discord.gg/SVwJFE5" target="_blank" rel="nofollow noopener noreferrer">Join The Discord</a></div>
      </div>
    </div>
  );
}

export default Home;
