import React from "react";
import "../assets/css/footer.css";
import News_latter from "./News_latter";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <>
    <footer className="site-footer">
      <div className="container">
        <div className="footer-container">
          <div className="full-details-footer">
            {/* Company Info */}
            <div className="footer-section">
              <Link href="/" aria-label="Go to homepage">
                <Image
                  src="/my_job_schedule_site_logo.png"
                  alt="My Job Schedule — Home"
                  width={298}
                  height={66}
                />
              </Link>
              <p>
                Built for real home inspectors who want smoother days, fewer
                long drives, and happier clients. My Job Schedule keeps your
                work efficient, organized, and stress-free every day.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="fs-35">Quick Links</h4>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/how-it-works">How It Works </Link>
                </li>
                <li>
                  <Link href="/features">Features</Link>
                </li>
                {/* <li><a href="#">Benefits</a></li> */}
                <li>
                  <Link href="/industries-served">Industries Served </Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing </Link>
                </li>
                {/* <li><a href="#">Testimonials  </a></li> */}
                <li>
                  <Link href="/contact-us">Contact us </Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="fs-35">Follow Us</h4>
              <ul className="social-links">
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
            {/* <News_latter /> */}
          </div>

          {/* Newsletter Subscription */}

          {/* Social Links */}
        </div>
        <div className="footer-bottom">
         <p>
  © {new Date().getFullYear()} My Job Schedule. All rights reserved. Designed and Developed by{" "}<a href="https://ogrelogic.com/" target="_blank" rel="noopener noreferrer"> Ogrelogic </a>.{" "}<Link href="/privacy-policy">Privacy Policy</Link> |{" "}<Link href="/terms-and-conditions">Terms & Conditions</Link>
</p>

        </div>
      </div>

      {/* Footer Bottom */}
    </footer>

    </>
  );
};

export default Footer;
