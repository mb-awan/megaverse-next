/* eslint-disable @next/next/no-img-element */
import classes from "./Section6.module.scss";

import React from "react";

const Section6 = () => {
  return (
    <div className={classes.section6}>
      <div className={classes.upperHalf}>
        <h6>We are Already Build Solution for...</h6>
        <ul className={classes.clientsList}>
          <li>
            <img src="/assests/images/molie.png" alt="molie" />
          </li>
          <li>
            <img src="/assests/images/affirm.png" alt="affirm" />
          </li>
          <li>
            <img src="/assests/images/paysafe.png" alt="paysafe" />
          </li>
          <li>
            <img src="/assests/images/qlik.png" alt="qlik" />
          </li>
          <li>
            <img src="/assests/images/walmart.png" alt="walmart" />
          </li>
          <li>
            <img src="/assests/images/square.png" alt="square" />
          </li>
        </ul>
        <div className={classes.subscriptionBox}>
          <div className={classes.smallHeading}>
            <img src="/assests/images/blue-disk.png" alt="*" />
            <span>Get Update</span>
          </div>

          <h1>Get latest updates and deals</h1>
          <div className={classes.subscriptionForm}>
            <input type="text" name="email" placeholder="Enter your email" />
            <button type="button">
              Subscribe
              <img src="/assests/images/arrow-right-white.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>

      <div className={classes.wavyFooter}>
        <div className={classes.curve}></div>
      </div>
    </div>
  );
};

export default Section6;
