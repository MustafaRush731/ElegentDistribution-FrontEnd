import { useEffect } from 'react';

export default function Stats() {
  useEffect(() => {
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 10000;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }, []);

  return (
    <section id="container" className="p-4">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/4 p-3 flex flex-col items-center text-center bg-white border rounded-lg m-2">
          <div className="flex items-baseline">
            <span className="num text-3xl font-bold" data-val="95">95</span>
            <span className="text-xl ml-1">%</span>
          </div>
          <span className="text-lg">CUSTOMER SATISFACTION RATING</span>
        </div>
        <div className="w-full md:w-1/4 p-3 flex flex-col items-center text-center bg-white border rounded-lg m-2">
          <div className="flex items-baseline">
            <span className="num text-3xl font-bold" data-val="5000">5000</span>
            <span className="text-xl ml-1">+</span>
          </div>
          <span className="text-lg">ORDERS SERVICED ANNUALLY</span>
        </div>
        <div className="w-full md:w-1/4 p-3 flex flex-col items-center text-center bg-white border rounded-lg m-2">
          <div className="flex items-baseline">
            <span className="num text-3xl font-bold" data-val="20">20</span>
            <span className="text-xl ml-1">+</span>
          </div>
          <span className="text-lg">YEARS IN BUSINESS</span>
        </div>
      </div>
    </section>
  );
}
