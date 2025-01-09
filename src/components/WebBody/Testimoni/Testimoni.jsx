import React, { useRef, useState } from 'react';
// Import Swiper React components
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Testimoni.css';

// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import Card from './TestimonicalCards/Card';
import Heading from '../../Shared/Headings/Heading';

export default function Testimoni() {

    const controls = useAnimation(); // Controls the animation state
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust the threshold to control when the animation triggers
  });

  // Trigger animation when the element comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

    const review = [
        {
            review: "Outstanding service! I was impressed by their attention to detail and dedication to delivering top-notch results. Highly recommend!",
            name: "Michael",
            img: "https://img.freepik.com/free-photo/portrait-young-confident-businessman-wearing-glasses_158595-5360.jpg?t=st=1713364211~exp=1713367811~hmac=00f9b88a3257786a0850f3558b505ff0dc72f62484aecfcb40b38a03b7a85503&w=740"
        },
        {
            review: "Working with this team was a game-changer for my business. They provided innovative solutions and exceeded all my expectations.",
            name: "Sophia",
            img: "https://img.freepik.com/premium-photo/natural-woman-portrait-indoors-white-wall_158235-556.jpg?w=740"
        },
        {
            review: "I couldn't be happier with the results! This team goes above and beyond to ensure client satisfaction. Will definitely work with them again.",
            name: "Daniel",
            img: "https://img.freepik.com/premium-photo/portrait-handsome-young-security-guard-black-glasses_274222-2955.jpg?w=740"
        },
        {
            review: "Excellent communication and professionalism throughout the entire process. I'm extremely impressed with the quality of their work.",
            name: "Olivia",
            img: "https://img.freepik.com/free-photo/smiling-young-pretty-caucasian-girl-looking-camera-isolated-white-background_141793-90221.jpg?t=st=1713362995~exp=1713366595~hmac=a11338dbf5f930e1bb01fe97aaa75c3b53fd0805f02c4d9a7b0e29e91bb36e56&w=740"
        }
    ];
    

    const isMobile = window.innerWidth <= 568;
    const slidesPerView = isMobile ? 1 : 3;

    return (
        <div id='testimonial' className='py-10 md:pb-24' style={{backgroundImage: `url("https://demo.casethemes.net/grupi/wp-content/uploads/2021/07/h4-bg-testimonial1.jpg")`}}>
        <Heading text={"Testimonial"} />
        <h3 className='text-center font-bold italic font1 px-4 text-white mt-3 text-2xl md:text-4xl'> Feedback from Clients </h3>
       
          <motion.div
      ref={ref} // Set reference to track when the element is in view
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        hidden: { opacity: 0, y: 100 },
      }}
    >
          <div className='mt-5 py-6'>
          <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination, Autoplay]} // Add Autoplay module
                autoplay={{ delay: 5000 }} // Set autoplay delay in milliseconds
                className="mySwiper"
            >
                {/* Map over the reviews array to create Swiper slides */}
                {review.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card review={item.review} name={item.name} image={item.img} />
                    </SwiperSlide>
                ))}
            </Swiper>
          </div>
            </motion.div>
        </div>
    );
}
