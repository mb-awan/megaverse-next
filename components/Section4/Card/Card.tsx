/* eslint-disable @next/next/no-img-element */
import classes from "./Card.module.scss";

import React from "react";

interface CardProps {
  iconPath: string;
  heading: string;
  paras: string[];
}

const Card = ({ iconPath, heading, paras }: CardProps) => {
  return (
    <div className={classes.cards}>
      <div className={classes.cardIcon}>
        <img src={iconPath} alt="cardIcon" />
      </div>
      <div className={classes.cardContent}>
        <h1>{heading}</h1>

        {paras.map((paraText, index) => (
          <p key={index}>{paraText}</p>
        ))}

        <button type="button">
          Learn More
          <img src="/assests/images/arrow-right.svg" alt="arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default Card;
