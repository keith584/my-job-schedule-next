import React from "react";
import "../assets/css/receipts.css";
import Image from "next/image";
const Pricing_section = ({
  title,
  sub_text,
  text1,
  tex1_pera,
  text2,
  text2_pera,
  text3,
  text3_pera,
  img,
}) => {
  return (
    <>
      <section className="pricing-section">
        <span className="arrow">
          <Image src="/arrowme.png" alt="arrow" width={163} height={235} />
        </span>
        <div className="container">
          <div className="pricing-container">
            <div className="pricing-text">
              <h2 className="fs-70">
                {title}
                <span>
                  <Image
                    src="/greenwave.png"
                    alt="green wave"
                    width={293}
                    height={174}
                  />
                </span>
              </h2>
              <p>{sub_text}</p>

              <div className="pricing-points">
                <div className="point">
                  <div>
                    <h3 className="fs-30">{text1}</h3>
                    <p>{tex1_pera}</p>
                  </div>
                </div>

                <div className="point">
                  <div>
                    <h3 className="fs-30">{text2}</h3>
                    <p>{text2_pera}</p>
                  </div>
                </div>

                <div className="point">
                  <div>
                    <h3 className="fs-30">{text3}</h3>
                    <p>{text3_pera}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pricing-image">
              <Image
                src={`/${img}`} // img = "filename.png" in public folder
                alt="Transparent pricing illustration"
                width={1200}
                height={1799}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing_section;
