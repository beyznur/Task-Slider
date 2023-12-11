import React from "react";
import Star from "../assets/SvgImg/star.svg";

const RingInformation = ({ id }) => {
  return <>
          <span className="font-Montserrat text-[17pt] text-gray-700">
          Engagment Ring {id}
        </span>
        <div className="flex flex-row  items-center mb-3">
          {[...Array(5)].map((index) => (
            <img key={index} className="w-3 h-3 mr-1" src={Star} alt={`Star`} />
          ))}
          <span className="text-gray-400 flex items-center justify-center mr-1">
            4.65
          </span>
          <span className="text-gray-400 font-semibold underline cursor-pointer">
            Read reviews
          </span>
        </div>

        <span className="text-[23pt] font-Montserrat mb-3 ">$101.00 USD</span>
        <p className="text-dark-gray ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
          laborum. Velit est aspernatur minima exercitationem molestiae quasi.
        </p>
        <hr className="border-1 mt-3 mb-3 " />
        <span className="text-[12pt]">
          <span className="font-semibold text-gray-600">Availability</span> - In
          Stock
        </span>
        <hr className="border-1 mt-3 mb-3 " />
        <span className="text-[12pt] font-semibold text-gray-600 ">Color</span>
  </>;
};

export default RingInformation;
