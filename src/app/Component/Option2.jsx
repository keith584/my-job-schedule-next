import React from "react";

const Option2 = () => {
  return (
    <div className="plan-card featured">
      <div className="card-data">
        <div className="plan-header">
          <h3 className="fs-35">
            {" "}
            OPTION 2 — Commission Plan
            <span className="bg-blue">
              <img alt="" src="bg-blue.png" />
            </span>
          </h3>

          <p>
            If you don’t book appointments, you don’t pay. Predictable • Fair •
            No risk
          </p>

          <h3 className="fs-30">2.5% / appointment</h3>

          <div className="price">
            $0<small>/month</small>
          </div>
        </div>

        <ul className="plan-features data">
          <li>
            {" "}
            <span> Unlimited appointments </span>
          </li>
          <li>
            {" "}
            <span> 1 inspector </span>
          </li>
          <li>
            {" "}
            <span> Smart scheduling + area locking </span>
          </li>
          <li>
            {" "}
            <span> Basic routing </span>
          </li>
          <li>
            {" "}
            <span> Calendar sync </span>
          </li>
          <li>
            {" "}
            <span> Email reminders </span>
          </li>
          <li>
            {" "}
            <span> Email support </span>
          </li>
        </ul>

        <div className="example-box">
          <h3 className="fs-25">Example</h3>
          <p> 30 appointments × $200 = $6,000 revenue</p>
         <p>  2.5% commission = <strong>$150/month</strong></p>
        </div>

        <div className="cta-data">
          <a href="#" className="c-btn">
            Start for Free
          </a>
        </div>
      </div>
    </div>
  );
};

export default Option2;
