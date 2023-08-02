/* eslint-disable @next/next/no-img-element */
import StarIcon from "../Stars/Star";
import FeedbackCard from "./Card/FeedbackCard";
import classes from "./Section5.module.scss";

import React from "react";

const Section5 = () => {
  return (
    <div className={classes.section5}>
      <header className={classes.header}>
        <div className={classes.heading}>
          <img src="/assests/images/blue-disk.png" alt="*" />
          <span className={classes.text}>Client Testimonial</span>
          <h1>Customer feedback</h1>
        </div>
      </header>

      <div className={classes.content}>
        <FeedbackCard
          avatarPath="/assests/images/darrell-steward.svg"
          info={{ name: "Darrell Steward", occupation: "Founder of (Rirax)" }}
          rating={4}
          feedback={`Collax is only a tool. It will take you wherever you wish, but it will not replace you as the driver. It will take you wherever you wish, but it will not replace you as the driver.`}
        />

        <FeedbackCard
          avatarPath="/assests/images/floyd-miles.svg"
          info={{ name: "Floyd Miles", occupation: "CEO of (Orix)" }}
          rating={5}
          feedback={`Collax was very diligent, polite and extremely customer oriented. I think Monika will go far with that attitude and ...he is such a honest, decent and reliable.`}
        />

        <FeedbackCard
          avatarPath="/assests/images/albert-flores.svg"
          info={{ name: "Albert Flores", occupation: "Founder of (Rirax)" }}
          rating={4}
          feedback={`Wow. What a great experience with this copywriter. Collax is a very talented copywriter. yesterday I got his first Email that was amazing.`}
        />

        <FeedbackCard
          avatarPath="/assests/images/dianne-russell.svg"
          info={{ name: "Dianne Russell", occupation: "CEO of (Orix)" }}
          rating={5}
          feedback={`Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a true professional. he is such a honest, decent and reliable. He always provide good service`}
        />

        <FeedbackCard
          avatarPath="/assests/images/jerome-bell.svg"
          info={{ name: "Jerome Bell", occupation: "CEO of (Orix)" }}
          rating={3}
          feedback={`Collax is a very talented designer and his most valuable role is to teach design in a professional way. He trained design courses under my company Chartered Professional`}
        />

        <FeedbackCard
          avatarPath="/assests/images/robert-fox.svg"
          info={{ name: "Robert Fox", occupation: "CEO of (Orix)" }}
          rating={5}
          feedback={`During the project that we did together, Muhammad felt more like a partner rather than a vendor, so much care and attention to detail.`}
        />
      </div>
    </div>
  );
};

export default Section5;
