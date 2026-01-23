import React from "react";
import "../assets/css/review.css";
import Review_slider from "./Review_slider";
import Image from "next/image";

const Review = () => {
  return (
    <section className="review">
      <div className="container">
        <div className="main-title">
          <h2 className="fs-70">
            Reviews from real customers
            <span>
              <Image
                src="/secondwave.png"
                alt="second wave"
                width={268}
                height={172}
              />
            </span>
          </h2>
          <p>
            Real customers share their experiences with My Job Schedule — honest
            feedback that inspires us to deliver better every day.
          </p>
        </div>
        <Review_slider />
      </div>
    </section>
  );
};

export default Review;
