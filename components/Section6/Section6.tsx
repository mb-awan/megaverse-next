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
            <input type="text" name="email" placeholder="Enter your mail" />
            <button type="button">
              Subscribe
              <img src="/assests/images/arrow-right-white.svg" alt="arrow" />
            </button>
          </div>
          <img
            className={classes.borderDesignImg}
            src="/assests/images/subscription-box-side.png"
            alt=""
          />
        </div>
      </div>
      <div className={classes.footer}>
        <img src="/assests/images/footer-bg.png" alt="footer-bg" />

        <div className={classes.footerContent}>
          <div className={classes.logo}>
            <img src="/assests/images/logo.png" alt="megaverse" />
          </div>
          <div className={classes.line1}>
            <h6>
              More than 10 years in the game and we`re just getting started. 🤝
            </h6>
            <button type="button" className={classes.availableBtn}>
              <img
                src="/assests/images/footer-available-btn-border.svg"
                alt=""
              />
              Available for new Project
            </button>
          </div>

          <hr />

          <div className={classes.line2}>
            <p>© 2023 Megaverse Technologies , All Right Received.</p>
            <ul>
              <li>Support</li>
              <li>Privacy Policy</li>
              <li>Terms and conditions</li>
            </ul>
          </div>

          <hr />

          <div className={classes.line3}>
            <div className={classes.contactUs}>
              <span>
                <img src="/assests/images/location.svg" alt="location" />
                68 Aourangzaib Block New Garden Tow Lahore
              </span>
              <span>
                <img src="/assests/images/mail.svg" alt="mail" />
                Support@megavers.com
              </span>
            </div>

            <ul className={classes.socialMediaIcons}>
              <li>
                <img src="/assests/images/linkedin.svg" alt="linkedin" />
              </li>
              <li>
                <img src="/assests/images/facebook.svg" alt="facebook" />
              </li>
              <li>
                <img src="/assests/images/insta.svg" alt="insta" />
              </li>
              <li>
                <img src="/assests/images/youtube.svg" alt="youtube" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
