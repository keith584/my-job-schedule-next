import React from "react";
import "../assets/css/for_customer.css";
import Image from "next/image";

const For_customers = ({ title, subtitle, steps = [], image }) => {
  return (
    <section className="for-customers">
      <div className="container">
        {/* Title Section */}
        <div className="main-title-customer">
          <h2 className="fs-70">
            {title}
            <span>
              <Image src="/circle.png" alt="circle" width={293} height={174} />
            </span>
          </h2>

          <p>{subtitle}</p>
        </div>

        {/* Steps Section */}
        <div className="main-steps">
          <div className="step-content">
            <div className="steps">
              {steps.map((step, index) => (
                <div className="step" key={index}>
                  <h3 className="fs-35">
                    {index + 1}) {step.title}
                  </h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Image */}
          <div className="main-img">
            <Image src={`/${image}`} alt={title} width={561} height={842} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default For_customers;
