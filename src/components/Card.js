import React from "react";
import { Link } from "react-router-dom";
import sass from "../sass/components/card.module.scss";

const Card = (props) => {
  return (
    <Link to={`accommodation/${props.accommodation.id}`}>
      <div className={sass.card}>
        <div className={sass.card_gradient}></div>
        <img
          className={sass.card_img}
          src={props.accommodation.cover}
          alt="card accommodation"
        />
        <h3 className={sass.card_title}>{props.accommodation.title}</h3>
      </div>
    </Link>
  );
};

export default Card;
