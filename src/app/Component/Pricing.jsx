"use client"; // make it a client component
import "../assets/css/pricing.css";
import Price_tab from "./Price_tab";
import { useEffect, useState } from "react";

const Pricing = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/plans", {
          cache: "no-store", // ensure fresh data
        });
        const data = await res.json();
        setResult(data);
      } catch (error) {
        console.error("Error fetching pricing data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="pricng">
      <div className="container">
        <div className="main-title-pricing">
          <h2 className="fs-40">
            <span>
              <img src="bg-blue.png" alt="" />
            </span>
            Two Ways to Pay Choose What Fits Your Business
          </h2>
          <p>
            We offer flexible payment options so you can run your business
            your way. Pick the method that works best for your needs and enjoy
            smooth, hassle-free transactions
          </p>
        </div>

        {/* Client-side data rendering */}
        <Price_tab result={result} />
      </div>
    </section>
  );
};

export default Pricing;
