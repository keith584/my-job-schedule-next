import React from "react";
import "../assets/css/Organizations_cmp.css";
import Image from "next/image";

const Organizations_cmp = ({ orgData }) => {

  return (
    <>
      <section className="org-section">
        <div className="container">
          <div className="org-container">
            <div className="main-title-data">
              <h2 className="fs-70">
                {orgData.titleData.title}
                <span>
                  <Image
                    src="/wave-pink.png"
                    alt="wave pink"
                    width={200}
                    height={42}
                  />
                </span>
              </h2>
              <p>{orgData.titleData.description}</p>
            </div>

            <div className="org-grid">
              {orgData.cards.map((value, index) => {
                const { description, title, icon } = value;
                return (
                  <div className="org-card" key={index}>
                    <div className="icon-wrap">
                      <img src={icon} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Organizations_cmp;
