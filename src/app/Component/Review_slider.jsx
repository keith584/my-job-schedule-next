"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "James Anderson",
    location: "New York, NY",
    jobType: "Plumbing",
    rating: 5,
    review:
      "Excellent service! The plumber arrived on time and fixed the issue quickly. Highly recommended for anyone in NYC.",
  },
  {
    id: 2,
    name: "Sophia Martinez",
    location: "Los Angeles, CA",
    jobType: "Electrical Repair",
    rating: 4,
    review:
      "Very professional and polite electrician. Got our office lights fixed within an hour. Smooth booking experience.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    location: "Chicago, IL",
    jobType: "Appliance Repair",
    rating: 5,
    review:
      "Quick response and great work! My washing machine was repaired the same day I booked the service.",
  },
  {
    id: 4,
    name: "Emily Davis",
    location: "Houston, TX",
    jobType: "Painting",
    rating: 4,
    review:
      "The painters did a clean and detailed job. My living room looks fresh again. Would definitely hire again!",
  },
  {
    id: 5,
    name: "Daniel Wilson",
    location: "Miami, FL",
    jobType: "Pest Control",
    rating: 5,
    review:
      "No more bugs! The pest control team was efficient and professional. Great results in just one visit.",
  },
  {
    id: 6,
    name: "Olivia Brown",
    location: "San Francisco, CA",
    jobType: "Carpentry",
    rating: 5,
    review:
      "Outstanding craftsmanship! The carpenter fixed my furniture perfectly. Super easy booking process too.",
  },
];

const Review_slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className="main-slider">
        <div className="slider-wrapper">
          <button className="custom-prev">
           <Image src="/prev.png" alt="Previous" width={130} height={130} />
          </button>

          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            speed={2500}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}

            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            modules={[Navigation, Autoplay]}
            className="review-swiper"
          >
            {reviews.map((rev) => (
              <SwiperSlide key={rev.id}>
                <div className="review-card">
                  <div className="review-header">
                    <h3 className="fs-30">{rev.name}</h3>
                    <p className="fs-25">{rev.location}</p>
                  </div>

                  <div className="review-body">
                    <p className="review-jobtype">{rev.jobType}</p>
                    <div className="review-rating">
                      {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
                    </div>
                    <p className="review-text">{rev.review}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-next">
            
       <Image src="/next.png" alt="next" width={130} height={130} />
          </button>
        </div>
        <div className="main-buttns">
          <button className="custom-prev">
           <Image src="/prev.png" alt="Previous" width={130} height={130} />
          </button>
          <button className="custom-next">
             <Image src="/next.png" alt="next" width={130} height={130} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Review_slider;
