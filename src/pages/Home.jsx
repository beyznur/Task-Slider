import React, { useEffect } from "react";
import { yellowImage } from "../constants/index";
import SliderArrow from "../components/SliderArrow";
import SliderItem from "../components/SliderItem";
import MouseHandlers from "../utils/MouseHandler"; /* --Mouse event */

const Home = () => {
  const {
    cardWrapperRef,
    widthToScroll,
    setWidthToScroll,
    handleMouseDown,
    handleMouseMove,
    handleMouseUpAndLeave,
  } = MouseHandlers();

  useEffect(() => {
    if (cardWrapperRef.current) {
      setWidthToScroll(cardWrapperRef.current.children[0].offsetWidth);
    }
  },  [cardWrapperRef, setWidthToScroll]);

  const handleArrowClick = (direction) => {
    if (cardWrapperRef.current) {
      const scrollAmount =
        direction === "left" ? -widthToScroll : widthToScroll;
      cardWrapperRef.current.scrollLeft += scrollAmount;
    }
  };
  return (
    <div className="relative mx-auto w-[80%] mb-10 ">
      {/* --Slider Arrows-- */}
      <SliderArrow direction="left" handleArrowClick={handleArrowClick} />
      <SliderArrow direction="right" handleArrowClick={handleArrowClick} />

        <div className="flex justify-center mt-4  xl:mb-10 mb-3 md:mt-5 md:mb-4 ">
          <span className="text-[32pt] font-AvenirBook ">
            Moissanite Engagement Rings
          </span>
        </div>

        {/*Slider Wrapper*/}
        <div className="flex  md:ml-0  mx-auto w-[97%]">
          <div
            className="flex card-wrapper md:gap-[140px] gap-5  "
            ref={cardWrapperRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpAndLeave}
            onMouseLeave={handleMouseUpAndLeave}>
            {yellowImage.map((image, index) => (
              <SliderItem  customKey={index} />
            ))}
          </div>
        </div>
      </div>
 
  );
};

export default Home;
