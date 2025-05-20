import React from "react";
import Slider from "react-slick";
import Lottie from "lottie-react";
import tipAnimation from "../assets/tip.json";
import varietyAnimation from "../assets/variety.json";
import sunlightAnimation from "../assets/sunlight.json";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      title: "Water Wisely",
      text: "Overwatering is the #1 killer of houseplants. Let the soil dry before the next watering.",
      animation: tipAnimation,
    },
    {
      title: "Know Your Varieties",
      text: "Succulents, ferns, herbs — each plant type has unique needs. Know what you grow!",
      animation: varietyAnimation,
    },
    {
      title: "Sunlight is Essential",
      text: "Place your plants near windows with indirect light. Rotate them weekly for even growth.",
      animation: sunlightAnimation,
    },
  ];

  return (
  <div className="bg-green-100 py-10 px-4">
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-4">
            <div className="lg:w-1/2 text-center lg:text-left space-y-4">
              <h2 className="text-3xl font-bold text-green-700">{slide.title}</h2>
              <p className="text-gray-700">{slide.text}</p>
              <button className="btn bg-green-500 text-white">Learn More</button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <Lottie animationData={slide.animation} style={{ height: 300 }} loop />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);
};

export default Banner;
