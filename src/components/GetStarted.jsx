import React from "react";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div className="sm:flex flex-col justify-center items-center font-poppins font-normal text-[12px] hidden    ">
      <div className="flex items-center space-x-1.5 text-gradient">
        <div>Get</div>
        <div className={`w-3`}>
          <img src={arrowUp} alt="errImg" className=" object-cover" />
        </div>
      </div>
      <div className="text-gradient">Started</div>
    </div>
  );
};

export default GetStarted;
