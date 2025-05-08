import React from "react";
import "./PlayerCard.scss";

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <img src={(player, img)} alt="" width="200px" />
      <div className="statistics">
        {player.statistics.map((statistics, index) => (
          <p key={index}> 🏀{statistics}</p>
        ))}
      </div>
      <h4>{player.name}</h4>
    </div>
  );
};

export default PlayerCard;
