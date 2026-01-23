import React from "react";
import "../assets/css/inner_banner.css";
import Image from "next/image";
const Iner_banner = ({ text, sub_text, main_class, condition,sub_text_2 }) => {
  return (
    <>
      <section className="inner-baner">
        <div className="container">
          <div className={`main-title ${main_class}`}>
            <h1 className="fs-70">
              {text}
              <span>
                <Image
                  src="/vectorinnerbanner.png"
                  alt="inner banner"
                  width={200}
                  height={42}
                />
              </span>{" "}
              <span className="line">
                <Image
                  src="/pink.png"
                  alt="pink line"
                  width={200}
                  height={17}
                />
              </span>
            </h1>
            <p> {sub_text}</p>
            <p className="mt-0">{sub_text_2}</p>
            {condition ? null : (
              <div className="ain-btns">
                <a href="#" className="c-btn">
                  Start Now
                </a>
                <a href="#" className="c-btn">
                  List Your Company
                </a>
              </div>
            )}
          </div>
        </div>
        <span className="tilde">
          {" "}
          <Image src="/tildarow.png" alt="tilde row" width={239} height={268} />
        </span>
      </section>
    </>
  );
};

export default Iner_banner;
