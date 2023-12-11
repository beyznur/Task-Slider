import React from "react";
import Shipping from "../assets/SvgImg/shipping.svg";
import Returns from "../assets/SvgImg/easy-return.svg";
import Warranty from "../assets/SvgImg/warranty.svg";

const SaleFeatures = () => {
  const salesFeatures = [
    { icon: Shipping, text: "Free Shipping on orders over $150" },
    { icon: Returns, text: "Free 30 Day Returns" },
    { icon: Warranty, text: "2 Year Warranty" },
  ];

  return (
    <section className="mb-5">
      {salesFeatures.map((feature,index) => (
        <div key={index} className="flex flex-row items-center mb-1">
          <img className="w-5 h-5 mr-1 " src={feature.icon} alt="" />
          <span className="text-gray-600">{feature.text}</span>
        </div>
      ))}
    </section>
  );
};

export default SaleFeatures;
