import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Review from "../Component/Review";
import Iner_banner from "../Component/Iner_banner";
import Pricing from "../Component/Pricing";
import Features from "../Component/Features";
import Includes from "../Component/Includes";
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
      <Iner_banner
        text="Pricing That Works for Every Company"
        condition={true}
        sub_text={
          "Simple plans. No hidden fees. Choose flat monthly pricing or pay only when you get bookings."
        }
        sub_text_2={
          "Designed for inspectors, home-service pros, and field technicians who want smarter scheduling with less driving."
        }
      />
      <Pricing />
      <Includes />
      <Features />
      <Review />
      <Footer />
    </>
  );
};

export default page;
