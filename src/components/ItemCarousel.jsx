import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ItemCarousel = () => {
    const [items, setItems] = useState({
        candyItems: []
    });

    const [current,setCurrent] = useState(0);
    
    useEffect(() => {
        fetchData();
    }, []);

  const fetchData = async () => {
    try {
      const candyResponse = await axios.get('http://localhost:3000/products/item/category/parentCategory/Candy');
      setItems({
        candyItems: candyResponse.data
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const itemsPerPage = 6;

  const totalSlides = (items.candyItems.length / itemsPerPage);

  const chunkedItems = Array.from({ length: totalSlides }, (_, index) =>
    items.candyItems.slice(index * itemsPerPage, (index + 1) * itemsPerPage)
  );

  const nextSlide = () => {
    setCurrent((current) => (current + 1) % chunkedItems.length);
  };

  const prevSlide = () => {
    setCurrent((current) => (current - 1 + chunkedItems.length) % chunkedItems.length);
  };
  
  return (
    <div className='mx-auto max-w-[1300px] flex flex-col mt-[40px]'>
        <div className='text-yellow-500 text-[20px] mb-[20px] flex justify-center'>
            <span className='mx-auto pl-[50px]'>CANDY</span>
            <div className='text-[15px] my-auto'>
                <Link className="border-b border-red-500" to="/">See All</Link>
            </div>
        </div>
        <div className='flex flex-row'>
            <button className="text-[20px]" onClick={prevSlide}>
              <i className="las la-angle-left text-yellow-500 text-[30px] ml-[7px]"></i>
            </button>
            <div className='flex flex-row overflow-hidden justify-between min-w-[1200px]'>
                {chunkedItems.length > 0 && chunkedItems[current] && chunkedItems[current].map((item) => (
                    <div key={item.itemNumber} className="w-1/6 border border-black-500">
                        <img className="w-[150px] mx-auto" src={item.itemImageUrl}></img>
                        <p>{item.itemName}</p>
                        <p>${item.itemPrice}</p>
                        <button className='border rounded-2xl mt-[30px] mb-[20px] bg-yellow-500 px-[20px]'>
                            Add To Cart
                        </button>
                    </div>
                ))}
                <div className="absolute mt-[320px] left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {Array.from({ length: totalSlides }, (_, index) => (
                    <div
                        onClick={() => {
                        setCurrent(index);
                        }}
                        className={`rounded-full w-[10px] h-[10px] border border-yellow-500 cursor-pointer ${
                        index === current ? "bg-yellow-500" : "bg-white"
                        }`}
                    ></div>
                    ))}
                </div>
            </div>
            <button className="text-[20px]" onClick={nextSlide}>
                <i className="las la-angle-right text-yellow-500 text-[30px] mr-[7px]"></i>
            </button>
        </div>
    </div>
  );
};

export default ItemCarousel;

