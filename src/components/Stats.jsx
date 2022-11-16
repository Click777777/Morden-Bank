import React from "react";
import { stats } from "../constants";

const Stats = () => {
  return (
    <div className="flex flex-col sm:flex-row pb-8 md:pb-16 space-y-2 sm:space-y-0">
      {stats.map((i, index) => (
        <div
          key={i.id}
          className={`flex flex-col sm:flex-row items-center justify-between sm:justify-evenly w-full`}
        >
          <p className="font-poppins font-semibold text-white text-2xl ">
            {i.value}
          </p>
          <p className="font-poppins font-normal text-gradient text-xs uppercase ">
            {i.title}
          </p>
          {index === stats.length - 1 ? null : (
            <div className=" w-[2px] h-2 bg-[#76787E] "></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stats;
