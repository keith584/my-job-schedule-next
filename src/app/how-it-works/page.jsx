import React from "react";
import Header from "../Component/Header";
import Iner_banner from "../Component/Iner_banner";
import Footer from "../Component/Footer";
import For_customers from "../Component/For_customers";
import Organizations from "../Component/Organizations";
import Safety from "../Component/Safety";

import SearchAndBook from "../Component/SearchAndBook";
import Review from "../Component/Review";
import Pricing_section from "../Component/Pricing_section";

// SEO Metadata
export const metadata = {
  title: 'How My Job Schedule Works | Smart Scheduling for Home Inspectors',
  description: 'Discover how our smart scheduling system helps home inspectors plan their day efficiently. Reduce travel time, stay focused in one area, and earn more without extra hours.',
  robots: 'noindex, nofollow',
};
const page = () => {
  return (
    <>
      <Header />
      <Iner_banner
        text="How My Job Schedule Works"
        sub_text={
          "A smarter, easier way for home inspectors to plan their day and reduce wasted travel time. Our system keeps each workday in one area so you can stay focused and earn more without adding extra hours."
        }
      />
      <For_customers
        title="Getting Set Up"
        subtitle="Start by adding your important business details so customers can easily discover you, understand what services you offer, and book available time slots instantly without unnecessary back-and-forth conversations."
        image="why1.webp"
        steps={[
          {
            title: "Create Your Profile",
            description:
              "Add your service areas, inspection types, operating hours, and business information so clients always know where you work, what you provide, and how quickly you can help them without confusion.",
          },
          {
            title: "Connect Your Calendar",
            description:
              "Sync your existing calendar to keep everything in one place and avoid double-booking. Stay in control while the system automates scheduling tasks.",
          },
          {
            title: "Go Live",
            description:
              "Once activated, customers will see your real-time availability and can book appointments instantly. Your profile helps you get more bookings with less effort.",
          },
        ]}
      />

      <Organizations
        title="Smart Area Scheduling"
        headerImg="bg-blue.png"
        subtitle="Your first booking of the day decides the service area for that entire day, helping you stay close to each job without driving across town multiple times."
        tildeImg="tildarow.png"
        steps={[
          {
            icon: "🏢",
            title: "First Booking Sets the Zone",
            description:
              "If your first inspection is in East Seattle, the entire workday automatically becomes an East Seattle day, keeping your schedule focused and predictable from the start.",
          },
          {
            icon: "📋",
            title: "New Bookings Stay Nearby",
            description:
              "All new bookings for that same day must fall inside the same zone, making your route short and efficient so you spend more time completing jobs rather than traveling long distances.",
          },
          {
            icon: "💰",
            title: "One Area Per Day",
            description:
              "Your time is protected, your day is easier to manage, and you avoid the stress of cross-city travel. A simple change makes a big impact on how smoothly your business runs.",
          },
        ]}
      />

      <SearchAndBook
        double="true"
        title={"Ready to get started?"}
        pera="Make your profile visible today and begin enjoying a more organized schedule that saves time and reduces stress in your daily workflow."
        bg="cleaning.webp"
      />
      <Safety />
      <Pricing_section
        title={"Happy Clients, Stronger Reputation"}
        sub_text="A well‑planned schedule means consistent arrival times, smooth experiences, and satisfied customers who trust your professional service from booking to final report."
        text1="Easy Online Booking"
        tex1_pera="Clients easily pick a time slot that matches both your availability and the assigned area for the day, giving them confidence they’ll receive reliable, on‑time service."
        text2="Reliable Arrival Times"
        tex2_pera="With shorter travel between jobs, you avoid delays and show up ready to inspect, helping clients feel comfortable and supported during an important home decision."
        text3="Better Reviews & More Referrals"
        text3_pera="Happy clients share their experiences through reviews and word‑of‑mouth, helping you build a stronger reputation and attract more business naturally."
        img="why4.webp"
      />
      <Review />
      <Footer />
    </>
  );
};

export default page;
