import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Iner_banner from "../Component/Iner_banner";
import Review from "../Component/Review";
import Contact_us from "../Component/Contact_us";
import { ToastContainer } from "react-toastify";
export const metadata = {
  title: "We're Here to Help You Succeed | Dedicated Support for Your Business",
  description:
    "Our team is committed to helping you get the most value from the platform. Whether you're new or experienced, we guide you in building a smooth, organized workflow tailored to your business needs.",
  robots: "noindex, nofollow",
};

const page = () => {
  return (
    <>
    
     <ToastContainer position="top-right" autoClose={3000} />
      <Header />
      <Iner_banner
        text="We're Here to Help You Succeed"
        condition={true}
        sub_text={
          "Our team is committed to making sure you get the most value from the platform. Whether you're new or experienced, we’ll help you build a smooth, organized workflow that fits your business."
        }
      />
      <Contact_us />
      <Review />

      <Footer />
    </>
  );
};

export default page;
