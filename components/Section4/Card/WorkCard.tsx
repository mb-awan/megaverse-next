/* eslint-disable @next/next/no-img-element */
import classes from "./WorkCard.module.scss";

import React from "react";

interface CardProps {
  firstCard: boolean;
  imagePath: string;
  heading: string;
  paras: string[];
  technologies: {
    name: string;
    iconPath: string;
  }[];
}

const WorkCard = ({
  firstCard,
  imagePath,
  heading,
  paras,
  technologies,
}: CardProps) => {
  return (
    <div className={firstCard ? classes.firstWorkCard : classes.workCard}>
      <div className={classes.cardImage}>
        <img src={imagePath} alt={heading} />
      </div>
      <div className={classes.cardContent}>
        <h1>{heading}</h1>

        {paras.map((paraText, index) => (
          <p key={index}>{paraText}</p>
        ))}
        <div>
          {technologies.map((technology, index) => (
            <img key={index} src={technology.iconPath} alt={technology.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
