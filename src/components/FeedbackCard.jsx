import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex flex-col feedback-card px-4 py-8 rounded-xl space-y-4">
      <div className="w-6 h-6">
        <img src={quotes} alt="imgErr" />
      </div>
      <p className="text-[11px] font-poppins font-normal h-min  sm:min-h-[80px] md:h-min leading-5 text-[#BFC0C3]">
        {content}
      </p>

      <div className="flex items-center space-x-2">
        <div className="w-8 h-8">
          <img src={img} alt="imgErr" />
        </div>
        <div>
          <p className="font-poppins font-medium text-white text-xs">{name}</p>
          <p className="font-poppins font-normal text-dimWhite text-[10px] ">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
