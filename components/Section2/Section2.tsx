/* eslint-disable @next/next/no-img-element */
import classes from "./Section2.module.scss";

import React from "react";

const Section2 = () => {
  return (
    <div className={classes.section2}>
      <img className={classes.ribbon} src="/assests/images/ribbon.png" alt="" />

      <div className={classes.oneCircleContainer}>
        <img
          className={classes.circle}
          src="/assests/images/circle.png"
          alt="Circular Image"
        />
        <img
          className={classes.disk1}
          src="/assests/images/blue-disk.png"
          alt="*"
        />

        <img
          className={classes.disk2}
          src="/assests/images/blue-disk.png"
          alt="*"
        />
      </div>

      <div className={classes.twoCirclesContainer}>
        <div className={classes.outerCircle}>
          <div className={classes.inneCircle}></div>
        </div>
        {/* <img
          className={classes.circle1}
          src="/assests/images/circle.png"
          alt="Circular Image"
        />
        <img
          className={classes.circle2}
          src="/assests/images/circle.png"
          alt="Circular Image"
        /> */}
      </div>

      <div className={classes.content}>
        <div className={classes.whatWeDoText}>
          We deploy world-class <span>Web Development</span> on demand. that can
          design, build, ship and scale your vision in the most efficient way.
        </div>
        <div className={classes.successContainers}>
          <div className={classes.container1}>
            <div className={classes.icon}>
              <img src="/assests/images/satisfaction.svg" alt="satifation" />
            </div>
            <div className={classes.info}>
              <h6>100%</h6>
              <p>Client Satisfaction</p>
            </div>
          </div>
          <div className={classes.container2}>
            <div className={classes.icon}>
              <img src="/assests/images/clipboard.svg" alt="satifation" />
            </div>
            <div className={classes.info}>
              <h6>1200+</h6>
              <p>Complete Project</p>
            </div>
          </div>
          <div className={classes.container3}>
            <div className={classes.icon}>
              <img src="/assests/images/setting.svg" alt="satifation" />
            </div>
            <div className={classes.info}>
              <h6>1800+</h6>
              <p>Development Resources</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
