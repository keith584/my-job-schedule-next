import React from "react";
import "../assets/css/contact-us.css";
import { IoLocationSharp } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import Image from "next/image";
import Contact_form from "./Contact_form";

const Contact_us = () => {
  return (
    <>
      <section className="contact-page-sec">
        <span className="arrow">
          <img alt="" src="arrowme.png" />
        </span>
        <div className="container">
          <div className="row ">
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <IoLocationSharp />
                  </div>
                  <div className="contact-info-text">
                    <h2 className="fs-20">address</h2>
                    <span>1215 Lorem Ipsum, Ch 176080 </span>
                    <span>Chandigarh , INDIA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MdMarkEmailRead />
                  </div>
                  <div className="contact-info-text">
                    <h2 className="fs-20">E-mail</h2>
                    <span>info@LoremIpsum.com</span>
                    <span>yourmail@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <IoTime />
                  </div>
                  <div className="contact-info-text">
                    <h2 className="fs-20">office time</h2>
                    <span>Mon - Thu 9:00 am - 4.00 pm</span>
                    <span>Thu - Mon 10.00 pm - 5.00 pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6">
              <div className="contact-page-form" method="post">
                  <h2 className="fs-40">
                  Get in Touch{" "}
                  <span>
                    <img alt="" src="greenwave.png" />
                  </span>
                </h2>
                <p>
                  Reach out anytime for help with setup, scheduling questions,
                  or general support. We aim to respond quickly so you can keep
                  your workday running smoothly without delays or confusion.
                </p>
                  <ul>
                   
                       <li>
                      <div className="icons">
                      <Image src={"/fast.png"} width={50} height={50} alt="Fast Response Times"/>
                      </div>
                      <div className="main-titles">
                        <h3 className="fs-25">Helpful Guidance</h3>
                        <p>We work hard to respond promptly so you can continue managing your day without interruption.</p>
                      </div>
                    </li>
                       <li>
                      <div className="icons">
                      <Image src={"/advice.png"} width={50} height={50} alt="Fast Response Times"/>
                      </div>
                      <div className="main-titles">
                        <h3  className="fs-25">Fast Response Times</h3>
                        <p>We work hard to respond promptly so you can continue managing your day without interruption.</p>
                      </div>
                    </li>
                      <li>
                      <div className="icons">
                      <Image src={"/suport.png"} width={50} height={50} alt="Fast Response Times"/>
                      </div>
                      <div className="main-titles">
                        <h3  className="fs-25">Fast Response Times</h3>
                        <p>We work hard to respond promptly so you can continue managing your day without interruption.</p>
                      </div>
                    </li>
                  </ul>

                 </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-page-form" method="post">
                <Contact_form/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact_us;
