import React from "react";
import { Monster } from "../../App";
import "./card.styles.css";

type CardProps = {
  monster: Monster;
  index: number;
};
const Card = ({ monster, index }: CardProps) => {
  const { id, name, email } = monster;
  return (
    <div
      key={id}
      className="card-container"
      style={{
        animationDelay: `${index * 50}ms`,
        animationFillMode: "backwards",
      }}
    >
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
