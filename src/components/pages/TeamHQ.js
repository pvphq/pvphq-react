import React from "react";
import Footer from "../Footer";
import ProfileCard from "../ProfileCard";
import "../../App.css";

function TeamHQ() {
  return (
    <>
      <div className="teamhq-banner">
        <p>PvP HQ Team:</p>
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

export default TeamHQ;
