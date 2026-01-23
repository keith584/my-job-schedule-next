import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Review from "../Component/Review";
import Privacy from "../Component/Privacy";
import "../assets/css/privacy-policy.css"
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
      <Privacy />
      <Review />
      <Footer />
    </>
  );
};

export default page;
