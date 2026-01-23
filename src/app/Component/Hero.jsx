import React from "react";
import "../assets/css/hero-section.css";
import TypingText from "./TypingText";
import LogoMarquee from "./LogoMarquee";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="main-title">
            <h1 className="fs-90">
              <span className="width">
                {" "}
                A Smarter Schedule for{" "}
                <span className="main_img">
                  <Image
                    src="/hastagline.png"
                    alt="hastag"
                    width={200}
                    height={100}
                  />
                </span>{" "}
              </span>
              <TypingText />
            </h1>
            <h2 className="fs-25">Work Smarter. Inspect More. Drive Less.</h2>
            <p>
              My Job Schedule helps home inspectors reduce travel time, complete
              more inspections, and keep each workday calm and organized. Less
              driving means more earning, and a smoother day for you and your
              clients.
            </p>

            <div className="ain-btns">
              <a href="#" className="c-btn">
                Start Now
              </a>
              <a href="#" className="c-btn">
                List Your Company
              </a>
            </div>

            <small>
             With no user limits <a href="#"> Discover why.</a>
            </small>
          </div>

          {/* <LogoMarquee /> */}

          <div className="main-vector">
            <div className="vector-img">
              <Image
                src="/vectorcrat.svg"
                alt="vector"
                width={185}
                height={185}
              />
            </div>
            <div className="main-deashboard">
              <Image
                src="/hero_image-deashborad.png"
                alt="dashboard"
                width={1048}
                height={496}
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
