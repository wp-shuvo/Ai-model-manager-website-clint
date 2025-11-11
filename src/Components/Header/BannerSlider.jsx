import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import sliderOne from '../../assets/heroImage.jpeg';
import sliderTwo from '../../assets/heroImage2.jpeg';
import sliderThree from '../../assets/heroImage3.jpeg';
import 'animate.css';
import { Link } from 'react-router';

const BannerSlider = () => {
  const slides = [
    {
      image: sliderOne,
      heading: 'Effortlessly Manage All Your AI Models',
      subtext:
        'Add, track, and organize every AI model in one smart, centralized dashboard.',
      button: 'Get Started',
    },
    {
      image: sliderTwo,
      heading: 'Simplify Your AI Development Process',
      subtext:
        'Easily update frameworks, datasets, and use cases — all from one intuitive platform.',
      button: 'Get Started',
    },
    {
      image: sliderThree,
      heading: 'Visualize and Optimize Your Model Inventory',
      subtext:
        'Stay on top of your AI ecosystem with clear insights and organized data visualization.',
      button: 'Get Started',
    },
  ];

  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="relative w-full h-[250px] md:h-[600px] overflow-hidden"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.heading}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4 animate__animated animate__backInLeft">
              <h1 className="text-lg md:text-4xl font-bold mb-3 ">
                {slide.heading}
              </h1>
              <p className="text-sm md:text-lg mb-5 max-w-2xl ">
                {slide.subtext}
              </p>
              <Link
                to="/login"
                className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-lg hover:opacity-90 transition text-white px-5 py-2 rounded-full transition"
              >
                {slide.button}
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
