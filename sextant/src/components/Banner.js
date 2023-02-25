import React from "react";
import logo from "./Assets/logo.svg";

function Banner() {
  return (
    <>
      <div className="m-4 text-[3rem] rounded-lg text-blue-500 font-[900] border-[4px] border-[#00bceb]">
        <div className=" flex p-4 items-center justify-between">
          <img src={logo} className="w-[4rem]" />
          <div className=" flex justify-between w-[50%]">
            <div className="font-serif lg:text-[1rem] mob:text-[0.5rem] hover:underline hover:transition-all hover:delay-150 cursor-pointer">
              Home
            </div>
            <div className="font-serif lg:text-[1rem] mob:text-[0.5rem] hover:underline hover:transition-all hover:delay-150 cursor-pointer">
              Contact Us
            </div>
            <div className="font-serif lg:text-[1rem] mob:text-[0.5rem] hover:underline hover:transition-all hover:delay-150 cursor-pointer">
              About Us
            </div>
            <div className="font-serif lg:text-[1rem] mob:text-[0.5rem] hover:underline hover:transition-all hover:delay-150 cursor-pointer">
              Our Team
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
