import Image from "next/image";
import React from "react";

const Faq = ({ items = [], mainImage }) => {
  return (
    <div className="main-data">
      {/* LEFT TEXT CONTENT */}
      <div className="flow-data">
        {items.map((item, index) => (
          <div key={index} className="content-flow active">
            <div className="head">
              <h3 className="fs-35">{item.title}</h3>
            </div>

            <div className="main-content">
              <p>{item.description}</p>
            </div>

            {/* Optional image per FAQ item */}
            {item.image && (
              <div className="faq-item-img">
                <img src={item.image} alt="" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* RIGHT SIDE MAIN IMAGE */}
      <div className="img-sections">
        <div className="work-img active">
          <Image
            src={`/${mainImage}`} // mainImage = "filename.png" in public folder
            alt="faq-main-img"
            width={1295} // replace with your actual size
            height={608} // replace with your actual size
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
