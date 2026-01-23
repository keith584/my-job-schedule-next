import React from "react";
import "../assets/css/get_start.css";
import Image from "next/image";

const GetStarted = ({
  title,
  titleImg,
  description,
  buttonText,
  buttonLink,
  mainImage,
  bigVector,
  tildeImage,
}) => {
  return (
    <section className="get-started-section">
      <div className="container">
        <div className="main-content">
          <h2 className="fs-70">
            {title}{" "}
            {titleImg && (
              <span>
                <Image
                  src={`/yellow.png`}
                  alt="yellow line"
                  width={200}
                  height={43}
                />
              </span>
            )}
          </h2>
          <p>{description}</p>
          {buttonText && (
            <a className="c-btn" href={buttonLink || "#"}>
              {buttonText}
            </a>
          )}
        </div>

        <div className="cta-container">
          <div className="full-img">
            {bigVector && (
              <span className="big-vector">
                <Image
                  src={`/${bigVector}`}
                  alt="big vector"
                  width={251}
                  height={233}
                />
              </span>
            )}
            {mainImage && (
              <Image
                src={`/${mainImage}`}
                alt="main image"
                width={1295}
                height={608}
              />
            )}
            {tildeImage && (
              <span className="tilde">
                <Image
                  src={`/${tildeImage}`}
                  alt="tilde image"
                  width={239}
                  height={268}
                />
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
