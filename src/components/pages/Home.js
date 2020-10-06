import React from "react";
import Footer from "../Footer";
import "../../App.css";
import HeroSection from "../HeroSection";

function Home() {
  return (
    <>
      <HeroSection />
      <div className="row home-block">
        <div className="col-sm-4 home-col">
          <div className="block-title">
            <p>
              <i class="far fa-calendar-check"></i>ONGOING EVENTS
            </p>
          </div>
          <div className="home-event">
            <p className="home-event-text">SOON TO BE UPDATED</p>
          </div>
        </div>
        <div className="col-sm-4 home-col">
          <div className="block-title">
            <p>
              <i class="fas fa-trophy"></i>LEADERBOARD
            </p>
          </div>
          <div className="home-event">
            <p className="home-event-text">SOON TO BE UPDATED</p>
          </div>
        </div>
        <div className="col-sm-4 home-col">
          <div className="block-title">
            <p>
              <i class="far fa-calendar-alt"></i>UPCOMING EVENTS
            </p>
          </div>
          <div className="home-event">
            <p className="home-event-text">SOON TO BE UPDATED</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src="/img/logorulesm.png" alt="HQ Logo"></img>
        </div>
        <div className="rule-heading">
          <h1>ABOUT PVP HQ</h1>
          <p>
            PvP HQ is a Pokemon GO PvP Discord Server. We host Tournaments and
            Leagues in several formats such as our very own{" "}
            <a href="/tom">Tower of Mastery</a>, a balanced and elaborate "Gym
            System" based on the Gyms in the MSGs and Anime. We also host an
            Inter-City Team Tournament called <a href="/bf">Battle Frontier</a>{" "}
            where participants from different cities battle in a pre defined
            battle format to decide the best PvP City in India. These signature
            formats along with the monthly Silph Arena tournaments, Drafts and
            several other formats comprises of our PvP Adventure.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
