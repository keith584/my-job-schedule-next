import React from "react";
import "../assets/css/safty.css";
import Image from "next/image";

const Trust = ({
  title,
  waveImg,
  arrowImg,
  paragraph,
  items = [],
  starlineImg,
  images = [],
}) => {
  return (
    <section className="safty">
      {/* Arrow */}
      <span className="arrow">
        <Image src={`/${arrowImg}`} alt="arrow" width={163} height={235} />
      </span>

      <div className="container">
        <div className="main-content">
          {/* LEFT SIDE CONTENT */}
          <div className="content-trus">
            <h2 className="fs-70">
              {title}
              <span>
                <Image src={`/${waveImg}`} alt="wave" width={200} height={42} />
              </span>
            </h2>

            <p>{paragraph}</p>

            <div className="flow-data">
              {items.map((item, i) => (
                <div key={i} className="content-flow active">
                  <div className="head">
                    <h3 className="fs-35">{item.title}</h3>
                  </div>
                  <div className="main-content">
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="imag-trust">
            <Image
              src={`/${starlineImg}`}
              alt="star-line"
              width={185}
              height={185}
              className="star-line"
            />
            <div className="trust-img">
              {images.map((img, i) => (
                <Image
                  key={i}
                  src={`/${img}`} // img should be like "image.png" from public folder
                  alt={`trust-img-${i}`}
                  width={504}
                  height={829}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
