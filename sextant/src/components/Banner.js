import React from "react";
import logo from "./Assets/logo.svg";

function Banner() {
  return (
    <>
      <div className="m-4 text-[3rem] rounded-lg text-blue-500 font-[900] border-[4px] border-[#00bceb]">
        <div className=" flex  p-4">
          <img src={logo} className="w-1/2"/>
        </div>
      </div>
    </>
  );
}

export default Banner;
