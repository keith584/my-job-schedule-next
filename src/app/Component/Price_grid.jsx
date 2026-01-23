"use client";
import React from "react";

const Price_grid = ({ result }) => {

  // ✅ sort by unit_amount (ascending)
  const sortedResult = [...result].sort(
    (a, b) => a.unit_amount - b.unit_amount
  );

  const handleEncryptAndRedirect = async (id) => {
    try {
      const res = await fetch("/api/simple-encrypt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("API error:", errText);
        return;
      }

      const data = await res.json();

      window.open(
        "https://job.myjobsschedule.com/organization-login?q=" +
          data.encrypted,
        "_blank"
      );

    } catch (error) {
      console.error("Encryption failed:", error);
    }
  };

  return (
    <div className="pricing-grid">
      {sortedResult.map((data) => {
        const { product, unit_amount, recurring } = data;
        const { name, description ,id } = product;
        const { interval } = recurring;

        return (
          <div className="plan-card" key={id}>
            <div className="plan-header">
              <h3 className="fs-35">{name}</h3>
              <p>{description}</p>
              <div className="price">
                ${unit_amount / 100}<small>/{interval}</small>
              </div>
            </div>

            <div className="plan-cta">
              <button
                className="c-btn"
                onClick={() => handleEncryptAndRedirect(id)}
              >
                Get Started
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Price_grid;
