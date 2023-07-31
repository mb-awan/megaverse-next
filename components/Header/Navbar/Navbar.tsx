/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbackgound}>
        <div className={classes.navBtn}>
          <img src="/assests/images/nav-button.svg" alt="nav-btn" />
        </div>
      </div>

      <nav>
        <div className={classes.navLeftBtns}>
          <button type="button" className={classes.homeBtn}>
            Home
          </button>
          <button type="button" className={classes.contactBtn}>
            contact Us
          </button>
        </div>
        <div className={classes.navRightBtns}>
          <button type="button" className={classes.talkBtn}>
            Let's Talk
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
