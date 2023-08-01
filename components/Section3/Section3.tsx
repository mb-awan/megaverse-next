/* eslint-disable @next/next/no-img-element */
import Card from "./Card/Card";
import classes from "./Section3.module.scss";

import React from "react";

const Section3 = () => {
  return (
    <div className={classes.section3}>
      <div className={classes.content}>
        <div className={classes.whatWeDo}>
          <img src="/assests/images/blue-disk.png" alt="*" />
          <span className={classes.text}>What We Do?</span>
          <h1>Experts in every aspect lifecycle</h1>
        </div>

        <Card
          iconPath="/assests/images/mobileApp.png"
          heading="Mobile App Development"
          paras={[
            `At Collax we specialize in designing, building, shipping and
              scaling beautiful, usable products with blazing-fast`,
            `At Collax we specialize in designing, building, shipping and
              scaling...`,
          ]}
        />

        <Card
          iconPath="/assests/images/uiUx.png"
          heading="UI/UX Design"
          paras={[
            `At Collax we specialize in designing, building, shipping and
              scaling beautiful, usable products with blazing-fast`,
            `At Collax we specialize in designing, building, shipping and
              scaling...`,
          ]}
        />

        <Card
          iconPath="/assests/images/webDev.png"
          heading="Web Development"
          paras={[
            `At Collax we specialize in designing, building, shipping and
              scaling beautiful, usable products with blazing-fast`,
            `At Collax we specialize in designing, building, shipping and
              scaling...`,
          ]}
        />
      </div>
    </div>
  );
};

export default Section3;
