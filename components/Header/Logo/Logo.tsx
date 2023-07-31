/* eslint-disable @next/next/no-img-element */
import React from "react";
import classes from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <div style={{ height: "60px" }}></div>
      <div className={classes.logoImage}>
        <img src="/assests/images/logo.png" alt="logo" />
      </div>
    </div>
  );
};

export default Logo;
