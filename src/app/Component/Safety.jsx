import React from "react";
import "../assets/css/safety.css";
import Image from "next/image";
import Link from "next/link";

const Safety = () => {
  return (
    <>
      <section className="safety-section">
        <div className="container">
          <h2 className="fs-70">
            A Better Daily Flow{" "}
            <span>
              <Image
                src="/wave-pink.png"
                alt="wave pink"
                width={200}
                height={45}
              />
            </span>
          </h2>
          <p className="subtitle">
            Your day fills with nearby jobs, allowing you to complete more
            inspections with less effort and stay on time throughout the day
            without rushing or worrying about traffic delays.
          </p>

          <div className="safety-cards">
            <div className="safety-card">
              <Image
                src="/icons8-user-70.png"
                alt="Vetting Steps"
                width={70}
                height={70}
              />
              <h3 className="fs-35">Stay on Schedule</h3>
              <p>
                When your route is tighter and your tasks are closer, you arrive
                on time and finish appointments within the exact window promised
                to your customers, building trust easily.
              </p>
            </div>

            <div className="safety-card">
              <Image
                src="/icons8-save-70.png"
                alt="Vetting Steps"
                width={70}
                height={70}
              />
              <h3 className="fs-35">More Inspections, Same Hours</h3>
              <p>
                Travel time becomes productive time. With a short route, you can
                accept and complete extra inspections each week while keeping
                the same number of working hours.
              </p>
            </div>

            <div className="safety-card">
            
                <Image
               src="/icons8-file-70.png"
                alt="Vetting Steps"
                width={70}
                height={70}
              />
              <h3 className="fs-35">End Your Day With Energy</h3>
              <p>
                A calm, organized schedule means you finish the day feeling
                productive and less exhausted, giving you more time for family,
                rest, or additional business growth.
              </p>
            </div>
          </div>

          <div className="support-box">
            <h4 className="fs-40">Save time while you work</h4>
            <p>
              Try smart scheduling and see how much your daily routine improves
              when every job is close to the next and long drives are
              eliminated.
            </p>
            <Link href="/contact-us" className="c-btn" scroll={true}>
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Safety;
