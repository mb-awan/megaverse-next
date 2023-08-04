"use client";

/* eslint-disable @next/next/no-img-element */
import FeedbackCard from "./Card/FeedbackCard";
import classes from "./Section5.module.scss";
import Slider from "react-slick";

const Section5 = () => {
  const responsive = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1.5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
      },
    },
  ];
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2.5,
    slidesToScroll: 3.8,
    autoplay: true,
    autoplayySpeed: 1000,
    direction: "ltr",
    rows: 1,

    responsive,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2.5,
    slidesToScroll: 1.5,
    autoplay: true,
    autoplayySpeed: 1300,
    direction: "ltr",
    rows: 1,

    responsive,
  };
  return (
    <div className={classes.section5}>
      <img className={classes.ribbon} src="/assests/images/ribbon.png" alt="" />

      <header className={classes.header}>
        <div className={classes.heading}>
          <img src="/assests/images/blue-disk.png" alt="*" />
          <span className={classes.text}>Client Testimonial</span>
          <h1>Customer feedback</h1>
        </div>
      </header>

      <div className={classes.content}>
        <Slider {...settings1}>
          <div>
            <FeedbackCard
              avatarPath="/assests/images/darrell-steward.svg"
              info={{
                name: "Darrell Steward",
                occupation: "Founder of (Rirax)",
              }}
              rating={4}
              feedback={`Collax is only a tool. It will take you wherever you wish, but it will not replace you as the driver. It will take you wherever you wish, but it will not replace you as the driver.`}
            />
          </div>
          <div>
            <FeedbackCard
              avatarPath="/assests/images/floyd-miles.svg"
              info={{ name: "Floyd Miles", occupation: "CEO of (Orix)" }}
              rating={5}
              feedback={`Collax was very diligent, polite and extremely customer oriented. I think Monika will go far with that attitude and ...he is such a honest, decent and reliable.`}
            />
          </div>
          <div>
            <FeedbackCard
              avatarPath="/assests/images/albert-flores.svg"
              info={{ name: "Albert Flores", occupation: "Founder of (Rirax)" }}
              rating={4}
              feedback={`Wow. What a great experience with this copywriter. Collax is a very talented copywriter. yesterday I got his first Email that was amazing.`}
            />
          </div>

          <div>
            <FeedbackCard
              avatarPath="/assests/images/robert-fox.svg"
              info={{ name: "Robert Fox", occupation: "CEO of (Orix)" }}
              rating={5}
              feedback={`During the project that we did together, Muhammad felt more like a partner rather than a vendor, so much care and attention to detail.`}
            />
          </div>
          <div>
            <FeedbackCard
              avatarPath="/assests/images/robert-fox.svg"
              info={{ name: "Robert Fox", occupation: "CEO of (Orix)" }}
              rating={5}
              feedback={`During the project that we did together, Muhammad felt more like a partner rather than a vendor, so much care and attention to detail.`}
            />
          </div>
        </Slider>
        <Slider {...settings2}>
          <div>
            <FeedbackCard
              avatarPath="/assests/images/dianne-russell.svg"
              info={{ name: "Dianne Russell", occupation: "CEO of (Orix)" }}
              rating={5}
              feedback={`Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a true professional. he is such a honest, decent and reliable. He always provide good service`}
            />
          </div>
          <div>
            <FeedbackCard
              avatarPath="/assests/images/jerome-bell.svg"
              info={{ name: "Jerome Bell", occupation: "CEO of (Orix)" }}
              rating={3}
              feedback={`Collax is a very talented designer and his most valuable role is to teach design in a professional way. He trained design courses under my company Chartered Professional`}
            />
          </div>
          <div>
            <FeedbackCard
              avatarPath="/assests/images/robert-fox.svg"
              info={{ name: "Robert Fox", occupation: "CEO of (Orix)" }}
              rating={5}
              feedback={`During the project that we did together, Muhammad felt more like a partner rather than a vendor, so much care and attention to detail.`}
            />
          </div>
          <div>
            <FeedbackCard
              avatarPath="/assests/images/robert-fox.svg"
              info={{ name: "Robert Fox", occupation: "CEO of (Orix)" }}
              rating={5}
              feedback={`During the project that we did together, Muhammad felt more like a partner rather than a vendor, so much care and attention to detail.`}
            />
          </div>
          <div>
            <FeedbackCard
              avatarPath="/assests/images/robert-fox.svg"
              info={{ name: "Robert Fox", occupation: "CEO of (Orix)" }}
              rating={5}
              feedback={`During the project that we did together, Muhammad felt more like a partner rather than a vendor, so much care and attention to detail.`}
            />
          </div>
          <div>
            <FeedbackCard
              avatarPath="/assests/images/robert-fox.svg"
              info={{ name: "Robert Fox", occupation: "CEO of (Orix)" }}
              rating={5}
              feedback={`During the project that we did together, Muhammad felt more like a partner rather than a vendor, so much care and attention to detail.`}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Section5;
