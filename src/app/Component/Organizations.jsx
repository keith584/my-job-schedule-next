import React from "react";
import "../assets/css/org_css.css";
import Image from "next/image";

const Organizations = ({
  title,
  subtitle,
  headerImg,
  tildeImg,
  steps = [],
}) => {
  return (
    <section className="organization-flow">
      <div className="container">
        {/* HEADER */}
        <div className="org-header">
          <h2 className="fs-70">
            {title}
            <span>
              <Image
                src={`/${headerImg}`}
                alt={headerImg}
                width={200}
                height={46}
              />
            </span>
          </h2>

          <p className="org-subtitle">{subtitle}</p>

          <span className="tilde">
            <Image
              src={`/${tildeImg}`} // tildeImg = "tildeImg.png" in public folder
              alt="tilde"
              width={239}
              height={268}
            />
          </span>
        </div>

        {/* STEPS */}
        <div className="org-timeline">
          {steps.map((step, index) => (
            <div className="org-step" key={index}>
              <div className="org-icon">{step.icon}</div>

              <div className="org-info">
                <h3 className="fs-35">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizations;
