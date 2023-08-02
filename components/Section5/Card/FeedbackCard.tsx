/* eslint-disable @next/next/no-img-element */
import StarIcon from "@/components/Stars/Star";
import classes from "./FeedbackCard.module.scss";

import React from "react";

interface FeedbackProps {
  avatarPath: string;
  info: {
    name: string;
    occupation: string;
  };
  rating: number;
  feedback: string;
}

const FeedbackCard = ({
  avatarPath,
  info,
  rating,
  feedback,
}: FeedbackProps) => {
  return (
    <div className={classes.feedbackCard}>
      <div className={classes.header}>
        <div className={classes.avatar}>
          <img src={avatarPath} alt="avatar" />
        </div>
        <div className={classes.info}>
          <h3 className={classes.name}>{info.name}</h3>
          <p className={classes.occupation}> {info.occupation}</p>
        </div>
        <div className={classes.ratings}>
          {Array.from({ length: 5 }, (_, index) => (
            <StarIcon key={index} filled={index < rating} />
          ))}
        </div>
      </div>
      <div className={classes.body}>
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
