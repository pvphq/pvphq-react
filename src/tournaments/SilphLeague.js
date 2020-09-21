import React from "react";
import TeamTour4 from "../tournaments/TeamTour4.js";
import "../App.css";


function SilphLeague() {
  return (
    <div>
      <div class="silph-image">
    <div class="silph-text">
    <h1>
      <img src="../img/catalogo.png" alt=""/>
    </h1>
    <p> The Catacomb Cup - inspired by the mysteries that lie beneath the surface! <br/> By Silph Arena!
    </p>
    <div className="button_cont" align="center"><a className="example_e" href="https://silph.gg/cup/catacomb" target="_blank" rel="nofollow noopener noreferrer">Rules</a></div>

    <div className="button_cont" align="center"><a className="example_e" href="https://discord.gg/SVwJFE5" target="_blank" rel="nofollow noopener noreferrer">Discord</a></div>

      </div>
    </div>
    <h1 className="heading">⌘ TOURNAMENTS</h1>
    <div className="tourcard">
    <TeamTour4 />
    </div>
    </div>
  );
}

export default SilphLeague;
