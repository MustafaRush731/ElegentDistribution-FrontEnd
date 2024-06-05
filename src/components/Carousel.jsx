import household from '../assets/candy-pic.jpg';
import car from '../assets/car-pic.jpg';
import candy from '../assets/household-pic.jpg';
import medicine from '../assets/medicine-pic.jpg';
import React, { useState, useEffect } from 'react';

export default function Carousel() {
    const [current, setCurrent] = useState(0);
  
    let slides = [
      household,
      car,
      candy,
      medicine
    ];
    
    const previousSlide = () => {
      setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };
  
    const nextSlide = () => {
      setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        nextSlide();
      }, 5000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [current]);
  
    return (
      <div className="overflow-hidden w-[70%] mx-auto mt-[20px] relative rounded-lg z-0 group">
          <div
            className="flex"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <img key={index} src={slide} alt={`Slide ${index + 1}`}/>
            ))}
          </div>
            <div className="absolute top-0 h-full w-full flex justify-between z-10">
            <button className="opacity-0 group-hover:opacity-100 " onClick={previousSlide}>
              <i className="las la-angle-left text-white text-[30px] ml-[7px]"></i>
            </button>
            <button className="opacity-0 group-hover:opacity-100" onClick={nextSlide}>
              <i className="las la-angle-right text-white text-[30px] mr-[7px]"></i>
            </button>
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {slides.map((slide, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrent(index);
                }}
                className={`rounded-full w-[10px] h-[10px] border border-white cursor-pointer ${
                  index === current ? "bg-white" : "bg-transparent"
                }`}
              ></div>
            ))}
          </div>
      </div>
    );
  }