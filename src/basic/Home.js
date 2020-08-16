import React from "react";
import "../App.css";
import "../css/Button.scss";

function Home() {
  return (
    <div>
      <div class="home-image">
        <div class="home-text">
          <h1>
            <img src="../img/logo.png" alt="" />
          </h1>
          <p className="texttop">
            A Discord PvP Server for Pokémon GO PvP! Join if you have the valor
            and skills to prove your worth and become the very best!
          </p>
          <div className="button_cont" align="center">
            <a
              className="example_e"
              href="https://discord.gg/SVwJFE5"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Join The Discord
            </a>
          </div>
        </div>
      </div>
      <h1 className="heading">THE LATEST</h1>
      <div className="row-format">
        
        <div className="postBox">
          <h1 className="dateofpost">ToM Season 1 - Finals</h1>
          <div className="post post1">
            <div className="MoreButton" align="center">
              <a
                className="example_g"
                href="https://discord.gg/SVwJFE5"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                More ➤
              </a>
            </div>
          </div>
        </div>
        <div className="postBox">
          <h1 className="dateofpost">ToM Season 2 Announced</h1>
          <div className="post post2">
            <div className="MoreButton" align="center">
              <a
                className="example_g"
                href="https://discord.gg/SVwJFE5"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                More ➤
              </a>
            </div>
          </div>
        </div>
        <div className="postBox">
          <h1 className="dateofpost">Scoville Cup - August</h1>
          <div className="post post3">
            <div className="MoreButton" align="center">
              <a
                className="example_g"
                href="https://discord.gg/SVwJFE5"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                More ➤
              </a>
            </div>
          </div>
        </div>
        <div className="postBox">
          <h1 className="dateofpost">Battle Frontier - Finals</h1>
          <div className="post post4">
            <div className="MoreButton" align="center">
              <a
                className="example_g"
                href="https://discord.gg/SVwJFE5"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                More ➤
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="heading">PvP FORMATS</h1>
      <div className="row-format">
        <div className="postBoxF">
          <h1 className="format-head">TOWER OF MASTERY</h1>
          <div className="format-pvp">
            <p className="format-text">On the lookout for a New Challenge!? <br/> Or do you miss the old main series game and the thrill of overcoming difficulties and collecting all 8 badges?
    The <a href="https://www.pvphq.in/gyms-info">Tower of Mastery </a> is here to challenge your PvP skills as you face off against Top Gym Leaders in their Gyms occupying 8 unique cities spread across India.
    Beat the 4 Gym Leaders in their unique typing Gym in one go to Earn that Gym Badge!
    Defeat the Elites and have a chance of becoming the Champion!</p>
            <div className="MoreButtonFormat" align="center">
              <a
                className="example_f"
                href="https://www.pvphq.in/gyms-info"
              >
                Challenge ➤
              </a>
            </div>
          </div>
        </div>
        <div className="postBoxF">
          <h1 className="format-head">BATTLE FRONTIER</h1>
          <div className="format-pvp">
            <div className="MoreButtonFormat" align="center">
              <a
                className="example_f"
                href="https://discord.gg/SVwJFE5"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Know More ➤
              </a>
            </div>
          </div>
        </div>
        <div className="postBoxF">
          <h1 className="format-head">SILPH TOURNAMENTS</h1>
          <div className="format-pvp">
            <div className="MoreButtonFormat" align="center">
              <a
                className="example_f"
                href="https://discord.gg/SVwJFE5"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Know More ➤
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>
          Pokémon And All Respective Names are Trademark <br/> & © of Nintendo
          1996-2020
        </p>
        <p>Pokémon GO is Trademark & © of Niantic, Inc.</p>
        <p>©2020 PvP HQ | All Rights Reserved | PvP HQ India</p>
      </div>
    </div>
  );
}

export default Home;
