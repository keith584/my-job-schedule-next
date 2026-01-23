import React from "react";
import "../assets/css/why-chose.css";
import Faq from "./Faq";
import Image from "next/image";

const Why_choose = ({ title, pera, subtitle, img, mainImage, items }) => {
  return (
    <section className="why-choose-us">
      <div className="container">
        {/* TOP SECTION */}
        <div className="choose-content">
          <h2 className="fs-70">
            {title}
            <span>
              <Image
                src="/bg-blue.png"
                alt="blue background"
                width={200}
                height={46}
              />
            </span>
          </h2>

          <p>{pera}</p>
        </div>

        {/* FAQ + SUBTITLE SECTION */}
        <div className="laout-grid">
          <h2 className="fs-40">
            {subtitle}
            <span>
              <Image src="/image.png" alt="icon" width={187} height={50} />
            </span>
          </h2>
          <Faq mainImage={mainImage} items={items} />
        </div>
      </div>
    </section>
  );
};

export default Why_choose;
