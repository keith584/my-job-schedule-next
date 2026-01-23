import React from "react";
import "../assets/css/fetaures.css";
import Link from "next/link";

const Features = () => {
  return (
    <section className="fetaures">
      <div className="container">
        <div className="full-list">
          <div className="listall">
          <h2 className="fs-40">🎯 All Plans Include</h2>
          <ul>
            <li>Automatic “zone-locking” schedule management</li>
            <li>Smart routing to reduce travel time</li>
            <li>Customer email confirmations</li>
            <li>Calendar sync</li>
            <li>Google Maps integrations</li>
            <li>Clean, simple inspector dashboard</li>
          </ul>
        </div>
        <div className="fs-price-title">
          <h2 className="fs-40">💬 Need help choosing a plan?</h2>
          <p>
            Contact our team for a personalized recommendation based on your
            workflow and volume.
          </p>
          <Link href="/contact-us" className="c-btn">
            Contact Us
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
