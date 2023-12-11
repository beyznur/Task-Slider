import React from "react";
import {Group2,Union} from "../constants/index";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="flex flex-col justify-between w-[80%] mx-auto mt-5 lg:mt-8 xl:mt-20 ">
      <div className="flex flex-row justify-between items-center">
       <Link  to="/" ><span className="text-[18pt] cursor-pointer ">MY JEWELRY STORE</span></Link>
        <nav className="flex">
          <img className="mr-8 cursor-pointer" src={Union}  alt="Union Logo"/>
          <img className="cursor-pointer" src={Group2} alt="Group2 Logo"/>
        </nav>
      </div>     
    </header>
  );
};

export default Header;
