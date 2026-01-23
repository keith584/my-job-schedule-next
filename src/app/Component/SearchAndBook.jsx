import React from "react";
import "../assets/css/searchAndBook.css"; // optional external stylesheet
import Image from "next/image";
import Link from "next/link";

const SearchAndBook = ({
  title = " Search and Book Services in Minutes",
  pera,
  bg,
  double,
}) => {
  return (
    <section
      className={
        double == "true" ? "search-book-section active" : "search-book-section"
      }
      style={{
        position: "relative",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="content-wrapper">
          <h2 className="fs-70">
            {title}
            <span>
              <Image src="/pink.png" alt="pink line" width={200} height={17} />
            </span>
          </h2>
          <p>{pera}</p>
          <div className="main-click">
              <div className="ain-btns">
               
                <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/organization-login`} target="_blank" className="c-btn">
                  List Your Company
                </Link>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SearchAndBook;
