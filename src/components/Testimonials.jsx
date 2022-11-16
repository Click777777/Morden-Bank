import React from "react";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className="flex flex-col items-center sm:items-start justify-between  py-8 space-y-8"
    >
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:space-x-8">
          <p className="font-poppins font-semibold text-white text-2xl max-w-[290px] leading-normal">
            What people are saying about us
          </p>
          <p className="text-[#909196] text-[12px] font-poppins font-normal max-w-[300px] leading-5 mt-4 sm:mt-0">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="sm:w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
          {feedback.map((i) => (
            <FeedbackCard {...i} key={i.id} />
          ))}
          <div className="absolute z-[0] w-[50%] h-[50%] -right-1/2 bottom-0 rounded-full blue__gradient" />
          <div className="absolute z-[3] w-[50%] h-[50%] -right-1/2 top-0 rounded-full white__gradient" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
