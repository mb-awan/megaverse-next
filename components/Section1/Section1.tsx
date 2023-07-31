/* eslint-disable @next/next/no-img-element */
import classes from "./Section1.module.scss";

const Section1 = () => {
  return (
    <div className={classes.section1}>
      <div className={classes.container}>
        <div className={classes.intro}>
          <h1 className={classes.statementHeading}>
            We make things look good{" "}
          </h1>
          <p className={classes.description}>
            We provide robust best web development solutions and services on
            demand according to need of our clients.
          </p>
          <div className={classes.btns}>
            <button type="button" className={classes.visitCaseBtn}>
              Visit Case Studios
            </button>
            <button type="button" className={classes.aboutBtn}>
              About magaverse
              <img src="/assests/images/arrow-right.svg" alt="arrow" />
            </button>
          </div>
        </div>
        <div className={classes.computeImage}>
          <img src="/assests/images/computer.png" alt="computer" />
        </div>
        <div className={classes.technologies}>
          <img src="/assests/images/nodejs.png" alt="node" />
          <img src="/assests/images/react.png" alt="react" />
          <img src="/assests/images/js.png" alt="js" />
          <img src="/assests/images/tech1.png" alt="tech1" />
          <img src="/assests/images/nextjs.png" alt="next" />
          <img src="/assests/images/flutter.png" alt="flutter" />
          <img src="/assests/images/tech2.png" alt="tech2" />
          <img src="/assests/images/php.png" alt="php" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
