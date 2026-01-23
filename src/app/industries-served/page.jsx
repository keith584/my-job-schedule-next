import React from "react";
import Header from "../Component/Header";
import Review from "../Component/Review";
import Footer from "../Component/Footer";
import Iner_banner from "../Component/Iner_banner";
import Support from "../Component/Support";
import For_customers from "../Component/For_customers";
import Category from "../Component/Category";
import SearchAndBook from "../Component/SearchAndBook";
import GetStarted from "../Component/GetStarted";

export const metadata = {
  title: 'Industries Served By My Job Schedule | Smart Scheduling for Field Professionals',
  description:
    'My Job Schedule supports professionals who travel for on-site work, helping them reduce travel time, manage appointments, and deliver reliable service across multiple home and property service industries.',
  robots: 'noindex, nofollow',
};

const page = () => {
  return (
    <>
      <Header />
      <Iner_banner
        text="Industries Served By My Job Schedule
"
        sub_text={
          "We support professionals who travel for on‑site work and depend on organized days. The system helps reduce travel, manage appointments, and offer reliable service across different home and property service industries."
        }
      />
      <For_customers
        title="Who We Designed This For"
        subtitle="These professionals rely on clear scheduling, predictable routes, and efficient workdays to serve clients with confidence."
        image="why1.webp"
        steps={[
          {
            title: "Home Inspectors",
            description:
              "Home inspectors use the system to avoid long drives, stay punctual, and complete more inspections each day while keeping their schedule organized and predictable.",
          },
          {
            title: "Rental & Property Inspectors",
            description:
              "Property managers and rental inspectors benefit from grouped appointments that keep them within the same neighborhood, making routine visits faster and easier.",
          },
          {
            title: "Specialty Inspectors",
            description:
              "Inspectors handling mold, foundation, roof, or energy assessments can manage appointments more efficiently with reduced travel time and clear daily routes.",
          },
        ]}
      />

      <Support
        title="Service Professionals Who Benefit"
        subtitle="These service providers rely on efficient mobile workflows and appreciate a schedule that keeps their day simple and steady."
        cards={[
          {
            image: "/electrical.jpg",
            title: "Electricians",
            description:
              "Electricians can group their service calls within one area, saving time and helping them complete more repairs without traveling back and forth across the city.",
          },
          {
            image: "/plumbing.jpg",
            title: "Plumbers",
            description:
              "Plumbers benefit from reduced drive time and clear appointment planning, allowing them to respond faster and offer better scheduling to customers.",
          },
          {
            image: "/hvac.jpg",
            title: "HVAC Technicians",
            description:
              "HVAC professionals can stay within one zone daily, making maintenance and repair visits smoother while reducing delays caused by travel.",
          },
          {
            image: "/handyman.jpg",
            title: "Handyman Services",
            description:
              "Handyman teams gain efficiency when all tasks for the day are located nearby, helping them complete more jobs and maintain consistent timing.",
          },
          {
            image: "/appliance.jpg",
            title: "Appliance Repair Technicians",
            description:
              "Repair professionals can manage multiple appointments without long travel interruptions, staying on time and delivering reliable service to every customer.",
          },
          {
            image: "/Pest.jpg",
            title: "Pest Control Technicians",
            description:
              "Pest control teams can handle multiple visits in the same neighborhood, reducing travel and improving service response times.",
          },
        ]}
      />

      <SearchAndBook
        title={"Support your daily workflow"}
        pera="Use a system that makes managing visits easier, reduces travel time, and helps you stay fully prepared for every inspection."
        bg="cleaning.webp"
      />
      <Category
        title="Businesses That Benefit From Better Organization"
        subtitle="These industries rely on planning, punctuality, and dependable daily routes to complete tasks efficiently."
        description="Efficient scheduling, predictable routes, and organized teams help businesses save time, reduce stress, and improve service quality."
        titleImg="greenwave.png"
        subtitleImg="blueline.png"
        features={[
          {
            id: 1,
            name: "Home Service Companies",
            title:
              "Businesses offering multiple home services can keep teams organized and improve service consistency with location‑based booking.",
            img: "plumbing.webp",
          },
          {
            id: 2,
            name: "Small Field Service Teams",
            title:
              "Teams that handle several calls each day benefit from predictable routes and fewer schedule changes.",
            img: "electrical.webp",
          },
          {
            id: 3,
            name: "Real Estate Service Providers",
            title:
              "Professionals assisting buyers, sellers, or agents can plan visits smoothly while offering reliable appointment timing.",
            img: "kitchen.webp",
          },
          {
            id: 4,
            name: "Local Contractors",
            title:
              "Contractors working on repairs or small projects can avoid scattered schedules and stay focused on jobs within one area.",
            img: "hvac.webp",
          },
          {
            id: 5,
            name: "Maintenance Providers",
            title:
              "Routine maintenance services can streamline their workdays, reduce travel, and complete more tasks with less downtime.",
            img: "appliance.webp",
          },
        ]}
      />

      <GetStarted
        title="Try It Today"
        titleImg="yellow.png"
        description="Use My Job Schedule to create a smoother, more productive day for your entire team and deliver dependable service to every client."
        buttonText="Get Listed"
        buttonLink="https://job.myjobsschedule.com/organization-login"
        mainImage="never-ever-run-out-of-stock.png"
        bigVector="bigvector.png"
        tildeImage="tildarow.png"
      />
      <Review />
      <Footer />
    </>
  );
};

export default page;
