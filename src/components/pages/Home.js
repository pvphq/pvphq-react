import React from "react";
import Footer from "../Footer";
import "../../App.css";
import HeroSection from "../HeroSection";
import Card from "../Card";

function Home() {
  return (
    <>
      <HeroSection />
      {/* <div className="row home-block">
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
      </div> */}
      <div>
        {/* <div>
          <img src="/img/logorulesm.png" alt="HQ Logo"></img>
        </div> */}
        <div className="heading">
          <h1>PVP FORMATS</h1>
          <div className="row formats">
          <Card image="../img/ToMHomeCard.png" heading="TOWER OF MASTERY" description="Master all the Types in the Gym System of HQ inspired from the MSGs & Anime."/>
          <Card image="../img/BFHomeCard.png" heading="BATTLE FRONTIER" description="Team Tournament between all PvP active cities in India to find the very best team." />
          <Card image="../img/SilphHomeCard.png" heading="SILPH TOURNAMENTS" description="Ranked Tournaments both Extended & Live for every month's Silph Theme." />
          <Card image="../img/CustomHomeCard.png" heading="CUSTOM TOURNAMENTS" description="Several other formats like Drafts & Nuzlocke are also hosted in HQ." />
          </div>
        </div>
        <div className="heading">
          <h1>OTHER EVENTS</h1>
          <div className="row formats">
          <Card image="../img/MKBHomeCard.png" heading="MANNY KI BAAT" description="A Talk Show hosted by SarcTechie with several Guests regarding Pokemon GO PvP!"/>
          <Card image="../img/CDHomeCard.png" heading="COMMUNITY DAY CONTEST" description="Contests held relevent to Community Day are hosted in HQ with prizes." />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
