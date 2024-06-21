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
      if(current === 0){
        setCurrent(slides.length-1);
      } else {
        setCurrent(current - 1);
      }
    };
  
    const nextSlide = () => {
      if(current === slides.length-1){
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
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
      <div className="overflow-hidden max-w-[1300px] max-h-[500px] mx-auto mt-[20px] relative rounded-lg z-0 group">
          <div
            className="flex transition-transform duration-500 "
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slid) => (
              <img src={slid} className="object-cover object-center"/>
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