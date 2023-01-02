import React from "react";

function TrickCard({ stance, name, obstacle, tutorial }) {
  return (
    <div className="trick-card">
      <p>
        {stance} {name}
      </p>
      <p>Obstacle: {obstacle}</p>
      <p>Link to Tutorial: </p>
      <a href={tutorial}>{tutorial}</a>
    </div>
  );
}

export default TrickCard;
