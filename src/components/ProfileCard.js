import React from "react";
import "../App.css";
import "./ProfileCard.css"

function ProfileCard(props) {
  return (
    <div className="pcard-container">
        <div className="pcard-image">
            <img src={props.image} alt="profile-look"></img>
        </div>
        <div className="pcard-name">
            {props.name}
        </div>
        <p className="aka">AKA</p>
        <div className="pcard-ign">
            {props.ign}
        </div>
        <p className="info">{props.team} | {props.level} | <i class="fas fa-map-marker-alt"></i>{props.location}</p>
          <p className="silphprofilelink">Silph Trainer Card: <a target="_blank" rel="nofollow noopener noreferrer" href={props.silph}>{props.ign}</a></p>
          <p className="discordprofile"><i class="fab fa-discord"></i> {props.discord}</p>
    </div>
  );
}

export default ProfileCard;