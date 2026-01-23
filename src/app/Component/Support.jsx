import React from "react";
import "../assets/css/support.css";
import Image from "next/image";

const Support = ({ title, subtitle, cards }) => {
  return (
    <>
      <section className="section-wrapper-server">
        <div className="container">
          <div className="arro-mg">
            <Image src="/arrowme.png" alt="arrow" width={163} height={235} />
          </div>

          <div className="titles-supoorts">
            <h2 className="fs-70">
              {title}{" "}
              <span>
                <Image
                  src="/wave-pink.png"
                  alt="wave pink"
                  width={200}
                  height={42}
                />
              </span>
            </h2>
            <p>{subtitle}</p>
          </div>

          <div className="grid-box">
            {cards?.map((item, index) => (
              <div className="card" key={index}>
                <Image
                  src={`${item.image}`}
                  alt={item.title}
                  width={410}
                  height={210}
                />
                <div className="card-content">
                  <h3 className="fs-35">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;
