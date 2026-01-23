import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Review from "../Component/Review";
import "../assets/css/privacy-policy.css"
import Terms_conditions from "../Component/Terms_conditions";
export const metadata = {
  title:
    "Simple Pricing. Predictable Growth. | Affordable Plans for Home Inspectors",
  description:
    "Choose the plan that fits your business size. Enjoy simple flat-rate pricing with no hidden fees and unlimited appointments across every tier—grow your inspection business with confidence.",
  robots: "noindex, nofollow",
};

const page = () => {
  return (
    <>
      <Header />
     <Terms_conditions/>
      <Review />
      <Footer />
    </>
  );
};

export default page;
