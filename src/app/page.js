import React from 'react'
import Header from './Component/Header'
import Hero from './Component/Hero'
import How_work from './Component/How_work'
import Why_choose from './Component/Why_choose'
import Category from './Component/Category'
import Trust from './Component/Trust'
import Review from './Component/Review'
import GetStarted from './Component/GetStarted'
import SearchAndBook from './Component/SearchAndBook'
import Footer from './Component/Footer'
export const metadata = {
  title: "A Smarter Schedule for Home Inspectors | Work Smarter, Inspect More",
  description:
    "My Job Schedule helps home inspectors reduce travel time, complete more inspections, and stay organized all day. Work smarter, drive less, and offer a better client experience with an optimized scheduling system.",
};

const page = () => {
  return (

    <>
      <Header />
      <Hero />
      <How_work />
      <Why_choose
        img={"second-line.png"}
        title={"How It Helps You"}
        pera={"These tools make your workday easier, keep you on schedule, and help every customer feel confident in the service you provide."}
        subtitle={"Tools Designed To Make Every Workday Easier"}

        mainImage="why5.webp"
        items={[
          {
            title: "Stay on Time",
            description: "Shorter routes help you arrive exactly when expected, keeping clients happy with reliable and punctual service.",
            image: "faq1.png"
          },
          {
            title: "Easy Calendar Sync",
            description: "Keep bookings visible in the calendar you already use, so nothing gets misplaced or double-booked.",
            image: "faq2.png"
          },
          {
            title: "Job Reminders",
            description: "You receive alerts before each inspection, helping you stay prepared and focused throughout the day.",
            image: "faq3.png"
          },
          {
            title: "Service Area Control",
            description: "Choose the zones where you want to work and build efficient routes that fit your plans.",
            image: "faq4.png"
          },
          {
            title: "No Extra Workload",
            description: "The system handles the routing logic automatically, giving you more time to focus on inspections.",
            image: "faq5.png"
          },
          {
            title: "Comfortable Work Pace",
            description: "A calm, organized schedule means finishing the day with more energy and less stress.",
            image: "faq6.png"
          }
        ]}
      />

      <SearchAndBook pera="Make your workday easier by reducing unnecessary travel, staying focused on inspections, and keeping your schedule fully organized from start to finish with zero extra effort.
" bg="carpentry.webp" title="Feel the Difference Today
" />
      <Category
        title="Why It Works Better"
        subtitle="Work Less, Earn More, Serve Clients Better"
        description="You save time, serve people better, and grow your business because your schedule is built to support your success rather than slow you down."
        titleImg="greenwave.png"
        subtitleImg="blueline.png"
        features={[
          {
            id: 1,
            name: "Better Time Use",
            title:
              "With less driving between appointments, you can spend more of your day completing actual inspections and earning more income from the same working hours.",
            img: "plumbing.webp",
          },
          {
            id: 2,
            name: "Higher Earnings",
            title:
              "You can fit additional inspections into your weekly schedule, increasing your revenue without making your workdays longer or rushing through important tasks.",
            img: "electrical.webp",
          },
          {
            id: 3,
            name: "Smoother Workflow",
            title:
              "Your day flows naturally when every inspection is close to the next. You move calmly through your tasks instead of rushing or stressing over travel time.",
            img: "kitchen.webp",
          },
          {
            id: 4,
            name: "Happier Clients",
            title:
              "Clients appreciate it when you show up on time and prepared. A smooth appointment experience builds trust and helps them feel confident about choosing you.",
            img: "hvac.webp",
          },
          {
            id: 5,
            name: "Stronger Reputation",
            title:
              "Great service turns into great reviews. With fewer delays and better punctuality, you build a positive reputation that attracts new bookings.",
            img: "appliance.webp",
          },
          {
            id: 6,
            name: "Reduced Fuel Costs",
            title:
              "Shorter routes mean less fuel and fewer miles on your vehicle, helping you save money on gas and reduce ongoing maintenance costs.",
            img: "handyman.webp",
          },
          {
            id: 7,
            name: "Less Stress",
            title:
              "A schedule that stays on track takes pressure off you. You spend less time worrying about traffic and more time focused on your work.",
            img: "cleaning.webp",
          },
          {
            id: 8,
            name: "Time for Yourself",
            title:
              "Finish work earlier with a sense of accomplishment and enjoy more personal time without sacrificing income or professional results.",
            img: "Pest.webp",
          },
          {
            id: 9,
            name: "Professional Impression",
            title:
              "When clients see an inspector who stays organized and punctual, it shows them they are working with someone reliable and dedicated.",
            img: "paint.webp",
          },
          {
            id: 10,
            name: "Fewer Cancellations",
            title:
              "Better planning reduces delays and problems that lead to cancellations, keeping your day full, productive, and profitable.",
            img: "carpentry.webp",
          },
        ]}
      />

      <Trust
        title="Easy to Begin"
        waveImg="wave-pink.png"
        arrowImg="arrowme.png"
        paragraph="You don’t need to change how you work. Just let your schedule work better."

        items={[
          {
            title: "Quick Setup",
            description:
              "Create your profile, choose service areas, and connect your calendar — ready in minutes."
          },
          {
            title: "Simple for Clients",
            description:
              "They see accurate availability and book with confidence."
          },
          {
            title: "Support for Your Growth",
            description:
              "A system designed to help your business stay strong and continue expanding."
          }
        ]}

        starlineImg="starline.png"

        images={[
          "draf1.png",
          "draf2.png"
        ]}
      />

      <GetStarted
        title="Try It Today"
        titleImg="yellow.png"
        description="Start now and see how quickly your schedule becomes easier to manage, helping your inspections run smoothly and your customers stay satisfied."
        buttonText="Get Listed"
        buttonLink="#"
        mainImage="never-ever-run-out-of-stock.png"
        bigVector="bigvector.png"
        tildeImage="tildarow.png"
      />
      <Review />
      <Footer />
    </>
  )
}

export default page
