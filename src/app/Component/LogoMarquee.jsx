"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
const LogoMarquee = () => {
  const marqueeRef = useRef(null);

  const logos = [
    "logo1.webp",
    "logo2.webp",
    "logo3.webp",
    "logo4.webp",
    "logo5.webp",
    "logo6.webp",
    "logo7.webp",
    "logo8.webp",
    "logo9.webp",
    "logo10.webp",
    "logo11.webp",
    "logo12.webp",
  ];

  // Duplicate the logos to make a seamless infinite scroll
  useEffect(() => {
    const container = marqueeRef.current;
    container.innerHTML += container.innerHTML;
  }, []);

  return (
    <div className="marquee-container">
      <div ref={marqueeRef} className="marquee-track">
        {logos.map((logo, index) => (
          <div className="logo-box" key={index}>
            <Image
              key={index}
              src={`/${logo}`} // logo = "filename.png" in public folder
              alt={`Logo ${index + 1}`}
              width={80}
              height={80}
              className="logo"
              quality={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
