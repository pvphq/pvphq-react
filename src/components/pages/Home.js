import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import "../../App.css";
import HeroSection from "../HeroSection";
import { Button } from "../Button";
import Card from "../Card";

function Home() {
  return (
    <>
      <HeroSection />
      <div>
        {/* <div>
          <img src="/img/logorulesm.png" alt="HQ Logo"></img>
        </div> */}
        <div className="heading">
          <h1>PVP FORMATS:</h1>
          <div className="row formats">
          <Card image="../img/ToMHomeCard.png" heading="TOWER OF MASTERY" description="Master all the Types in the Gym System of HQ inspired from the MSGs & Anime."/>
          <Card image="../img/BFHomeCard.png" heading="BATTLE FRONTIER" description="Team Tournament between all PvP active cities in India to find the very best team." />
          <Card image="../img/SilphHomeCard.png" heading="SILPH TOURNAMENTS" description="Ranked Tournaments both Extended & Live for every month's Silph Theme." />
          <Card image="../img/CustomHomeCard.png" heading="CUSTOM TOURNAMENTS" description="Several other formats like Drafts & Nuzlocke are also hosted in HQ." />
          </div>
        </div>
        <div className="heading">
          <h1>OTHER EVENTS:</h1>
          <div className="row formats">
          <Card image="../img/MKBHomeCard.png" heading="MANNY KI BAAT" description="A Talk Show hosted by SarcTechie with Guests talking about PoGO PvP!"/>
          <Card image="../img/CDHomeCard.png" heading="COMMUNITY DAY CONTEST" description="Contests held relevent to Community Day are hosted in HQ with prizes." />
          </div>
        </div>
        <div className="heading">
          <h1>ABOUT US:</h1>
          <div className="formats">
            <h5 className="headfive">
            PvP HQ is a Pokemon GO PvP oriented Discord Server.  <br/>  We are based in India, 
            but we welcome participation from all around the world, as it's a journey to be the very best. <br></br>
             <br/> We host Tournaments and
            Leagues in several formats such as our very own{" "}
            <Link to="/tom">Tower of Mastery</Link>, a balanced and elaborate "Gym
            System" based on the Gyms in the MSGs and Anime. We also host an
            Inter-City Team Tournament called <Link to="/bf">Battle Frontier</Link> {" "}
            where participants from different cities battle in a pre defined
            battle format to decide the best PvP City in India. These signature
            formats along with the monthly Silph Arena tournaments, Drafts and
            several other formats comprises of our PvP Adventure.
            </h5>
            <br></br>
            <div className="button-home">
            <a href="/team-hq">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
            >
              MEET THE TEAM
            </Button>
            </a>
            
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
