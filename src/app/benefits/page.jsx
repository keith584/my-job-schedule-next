import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Iner_banner from "../Component/Iner_banner";
import Organizations_cmp from "../Component/Organizations_cmp";
import Organizations from "../Component/Organizations";
import Review from "../Component/Review";
import SearchAndBook from "../Component/SearchAndBook";
import Why_choose from "../Component/Why_choose";
import Trust from "../Component/Trust";

export const metadata = {
  title: 'Benefits of Using My Job Schedule | Save Time & Work Smarter',
  description:
    'Discover how My Job Schedule helps home inspectors save time, stay organized, reduce driving, and deliver a better client experience. Work easier, earn more, and grow your business effortlessly.',
  robots: 'noindex, nofollow',
};

const page = () => {

   const orgData = {
    titleData: {
      title: "Benefits That Improve Your Workday",
      description:
        "These benefits make each day smoother and help you stay focused on inspections, not travel or scheduling problems.",
      waveImg: {
        src: "/wave-pink.png",
        alt: "wave pink",
        width: 200,
        height: 42,
      },
    },
    cards: [
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1827/1827504.png",
        title: "Reduced Driving Time",
        description:
          "By keeping all inspections within one area each day, you avoid long drives and spend more time doing actual work instead of sitting in traffic.",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/992/992651.png",
        title: "More Inspections Completed",
        description:
          "Shorter routes let you fit extra inspections into your schedule without working late or feeling rushed, helping you grow your earnings naturally.",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/2983/2983923.png",
        title: "Better Time Management",
        description:
          "A clear schedule helps you stay in control of your day, know exactly where you’ll be, and avoid last-minute adjustments or stressful changes.",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/992/992700.png",
        title: "Improved Punctuality",
        description:
          "Staying in one zone helps you show up on time for every appointment, giving clients a reliable and professional experience.",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/134/134914.png",
        title: "Lower Fuel Costs",
        description:
          "Less driving means saving money on fuel, reducing wear on your vehicle, and lowering your overall business expenses.",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        title: "Reduced Stress",
        description:
          "With a planned route and steady workflow, your day feels more manageable and less overwhelming, giving you more energy.",
      },
    ],
  };
  return (
    <>
      <Header />
      <Iner_banner
        text="Benefits of Using My Job Schedule"
        main_class="text-me"
        sub_text={
          "We helps home inspectors save time, stay organized, reduce driving, and provide a better experience for clients. These benefits make your workday easier, improve your income, and support long-term business growth."
        }
      />

      <Organizations_cmp orgData={orgData}/>
      <SearchAndBook
        title={"Make your workdays easier"}
        pera="Use a system designed to support your day, reduce pressure, and help you work with confidence and control."
        bg="cleaning.webp"
      />
      <Why_choose
        img={"second-line.png"}
        title={"Benefits That Strengthen Your Business"}
        pera={
          "These benefits help you attract clients, build trust, and grow your inspection business over time."
        }
        subtitle={"This Is Designed To Make Every Workday Easier"}
        mainImage="why4.webp"
        items={[
          {
            title: "More Satisfied Clients",
            description:
              "Clients appreciate reliable arrival times, clear communication, and smooth appointments, helping you create a positive experience for every inspection.",
            image: "faq1.png",
          },
          {
            title: "Stronger Reputation",
            description:
              "Consistent service leads to better reviews and word-of-mouth referrals, helping your business grow naturally without extra marketing.",
            image: "faq2.png",
          },
          {
            title: "Professional Image",
            description:
              "A calm, organized schedule helps you present yourself as a dependable inspector who respects clients’ time and needs.",
            image: "faq3.png",
          },
          {
            title: "Increased Repeat Business",
            description:
              "Satisfied clients and real estate agents return when they know they can depend on your punctuality and professionalism.",
            image: "faq4.png",
          },
          {
            title: "Fewer Cancellations",
            description:
              "When your schedule stays organized and you arrive on time, fewer clients cancel or reschedule, keeping your day steady and productive.",
            image: "faq5.png",
          },
        ]}
      />

      <Trust
        title="Benefits That Help You Stay Organized"
        waveImg="wave-pink.png"
        arrowImg="arrowme.png"
        paragraph="These features help you run your inspection business smoothly without extra effort or complicated tools."
        items={[
          {
            title: "Smart Routing",
            description:
              "The system organizes inspections by area, giving you a simple route map that keeps your day efficient and easy to follow.",
          },
          {
            title: "Clean Daily View",
            description:
              "You can see all your appointments clearly at a glance, helping you prepare for each inspection and stay aware of your full schedule.",
          },
          {
            title: "Automatic Reminders",
            description:
              "Timely reminders help you stay ahead of your tasks so you never miss important appointments or arrive unprepared.",
          },
        ]}
        starlineImg="starline.png"
        images={["draf1.png", "draf2.png"]}
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

      <Review />

      <Footer />
    </>
  );
};

export default page;
