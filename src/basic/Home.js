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
    <p className="texttop">A Discord PvP Server for Pokémon GO PvP!<br/> Join if you have the valor and skills to prove your worth and become the very best!</p>
    <div className="button_cont" align="center"><a className="example_e" href="https://discord.gg/SVwJFE5" target="_blank" rel="nofollow noopener noreferrer">Join The Discord</a></div>
      </div>
      
    </div>
    <div>
    <h1 className="heading">⌘ ABOUT</h1>
    <p className="textin">
      PvP HQ is a Pokémon GO PvP focused Discord Server that hosts PvP Leagues and Tournaments regularily. 
      There is always a tournament on-going for anyone to join. We are based in India but welcome players from all over the 
      world to participate in the PvP Arena. Primarily, the major attractions are our very own Anime like Gym League called the <a href="https://www.pvphq.in/gyms-info">Tower of Mastery</a> and 
      the Inter-City Team Tournament League called <a href="https://www.pvphq.in/frontier">Battle Frontier</a>. 
      We host regular Silph Tournaments and Day 1 monthly <a href="https://silph.gg/">Silph Arena</a> Themed Cups! 
    </p>
    </div>
    <div>
    <h1 className="heading">⌘ TOWER OF MASTERY</h1>
    <p className="hometext homeside">
    On the lookout for a New Challenge!? Or do you miss the old main series game and the thrill of overcoming difficulties and collecting all 8 badges?
    The <a href="https://www.pvphq.in/gyms-info">Tower of Mastery</a> is here to challenge your PvP skills as you face off against Top Gym Leaders in their Gyms occupying 8 unique cities spread across India.
    Beat the 4 Gym Leaders in their unique typing Gym in one go to Earn that Gym Badge!
    Traverse across the all the gyms with each having their own unique <bold>Dual Typing</bold> and Bans and beat them to earn all 8 Badges to get a chance to battle the Elites!
    Defeat the Elites and have a chance of becoming the Champion! 
    </p>
    <div className="homeimg">
    <a href="https://www.pvphq.in/gyms-info"><img src="../img/TOMB1.png" alt=""/></a>
    </div>
    </div>
    </div>
  );
}

export default Home;
