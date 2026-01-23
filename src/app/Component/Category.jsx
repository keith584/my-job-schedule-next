import React from "react";
import "../assets/css/category.css";
import Category_slide from "./Category_slide";
import Image from "next/image";

const Category = ({
  title,
  subtitle,
  description,
  features,
}) => {

  return (
    <>
      <section className="category">
        <div className="container">
          <div className="choose-content">
            <h2 className="fs-70">
              {title}{" "}
              <span>
                <Image
                  src="/greenwave.png"
                  alt="green wave"
                  width={293}
                  height={174}
                />
              </span>
            </h2>

            <h3 className="fs-40">
              {subtitle}
              <span>
                <Image
                  src="/blueline.png"
                  alt="subtitle icon"
                  width={200}
                  height={32}
                />
              </span>
            </h3>

            <p>{description}</p>
          </div>
        </div>

        {/* You can also pass the slider component as children or as props */}
        <Category_slide categories={features} />
      </section>
    </>
  );
};

export default Category;
