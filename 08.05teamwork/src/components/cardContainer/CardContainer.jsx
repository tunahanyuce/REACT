import React from "react";
import "./CardContainer.scss";

const CardContainer = ({ data, searchPlayer }) => {
  const filteredData =
    searchPlayer.trim() === ""
      ? data
      : data.filter((player) =>
          player.name.toLowerCase().includes(searchPlayer.toLowerCase())
        );
  return (
    <main>
      <div className="card-container">
        {filteredData.lenght > 0 ? (
          filteredData.map((player, index) => (
            <PlayerCard player={player} key={index} />
          ))
        ) : (
          <h3>No Data Found</h3>
        )}
      </div>
    </main>
  );
};

export default CardContainer;
