import React,{useState} from "react";
import { whiteImage, yellowImage, roseImage } from "../constants/index";

const ButtonGroup = ({handleImageChange,customKey}) => {

    const [activeButton, setActiveButton] = useState(0);    {/* --Selected Button-- */}
    const [buttonTitle, setButtonTitle] = useState("Yellow");

    const buttonInfo = [
        {
          color: "#E6CA97",
          image: yellowImage[customKey],
          title: "Yellow",
        },
        {
          color: "#D9D9D9",
          image: whiteImage[customKey],
          title: "White",
        },
        {
          color: "#E1A4A9",
          image: roseImage[customKey],
          title: "Rose",
        },
      ];
    
    return (
        <section className="flex flex-row ">
          {buttonInfo.map((button, index) => (
            <div
              key={index}
              className={`w-6 h-6 ml-2 rounded-full flex justify-center items-center cursor-pointer focus:ring-1 focus:ring-black ${
                activeButton === index ? "ring-1 ring-black" : ""
              }`}>
              <button
                className="w-4 h-4 rounded-full cursor-pointer"
                style={{ backgroundColor: button.color }}
                onClick={() => {
                  handleImageChange(button.image);
                  setButtonTitle(button.title);
                  setActiveButton(index);
                }}
              />
            </div>
          ))}
           <span className="font-AvenirBook text-[12pt] ml-2">{buttonTitle} Gold</span>
        </section>
      );
    }; 
export default ButtonGroup;
