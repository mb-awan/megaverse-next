/* eslint-disable @next/next/no-img-element */
import WorkCard from "./Card/WorkCard";
import Card from "./Card/WorkCard";
import classes from "./Section4.module.scss";

import React from "react";

const Section4 = () => {
  return (
    <div className={classes.section4}>
      <header className={classes.header}>
        <div className={classes.heading}>
          <img src="/assests/images/blue-disk.png" alt="*" />
          <span className={classes.text}>What We Do?</span>
          <h1>Creative work.</h1>
        </div>
        <div className={classes.workNavBar}>
          <nav>
            <ul>
              <li>All</li>
              <li style={{ color: "#292930" }}>Nodejs</li>
              <li>RoR</li>
              <li>React Native</li>
              <li>Python</li>
              <li>Flutter</li>
              <li>iOS</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className={classes.content}>
        <div className={classes.contentSections}>
          <WorkCard
            firstCard={true}
            heading="Hosting Website Design "
            imagePath="/assests/images/hosting.png"
            paras={[
              `Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.`,
            ]}
            technologies={[
              {
                name: "nodejs",
                iconPath: "/assests/images/nodejs.png",
              },
              {
                name: "reactjs",
                iconPath: "/assests/images/react.png",
              },
              {
                name: "js",
                iconPath: "/assests/images/js.png",
              },
              {
                name: "tech1",
                iconPath: "/assests/images/tech1.png",
              },
            ]}
          />
        </div>

        <div className={classes.contentSections}>
          <WorkCard
            firstCard={false}
            heading="Medical Website "
            imagePath="/assests/images/medical.png"
            paras={[
              `Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.`,
            ]}
            technologies={[
              {
                name: "nodejs",
                iconPath: "/assests/images/nodejs.png",
              },
              {
                name: "reactjs",
                iconPath: "/assests/images/react.png",
              },
              {
                name: "js",
                iconPath: "/assests/images/js.png",
              },
              {
                name: "tech1",
                iconPath: "/assests/images/tech1.png",
              },
            ]}
          />
          <WorkCard
            firstCard={false}
            heading="Pet Care Website "
            imagePath="/assests/images/petCare.png"
            paras={[
              `Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.`,
            ]}
            technologies={[
              {
                name: "nodejs",
                iconPath: "/assests/images/nodejs.png",
              },
              {
                name: "reactjs",
                iconPath: "/assests/images/react.png",
              },
              {
                name: "js",
                iconPath: "/assests/images/js.png",
              },
              {
                name: "tech1",
                iconPath: "/assests/images/tech1.png",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
};

export default Section4;
