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
    autoplaySpeed: 6000,
    pauseOnHover: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const slides = [
    {
      title: "Water Wisely",
      text: "Overwatering is the #1 killer of houseplants. Let the soil dry before the next watering.",
      animation: tipAnimation,
      tipNumber: "Tip #1",
      extraInfo: "Most indoor plants need water only when the top 1-2 inches of soil feels dry to the touch.",
      bulletPoints: [
        "Check soil moisture with your finger before watering",
        "Water less frequently in winter months",
        "Use room temperature water to avoid shocking roots",
      ],
      factoid: "Did you know? Plants in plastic pots retain moisture longer than those in terracotta pots.",
    },
    {
      title: "Know Your Varieties",
      text: "Succulents, ferns, herbs — each plant type has unique needs. Know what you grow!",
      animation: varietyAnimation,
      tipNumber: "Tip #2",
      extraInfo:
        "Research your specific plant species for best results. Our plant database has care info for over 500 varieties.",
      bulletPoints: [
        "Succulents need bright light and minimal water",
        "Ferns prefer humidity and indirect light",
        "Tropical plants usually need warmth and moisture",
      ],
      factoid: "Fun fact: The ZZ Plant can survive for months without water and thrives in low light conditions.",
    },
    {
      title: "Sunlight is Essential",
      text: "Place your plants near windows with indirect light. Rotate them weekly for even growth.",
      animation: sunlightAnimation,
      tipNumber: "Tip #3",
      extraInfo:
        "South-facing windows provide the most light, while north-facing windows offer gentle, indirect light perfect for shade-loving plants.",
      bulletPoints: [
        "East-facing windows provide morning sun, ideal for plants",
        "West-facing windows offer afternoon sun, which can be bad",
        "Use sheer curtains to filter harsh direct sunlight",
      ],
      factoid:
        "Plant fact: Variegated plants typically need more light than their solid-green counterparts to maintain their patterns.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 py-4 px-4 rounded-xl shadow-md overflow-hidden ">
      <div className="max-w-6xl mx-auto mb-6">
        <h1 className="text-4xl font-bold text-green-800 text-center mb-2">
          Essential Plant Care Tips
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Master these fundamentals to keep your plants healthy and thriving
        </p>
      </div>

      <Slider {...settings} className="plant-care-slider">
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-4 py-2">
              {/* Text Content */}
              <div className="lg:w-1/2 text-center lg:text-left space-y-4">
                <span className="inline-block bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                  {slide.tipNumber}
                </span>
                <h2 className="text-3xl font-bold text-green-700">{slide.title}</h2>
                <p className="text-gray-700 text-lg">{slide.text}</p>
                <p className="text-gray-600">{slide.extraInfo}</p>

                <div className="bg-white bg-opacity-70 rounded-lg p-4 mt-4">
                  <h3 className="font-semibold text-green-800 mb-2">Key Points:</h3>
                  <ul className="space-y-2">
                    {slide.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Animation */}
              <div className="lg:w-1/2 flex justify-center relative max-h-[300px] overflow-hidden">
                <div className="absolute top-0 right-0 bg-white p-2 rounded-full shadow-md hidden lg:block">
                  <span className="text-xs font-medium text-green-800">
                    Tip {index + 1}/{slides.length}
                  </span>
                </div>
                <div className="w-full max-w-[350px]">
                  {slide.animation ? (
                    <Lottie animationData={slide.animation} loop={true} />
                  ) : (
                    <p className="text-red-500">⚠️ Animation missing</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

       <div className=" flex justify-center">
        <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-green-100">
          <p className="text-center text-gray-600">
            <span className="font-semibold text-green-700">Pro Tip:</span> Join our weekly newsletter for
            seasonal plant care advice and tips
            <a href="/newsletter" className="ml-2 text-green-600 hover:text-green-800 underline">
              Subscribe now
            </a>
          </p>
        </div>
      </div> 
    </div>
  );
};

export default Banner;
