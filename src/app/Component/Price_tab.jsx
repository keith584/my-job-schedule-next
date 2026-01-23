// "use client";
import React from "react";
import Price_grid from "./Price_grid";
// import Option2 from "./Option2";

const Price_tab = ({result}) => {
  // const [activeTab, setActiveTab] = useState("option1");

  return (
    <>
      <div className="full-data">

        {/* TAB BUTTONS */}
        {/* <div className="ain-btns">
          <button
            className={`c-btn ${activeTab === "option1" ? "active" : ""}`}
            onClick={() => setActiveTab("option1")}
          >
            OPTION 1 — Flat-Rate Plans
          </button>

          <button
            className={`c-btn ${activeTab === "option2" ? "active" : ""}`}
            onClick={() => setActiveTab("option2")}
          >
            OPTION 2 — Commission Plan
          </button>
        </div> */}

      
        {/* TAB CONTENT */}
      <Price_grid result={result}/>
        {/* {activeTab === "option1" && <Price_grid />}
        {activeTab === "option2" && <Option2 />} */}

      </div>

      {/* OPTIONAL CSS FOR ACTIVE BUTTON */}
     
    </>
  );
};

export default Price_tab;
