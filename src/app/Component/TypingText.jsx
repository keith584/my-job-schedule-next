"use client";
import { useState, useEffect } from "react";


const TypingText = () => {
  const texts = ["Home Inspectors"];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];

    // Typing speed control
    const speed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    // If text completed
    if (!isDeleting && subIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    }

    // If text deleted completely
    else if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index]);

  return (
    <div className={"typingContainer"}>
      <span className={"typingText"}>
        {texts[index].substring(0, subIndex)}
      </span>
      <span className={"cursor"}></span>
    </div>
  );
};

export default TypingText;
