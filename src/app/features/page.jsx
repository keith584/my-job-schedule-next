import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Iner_banner from "../Component/Iner_banner";
import Organizations_cmp from "../Component/Organizations_cmp";
import Pricing_section from "../Component/Pricing_section";
import Review from "../Component/Review";
import SearchAndBook from "../Component/SearchAndBook";
export const metadata = {
  title: 'Features That Save Your Time | Smart Tools for Home Inspectors',
  description: 'Explore powerful features designed to help home inspectors save time, reduce driving, and complete more inspections each week. Work smarter with efficient, automated scheduling tools.',
  robots: 'noindex, nofollow',
};

const page = () => {
  const orgData = {
    titleData: {
      title: "Built for Smooth Scheduling",
      description:
        "These features help you manage your day easily, reduce stress, and keep every appointment close by so you finish work on time and with more energy.",
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
title: "Smart Area Scheduling",
description:
"The first booking of the day sets your work area, keeping all jobs close together and your day free from long, tiring drives across the city.",
},
{
icon: "https://cdn-icons-png.flaticon.com/512/992/992651.png",
title: "Easy Online Bookings",
description:
"Customers can check your availability and book instantly without calling or texting, giving them a smooth experience and saving you time.",
},
{
icon: "https://cdn-icons-png.flaticon.com/512/2983/2983923.png",
title: "Google Calendar Sync",
description:
"All appointments stay updated in your regular calendar, so you keep working the way you already do while enjoying a smarter system.",
},
{
icon: "https://cdn-icons-png.flaticon.com/512/992/992700.png",
title: "Organized Daily View",
description:
"See your bookings clearly for each zone, helping you plan your time better and focus on each client without feeling rushed.",
},
{
icon: "https://cdn-icons-png.flaticon.com/512/134/134914.png",
title: "Job Reminders & Alerts",
description:
"You get alerts for upcoming inspections, helping you stay prepared and avoid missed appointments or last‑minute surprises.",
},
{
icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
title: "Service Area Controls",
description:
"You choose where you work, so your schedule stays efficient, and unnecessary long-distance travel never interrupts your day.",
}
],
  };

  return (
    <>
      <Header />
      <Iner_banner
        text="Features That Save Your Time"
        sub_text="A simple set of powerful features that help home inspectors save time, reduce driving, and complete more inspections each week."
      />

      <Organizations_cmp orgData={orgData}/>
      <SearchAndBook
        title={"Make your schedule work better for you"}
        pera="
Start using features that help you stay organized, drive less, and complete more inspections every day.

        "
        bg="paint.webp"
      />
      <Pricing_section
        title={"Better Service & Growth Tools"}
        sub_text="These features improve your customer experience and support your long‑term business growth with smoother communication and trusted reviews."
        text1="Smooth Client Communication"
        tex1_pera="Customers receive confirmations and updates automatically, helping everyone stay informed and confident without extra messages."
        text2="Reliable Arrival Times"
        tex2_pera="Short routes help you show up on time, give better service, and build trust with clients who rely on accurate inspection timing."
        text3="Ratings & Reviews Support"
        text3_pera="Positive feedback grows your reputation and brings more bookings from buyers, sellers, and real estate professionals."
        img="why5.webp"
      />
      <Review />
      <Footer />
    </>
  );
};

export default page;
