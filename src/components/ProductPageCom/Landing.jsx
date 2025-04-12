import React from "react";
import { DynamicBackground } from "../ui/DynamicBackground";
import landingImage from "../../assets/Images/plane black background.avif";

export const Landing = () => {
  const planeSpecs = [
    {
      title: "1,500",
      unit: "Miles",
      text: "Range",
    },
    {
      title: "400",
      unit: "MPH",
      text: "Cruise Speed",
    },
    {
      title: "2,500",
      unit: "Feet",
      text: "Takeoff Distance",
    },
  ];
  const planeDetails = [
    {
      title: "Advanced Aerodynamics",
      text: "Experience superior efficiency and performance with precision-engineered aerodynamics designed to reduce drag and enhance speed.",
    },
    {
      title: "Customizable Interiors",
      text: "Tailor your aircraft’s cabin to your unique preferences with a wide range of luxury materials and configurations.",
    },
    {
      title: "Quick Takeoff Efficiency",
      text: "Achieve smooth takeoffs with a minimal required distance of just 2,500 feet, ensuring fast and efficient departures.",
    },
    {
      title: "Smart Flight Monitoring",
      text: "Monitor every aspect of your flight with integrated smart systems that provide real-time diagnostics and data analytics.",
    },
  ];
  return (
    <div className="w-full h-[230dvh] bg-black relative overflow-hidden">
      <DynamicBackground image={landingImage} size="65%" />
      <div className="absolute top-[55%] left-0 w-full h-52 bg-gradient-to-b from-[#0000005d] to-50% to-black z-10 pointer-events-none"></div>

      <div className="relative z-20 w-full h-full flex flex-col items-center mt-20 ">
        <div className="w-full flex flex-col gap-4 items-center">
          <h1 className="text-[#fff] w-full text-4xl tracking-wide text-center md:text-6xl lg:text-7xl uppercase font-[300] font-poppins">Introducing Electra<span className="font-semibold">X</span></h1>
          <p className="text-[#fff] w-[80%] text-lg md:text-2xl text-center">Where Classic Elegance Meets Tomorrow’s Flight</p>
        </div>
        <div className="flex flex-wrap justify-center w-[90%] md:w-[60%] gap-8 lg:gap-12 mt-[200px] md:mt-[550px]">
          {planeSpecs.map((spec, index) => (
            <div key={index} className="h-[100px] w-[150px] md:w-[170px] lg:w-[200px] pt-3 pr-3  border-t-[2px] border-r-[2px] border-white rounded-tr-[30px]">
              <div className="w-full h-full flex flex-col rounded-tr-[18px] bg-[#000000d5] p-2">
                <div className="flex gap-1 font-semibold text-[#fff] text-[16px] md:text-[20px] lg:text-[24px] ">
                    <h1 className="">{spec.title}</h1>
                    <span>{spec.unit}</span>
                </div>
                <p className="text-[#fff] font-medium text-[14px] md:text-[16px] lg:text-[18px]">{spec.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[90%] lg:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-12 lg:gap-y-20 md:gap-x-20 lg:gap-x-40  place-content-center mt-20 md:mt-32">
          {planeDetails.map((detail, index) => (
            <div key={index} className="w-full border-t border-[#d1d1d1] py-4">
              <h1 className="text-xl lg:text-2xl font-bold text-[#fff]">{detail.title}</h1>
              <p className="text-md lg:text-lg text-[#d1d1d1]">{detail.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
