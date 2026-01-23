"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Poup from "./Poup";

const Header = () => {
  const pathname = usePathname();
  const [toggle, updateToggle] = useState(false);
  const [activeclass, updateactive] = useState(false);
  const [login,loginupdate]=useState(false)

  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 50) {
        updateactive(true);
      } else {
        updateactive(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <>
      <header className={`${activeclass ? "custom-header active" : "custom-header"}`}>
        <div className="sticky-header">
          <p>Join us and enjoy 10% off with the code <strong>NEWUSER</strong>.</p>
        </div>

        <div className="container">
          <div className="grid-headers">
            <div className="mobile-grid">
              <div className="main-logo">
                <Link href="/">
                  <img
                    src="my_job_schedule_site_logo.png"
                    alt="LendCart"
                    height="84"
                    width="124"
                  />
                </Link>
              </div>

              <div className="menu-icon">
                <svg
                  className={`${toggle ? "active bars" : "bars"}`}
                  viewBox="0 0 100 100"
                  onClick={() => updateToggle(!toggle)}
                >
                  <path
                    className="line top"
                    d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
                  ></path>
                  <path
                    className="line middle"
                    d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
                  ></path>
                  <path
                    className="line bottom"
                    d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
                  ></path>
                </svg>
              </div>
            </div>

            <div className={`${toggle ? "active nav-links" : "nav-links inactive"}`}>
              <ul className="nav-list">
                <li className={isActive("/") ? "active" : ""}>
                  <Link href="/">Home</Link>
                </li>

                <li className={isActive("/how-it-works") ? "active" : ""}>
                  <Link href="/how-it-works">How It Works</Link>
                </li>

                <li className={isActive("/features") ? "active" : ""}>
                  <Link href="/features">Features</Link>
                </li>

                <li className={isActive("/benefits") ? "active" : ""}>
                  <Link href="/benefits">Benefits</Link>
                </li>

                <li className={isActive("/industries-served") ? "active" : ""}>
                  <Link href="/industries-served">Industries Served</Link>
                </li>

                <li className={isActive("/pricing") ? "active" : ""}>
                  <Link href="/pricing">Pricing</Link>
                </li>

                <li className={isActive("/contact-us") ? "active" : ""}>
                  <Link href="contact-us">Contact us</Link>
                </li>
              </ul>

               <button  className="c-btn desktop-btn" onClick={()=>loginupdate(true)}>Login</button>
            </div>

            <button  className="c-btn desktop-btn" onClick={()=>loginupdate(true)}>Login</button>
          </div>
        </div>
      </header>

      <div className="mt"></div>
          {/* */}
          <Poup login={login} loginupdate={loginupdate}/>
    </>
  );
};

export default Header;
