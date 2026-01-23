"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

// const categories = [
//   {
//     id: 1,
//     name: "Better Time Use",
//     title:
//       "With less driving between appointments, you can spend more of your day completing actual inspections and earning more income from the same working hours.",
//     img: "plumbing.webp"
//   },
//   {
//     id: 2,
//     name: "Higher Earnings",
//     title:
//       "You can fit additional inspections into your weekly schedule, increasing your revenue without making your workdays longer or rushing through important tasks.",
//     img: "electrical.webp",
//   },
//   {
//     id: 3,
//     name: "Smoother Workflow",
//     title:
//       "Your day flows naturally when every inspection is close to the next. You move calmly through your tasks instead of rushing or stressing over travel time.",
//     img: "kitchen.webp",
//   },
//   {
//     id: 4,
//     name: "Happier Clients",
//     title:
//       "Clients appreciate it when you show up on time and prepared. A smooth appointment experience builds trust and helps them feel confident about choosing you.",
//     img: "hvac.webp",
//   },
//   {
//     id: 5,
//     name: "Stronger Reputation",
//     title:
//       "Great service turns into great reviews. With fewer delays and better punctuality, you build a positive reputation that attracts new bookings.",
//     img: "appliance.webp",
//   },
//   {
//     id: 6,
//     name: "Reduced Fuel Costs",
//     title:
//       "Shorter routes mean less fuel and fewer miles on your vehicle, helping you save money on gas and reduce ongoing maintenance costs.",
//     img: "handyman.webp",
//   },
//   {
//     id: 7,
//     name: "Less Stress",
//     title:
//       "A schedule that stays on track takes pressure off you. You spend less time worrying about traffic and more time focused on your work.",
//     img: "cleaning.webp",
//   },
//   {
//     id: 8,
//     name: "Time for Yourself",
//     title:
//       "Finish work earlier with a sense of accomplishment and enjoy more personal time without sacrificing income or professional results.",
//     img: "Pest.webp",
//   },
//   {
//     id: 9,
//     name: "Professional Impression",
//     title:
//       "When clients see an inspector who stays organized and punctual, it shows them they are working with someone reliable and dedicated.",
//     img: "paint.webp",
//   },
//   {
//     id: 10,
//     name: "Fewer Cancellations",
//     title:
//       "Better planning reduces delays and problems that lead to cancellations, keeping your day full, productive, and profitable.",
//     img: "carpentry.webp",
//   },
// ];

const CategorySlide = ({ categories }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="category-slider-section" style={{ position: "relative" }}>
      {/* Custom navigation buttons */}
      <div className="arrow-btns">
        <button
          ref={prevRef}
          className="custom-prev"
          aria-label="Previous slide"
        >
          <Image src="/prev.png" alt="" width={130} height={130} />
        </button>

        <button ref={nextRef} className="custom-next" aria-label="Next slide">
          <Image src="/next.png" alt="" width={130} height={130} />
        </button>
      </div>

      <Swiper
        slidesPerView={1.5}
        spaceBetween={0}
        loop={true}
        speed={2500}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          1000: { slidesPerView: 1.5 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Autoplay, Navigation]}
        className="category-swiper"
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.id}>
            <div className="category-card">
              <div className="category-image">
                <Image
                  src={`/${cat.img}`}
                  alt={cat.name}
                  width={1920}
                  height={1280}
                  className="category-img"
                />
              </div>
              <div className="category-content">
                <h3 className="fs-40">{cat.name}</h3>
                <p>{cat.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlide;
