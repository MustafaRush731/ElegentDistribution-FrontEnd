import chocolate from "../assets/choclate.png";
import gummy_bear from "../assets/alispics/gummy.png";
import twix_box from "../assets/alispics/twix.png";
import snickers_box from "../assets/alispics/snick.png";
import kitkat_box from "../assets/alispics/kitkat.png";
import milkyway_box from "../assets/alispics/milkway.png";
import mm_box from "../assets/alispics/mm.png";
import { useState } from "react";

export function CategoriesPage() {
  const pageNum = 1;
  const [order, setOrder] = useState("Low to High Price");
  const items = [
    ["Gummy Bears", 5.99, gummy_bear],
    ["twix Bar 36ct", 11.99, twix_box],
    ["Snickers Bar 48ct", 15.99, snickers_box],
    ["KitKat Bar 36ct", 10.99, kitkat_box],
    ["MilkyWay Bar 36ct", 2.99, milkyway_box],
    ["M&M Bar 36ct", 12.99, mm_box],
  ];
  const handleOnChange = (e) => {
    setOrder(e.target.value);
  };

  const sortItems = (items, order) => {
    if (order === "Low to High Price") {
      return items.sort((a, b) => a[1] - b[1]);
    } else if (order === "High to Low Price") {
      return items.sort((a, b) => b[1] - a[1]);
    } else if (order === "Name") {
      return items.sort((a, b) => a[0].localeCompare(b[0]));
    } else if (order === "Best Seller") {
      return items;
    }
  };
  return (
    <div className="px-3 mt-72">
      {/* the banner for that catgory */}
      <div
        className=" max-w-50 h-40 text-white-700 px-10"
        style={{ backgroundImage: `url(${chocolate})` }}
      ></div>
      {/* sorting*/}
      {/* <div className="flex justify-evenly p-4">
        <span className="text-xs font-bold place-items-center pt-3">
          items {pageNum}-{items.length}
        </span>
        <div className="flex items-center">
          <span className="text-sm">Sort by:</span>
          <select
            value={order}
            onChange={handleOnChange}
            className="border border-gray-300 rounded-lg p-2 ml-2"
          >
            <option value="Low to High Price">Low to High Price</option>
            <option value="High to Low Price">High to Low Price</option>
            <option value="Name">Name</option>
            <option value="Best Seller">Best Seller</option>
          </select>
        </div>
      </div> */}
      {/* the grid layout */}
      <div className=" justify-end p-4">
        {/* sorting*/}
        <div className="flex justify-end p-[1%]">
          <span className="relative right-[10%] text-xs font-bold items-center pt-3">
            items {pageNum}-{items.length}
          </span>
          <div className="mr-[8%]">
            <span className="text-sm">Sort by:</span>
            <select
              value={order}
              onChange={handleOnChange}
              className="border border-gray-300 rounded-lg p-2 ml-2"
            >
              <option value="Low to High Price">Low to High Price</option>
              <option value="High to Low Price">High to Low Price</option>
              <option value="Name">Name</option>
              <option value="Best Seller">Best Seller</option>
            </select>
          </div>
        </div>
        <div className="absolute grid right-10 grid-cols-5 gap-4 items-end w-[65%]">
          {sortItems(items, order).map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg w-[100%]"
              >
                <img
                  src={item[2]}
                  alt="gummy bear"
                  className="w-[100%] h-[100%]"
                />
                <div className="text-center">
                  <span className="text-[80%] font-bold">{item[0]}</span>
                  <span className="block text-[50%] text-gray-600">
                    ${item[1]}
                  </span>
                </div>
              </div>
            );
          })}
          {/* // {items.map((item, index) => {
                    //     return (
                    //         <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                    //             <img src={item[2]} alt="gummy bear" className="w-40 h-40" />
                    //             <div className="text-center">
                    //                 <span className="text-sm font-bold">{item[0]}</span>
                    //                 <span className="block text-xs text-gray-600">${item[1]}</span>
                    //             </div>
                    //         </div>
                    //     )
                    // })} */}
        </div>
      </div>
    </div>
  );
}
