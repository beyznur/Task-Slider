import React, { useState } from "react";
import { whiteImage, yellowImage, roseImage } from "../constants/index";
import { useParams } from "react-router-dom";
import ButtonGroup from "../components/ButtonGroup"; /*color buttons component*/
import RingInformation from "../components/RingInformation"; /*ring information component*/
import SaleFeatures from "../components/SaleFeatures";

const JewelryDetail = () => {
  
  const { id } = useParams();
  const ringId = parseInt(id, 10) - 1;
  const [currentImage, setSelectedImage] = useState(yellowImage[ringId]);
  const imageData = [yellowImage, whiteImage, roseImage];
  const ringSize = ["S", "M", "L", "XL"];

  const handleImageChange = (newImage) => {
    setSelectedImage(newImage);
  };

  return (
    <div className=" w-[84%]  m-auto lg:mt-5 mt-5 flex lg:flex-row flex-col  ">
      {/* --Left Wrapper-- */}
      <div className=" xl:w-[50%] w-[88%] mx-auto flex flex-col items-center  ">   {/* --Main image-- */}
        <img
          src={currentImage}
          alt="Ring"
          className="w-full object-cover mr-1 "
        />

        <div className="flex flex-row mt-5 justify-center">   {/* --Small images-- */}
          {imageData.map((images,index) => (
            <img
             key={index}
              src={images[ringId]}
              alt="Ring"
              className="w-1/4  object-cover mr-1 cursor-pointer"
              onClick={() => setSelectedImage(images[ringId])}
            />
          ))}
        </div>
      </div>

      {/* --Right Wrapper-- */}
      <div className=" xl:w-[40%] w-[88%] flex flex-col lg:mt-0 mt-10 m-auto lg:ml-10  ">   
        <RingInformation id={id} />        {/* --Ring features-- */}
        <div className="flex flex-row mt-3  ">   {/* --Color buttons-- */}
          <ButtonGroup  
            handleImageChange={handleImageChange}
            setButtonTitle={ringId}
            customKey={ringId}
          />
        </div>
        <hr className="border-1 mt-3 mb-3" />
        <span className="text-[12pt] font-semibold text-gray-600">Size</span>  {/* --Size buttons-- */}
        <div className="flex flex-row mt-3 ">
          {ringSize.map((size, index) => (
            <button className="w-8 h-8 border-2 mr-2 text-gray-600">
              {size}
            </button>
          ))}
        </div>
        <button className="mb-8 mt-5 border-2 border-[#D9D9D9]  hover:bg-gray-400 bg-gray-500 px-2 py-1 text-[15pt] text-white font-bold">
          ADD TO BAG
        </button>

        <SaleFeatures />  {/* --Sale-- */}
      </div>
    </div>
  );
};

export default JewelryDetail;
