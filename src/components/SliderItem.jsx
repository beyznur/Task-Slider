import React, { useState } from "react";
import { yellowImage } from "../constants/index";
import SliderImage from "../components/SliderImage";
import ButtonGroup from "../components/ButtonGroup";

const SliderItem = ({ customKey }) => {
  const [currentImg, setCurrentImg] = useState(yellowImage[customKey]);
  const [isVisible, setIsVisible] = useState(true);

  {/* --Change Image Animation-- */}
  const handleImageChange = (newImage) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentImg(newImage);
      setIsVisible(true);
    }, 150);
  };

  return (
    <section className="flex-shrink-0 card-item mb-8 overflow-hidden min-w-[280px] snap-start ">
      {/* --Image and Titles-- */}
      <SliderImage
        image={currentImg}
        isVisible={isVisible}
        customKey={customKey}
      />

      {/* --3 Buttons and Title -- */}
      <div className="mt-7 mb-5">
        <ButtonGroup
          handleImageChange={handleImageChange}
          customKey={customKey}
        />
      </div>
    </section>
  );
};

export default SliderItem;
