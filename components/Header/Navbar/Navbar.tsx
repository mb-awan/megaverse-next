/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import classes from "./Navbar.module.scss";
import React, { useState } from "react";
// import { scroller } from "react-scroll";

const Navbar = () => {
  const [selectedBtn, setSelectedBtn] = useState("home");

  const selectHomeHandler = () => {
    setSelectedBtn("home");
  };

  const selectContactUsHandler = () => {
    setSelectedBtn("contactUs");
    // scroller.scrollTo("footer", {
    //   smooth: true,
    //   duration: 1000,
    //   offset: -50,
    // });
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.navbackgound}>
        <div className={classes.navBtn}>
          <img src="/assests/images/nav-button.svg" alt="nav-btn" />
        </div>
      </div>

      <nav className={classes.navigation}>
        <div className={classes.navLeftBtns}>
          <button
            type="button"
            onClick={selectHomeHandler}
            className={`${classes.homeBtn} ${
              selectedBtn === "home" ? classes.activeBtn : ""
            }`}
          >
            Home
          </button>
          <button
            type="button"
            onClick={selectContactUsHandler}
            className={`${classes.contactBtn} ${
              selectedBtn === "contactUs" ? classes.activeBtn : ""
            }`}
          >
            Contact Us
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
