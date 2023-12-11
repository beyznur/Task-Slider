import React, { useState } from "react";
import { Link } from "react-router-dom"; /* --Router library-- */

const SliderImage = ({ image, isVisible, customKey }) => {
  const [isDragging, setIsDragging] = useState(false);  /* --Slider Controller-- */

  const handleDragStart = () => {
    setIsDragging(true);
  };
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="relative">
      <Link
        to={`/jewelry/${customKey + 1}`}
        className={`${
          isDragging ? "pointer-events-none" : "pointer-events-auto"
        }`}>
        <img
          src={image}
          alt={"Ring"}
          className={`slider-img slider-item-zoom transition-opacity duration-600 ease-in-out z-99
            ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-5 translate-x-[-200px]"
            }`}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        />
      </Link>
      <span className="text-[15pt] ring-title slider-item-zoom">
        Engagement Ring {customKey + 1}
        <br />
      </span>
      <span className="text-[17pt] ring-title slider-item-zoom ">
        $101.00 USD
      </span>
    </section>
  );
};

export default SliderImage;
