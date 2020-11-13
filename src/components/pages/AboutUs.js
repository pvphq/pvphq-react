import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import ProfileCard from "../ProfileCard";
import "../../App.css";

function AboutUs() {
  return (
    <>
      <div className="teamhq-banner">
        <p>About Us:</p>
      </div>
      <br></br>
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
      </div>
      <div className="heading">
        <h2>Admin:</h2>
      </div>
      <div className="row">
        <ProfileCard image="../img/Team/Diamurd.png" name="Diamurd" ign="Diamurd" team="Mystic" level="37" location="Mumbai, India" silph="https://sil.ph/Diamurd" discord="Onomuzaran#0974" />
        <ProfileCard image="../img/Team/Dev.png" name="Dev" ign="PsiXnion" team="Valor" level="40" location="Jabalpur, India" silph="https://sil.ph/PsiXnion" discord="PsiAnion#6569" />
      </div>
      <div className="heading">
        <h2>Moderators:</h2>
      </div>
      <div className="row">
      <ProfileCard image="../img/Team/Josh.png" name="Joshua" ign="JoshV009" team="Mystic" level="40" location="Gurgaon, India" silph="https://sil.ph/JoshV009" discord="Joshv009#6368" />
      <ProfileCard image="../img/Team/MM.png" name="M&M" ign="MightyMajesty" team="Mystic" level="40" location="Mumbai, India" silph="https://sil.ph/mightymajesty" discord="mightymajesty1#8124" />
      <ProfileCard image="../img/Team/Gowthamm.png" name="Goddamn" ign="Gowthamm432" team="Valor" level="40" location="Pondicherry, India" silph="https://sil.ph/Gowthamm432" discord="Gowtahmm432#7871" />
      <ProfileCard image="../img/Team/Sarc.png" name="NarcTechie" ign="SarcTechie" team="Valor" level="40" location="Delhi, India" silph="https://sil.ph/SarcTechie_" discord="SarcTechie#2719" />
      <ProfileCard image="../img/Team/Sumatru.png" name="Dr. Sumo" ign="Sumatru" team="Instinct" level="40" location="Delhi, India" silph="https://sil.ph/Sumatru" discord="evildisaster23#7393" />
      <ProfileCard image="../img/Team/Pritam.png" name="Pritam Da" ign="Apratim0508" team="Mystic" level="40" location="Delhi, India" silph="https://sil.ph/Apratim0508" discord="Apratim0508#1623" />
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
