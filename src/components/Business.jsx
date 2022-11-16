import React from "react";
import Button from "./Button";
import { features } from "../constants";

const Features = ({ icon, title, content }) => {
  return (
    <div className="flex items-center space-x-6 feature-card p-4 rounded-xl">
      <div className=" w-[34px] h-[34px] rounded-full bg-dimBlue p-2">
        <img src={icon} alt="errImg" className=" object-contain w-full" />
      </div>
      <div className="space-y-2">
        <p className="font-poppins font-medium text-xs text-white">{title}</p>
        <p className="text-[#909196] text-[12px] font-poppins font-normal max-w-[260px] leading-5 ">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section
      id="features"
      className="flex flex-col sm:flex-row justify-between items-center py-8 space-y-8 sm:space-y-0"
    >
      <div className="flex flex-col ">
        <p className="font-poppins font-semibold text-white text-2xl max-w-[310px] leading-normal">
          You do the business, we’ll handle the money.
        </p>
        <p className="text-[#909196] text-[12px] font-poppins font-normal max-w-[330px] leading-5 mt-4">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className="space-y-4">
        {features.map((i) => (
          <Features key={i.id} {...i} />
        ))}
      </div>
    </section>
  );
};

export default Business;
