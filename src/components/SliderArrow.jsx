import React from "react";
import leftIcon from "../assets/SvgImg/arrow-left-s-line.svg";
import rightIcon from "../assets/SvgImg/arrow-right-s-line.svg";

const SliderArrow = ({direction, handleArrowClick }) => {

  const icon = direction === "left" ? leftIcon : rightIcon;

  return (
    <>
      <button
        className={`"absolute arrow m-auto top-0 bottom-[-50px] sm:bottom-10  ${
          direction === "left" ? "sm:left-[-50px] left-[-40px] " : "sm:right-[-50px] right-[-40px]"
        }`}
        onClick={() => handleArrowClick(direction)}>
        <img src={icon} className="w-20" alt={`${direction} Arrow`} />
      </button>
    </>
  );
};

export default SliderArrow;
