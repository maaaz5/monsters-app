import React from "react";
import { Monster } from "../../App";
import Card from "../card/card.component";
import "./card-list.styles.css";

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map((monster, index) => {
        return <Card monster={monster} index={index} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;
