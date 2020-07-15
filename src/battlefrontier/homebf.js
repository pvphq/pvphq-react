import React from "react";
import BFS2Tour from "./bfs2tour.js";
import "../App.css";
import "../css/Button.scss";


function BFinfo() {
  return (
    <div>
      <div class="bf-image">
    <div class="gyminfo-text">
    <h1>
      <img src="../img/bf/logo.png" alt=""/>
    </h1>
    <p>Cities across India send in their Elite Teams of 7 Fierce PvP'ers to fight it out<br/>
    and claim the Title of PvP Champion City in India!<br/>
    Season 2 sees 18 Teams battle it out in the Prelims, for a spot in the Top 8 Knockout stage.<br/> 
    Pick a side and place your bets, cause the War for Frontier has just started!</p>

    <div className="button_cont" align="center"><a className="example_e" href="https://discord.gg/SVwJFE5" target="_blank" rel="nofollow noopener noreferrer">Join Discord</a></div>

      </div>
    </div>
    <h1 className="heading">⌘ LEADERBOARD </h1>
    <div>
    <p className="side">The Leaderboard for Battle Frontier Season 2 (Group Stages) will be updated here.
       This is just the LB of Top 5 Contenders at the moment. 
       To view the full leaderboard, kindly visit <a href="https://www.pvphq.in/frontier/lb">Frontier Leaderboard</a>. This list is ranked
       according to the Matches Won and the score shows "NumberOfWins/MatchesPlayed"<br/></p>
    <div class="leaderboard">
        <h1>
            <svg className="ico-cup">
            <use href="#cup"></use>
            </svg> Frontier Top 5
        </h1>
  <ol>
  <li>
      <mark>Psystrikers Pondy</mark>
      <small>40/87</small>
    </li>
    <li>
      <mark>Chennaizards</mark>
      <small>35/57</small>
    </li>
    <li>
      <mark>Bengaluru Big Barrels</mark>
      <small>35/60</small>
    </li>
    <li>
      <mark>Mumbaidos</mark>
      <small>34/57</small>
    </li>
    <li>
      <mark>Pune Regigiants</mark>
      <small>31/51</small>
    </li>
    </ol>
</div>

    </div>
    <br/>
    <h1 className="heading">⌘ TEAMS PLAYING </h1>

    <div className="tourcard">
    <BFS2Tour />
    </div>
    </div>
  );
}

export default BFinfo;
