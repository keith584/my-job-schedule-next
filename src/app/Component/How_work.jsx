import React from "react";
import "../assets/css/how_work.css";
import Image from "next/image";

const How_work = () => {
  return (
    <>
      <section className="work-flow">
        <div className="container">
          <div className="work">
            <h2 className="fs-70">
              What We Do
              <span>
                {" "}
                <Image
                  src="/circle.png"
                  alt="circle"
                  width={293}
                  height={174}
                />
              </span>
            </h2>
            <h3 className="fs-40">
              <span>Your Schedule </span>Should Work for You.
            </h3>
            <p>
              We create a stress‑free inspection schedule by keeping your day
              focused on one area, helping you finish work faster and stay in
              control.
            </p>
            <div className="wave-arrow">
              <Image
                src="/wave-line.png"
                alt="wave line"
                width={348}
                height={159}
              />
            </div>
          </div>

          <div className="steps-data">
            <div className="step">
              <h2 className="fs-40">
                Work Smarter Every Day With Local Scheduling
              </h2>
              <div className="steps">
                <span>1</span>
                <div className="process">
                  <h3 className="fs-25"> One Area Per Day</h3>
                  <p>
                    Your first booking decides where you’ll work that day. All
                    other inspections stay close by, so you avoid long, tiring
                    drives across the city.
                  </p>
                </div>
              </div>
              <div className="steps">
                <span>2</span>
                <div className="process">
                  <h3 className="fs-25"> Clear & Simple Booking</h3>
                  <p>
                    Clients check your availability and book online without
                    messaging back and forth, saving time for both you and them.
                  </p>
                </div>
              </div>
              <div className="steps">
                <span>3</span>
                <div className="process">
                  <h3 className="fs-25">More Work, Less Travel</h3>
                  <p>
                    When jobs are grouped by location, travel time drops, and
                    you can complete more inspections in the same number of
                    hours.
                  </p>
                </div>
              </div>
              <div className="steps">
                <span>4</span>
                <div className="process">
                  <h3 className="fs-25">Built for Inspectors</h3>
                  <p>
                    Everything is made simple, familiar, and helpful so your day
                    runs smoothly without learning any complicated systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="working-img">
              <Image
                src="/working.webp"
                alt="working"
                width={800}
                height={1200}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default How_work;
