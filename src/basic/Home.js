import React from "react";
import "../App.css";
import "../css/Button.scss";


function Home() {
  return (
    <div>
      <div class="home-image">
    <div class="home-text">
    <h1>
      <img src="../img/logo.png" alt=""/>
    </h1>
    <p className="texttop">A Discord PvP Server for Pokémon GO PvP! Join if you have the valor and skills to prove your worth and become the very best!</p>
    <div className="button_cont" align="center"><a className="example_e" href="https://discord.gg/SVwJFE5" target="_blank" rel="nofollow noopener noreferrer">Join The Discord</a></div>
      </div>
      
    </div>
    <div>
    <h1 className="heading">THE LATEST</h1>
    <div className="postBox">
      <h1 className="dateofpost">AUGUST 10, 2020 ~ HQ UPDATE</h1>
      <div className="post">
        <div className="MoreButton" align="center"><a className="example_f" href="https://discord.gg/SVwJFE5" target="_blank" rel="nofollow noopener noreferrer">Know More ➤</a></div>
      </div>
    </div>
    </div>
    <div>
    <h1 className="heading">PvP FORMATS</h1>
    <div className="postBox">
      <h1 className="format-head">TOWER OF MASTERY</h1>
      <div className="format-pvp">
        <div className="MoreButtonFormat" align="center"><a className="example_f" href="https://discord.gg/SVwJFE5" target="_blank" rel="nofollow noopener noreferrer">Know More ➤</a></div>
      </div>
    </div>
    <div className="postBox">
      <h1 className="format-head">BATTLE FRONTIER</h1>
      <div className="format-pvp">
        <div className="MoreButtonFormat" align="center"><a className="example_f" href="https://discord.gg/SVwJFE5" target="_blank" rel="nofollow noopener noreferrer">Know More ➤</a></div>
      </div>
    </div>
    <div className="postBox">
      <h1 className="format-head">SILPH TOURNAMENTS</h1>
      <div className="format-pvp">
        <div className="MoreButtonFormat" align="center"><a className="example_f" href="https://discord.gg/SVwJFE5" target="_blank" rel="nofollow noopener noreferrer">Know More ➤</a></div>
      </div>
    </div>
    </div>
    <div className="footer"></div>
    </div>
  );
}

export default Home;
