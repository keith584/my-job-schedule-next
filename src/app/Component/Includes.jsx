import React from "react";
import "../assets/css/includes.css";
import Image from "next/image";
const Includes = () => {
  return (
    <section className="icludes">
      <div className="container">
        <div className="container-flow">
          <h2 className="fs-40">Which Plan Makes Sense for You?</h2>
          <div className="tabel-responsive">
            <table>
              <thead>
                <tr>
                  <th>Monthly Appointments</th>
                  <th>Your Monthly Revenue (est.)</th>
                  <th>Cost with Commission Plan (2.5%)</th>
                  <th>Cost with Growth Plan ($49)</th>
                  <th>Best Choice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10</td>
                  <td>$2,000</td>
                  <td>$50</td>
                  <td>$49</td>
                  <td>Toss-up</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>$4,000</td>
                  <td>$100</td>
                  <td>$49</td>
                  <td>Growth</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>$6,000</td>
                  <td>$150</td>
                  <td>$49</td>
                  <td>Growth</td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>$10,000</td>
                  <td>$250</td>
                  <td>$49</td>
                  <td>Growth/Pro</td>
                </tr>
                <tr>
                  <td>80</td>
                  <td>$16,000</td>
                  <td>$400</td>
                  <td>$99</td>
                  <td>Pro</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <span className="tilde">
        {" "}
        <Image src="/tildarow.png" alt="tilde row" width={239} height={268} />
      </span>
    </section>
  );
};

export default Includes;
