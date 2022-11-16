import React from "react";

const CTA = () => {
  return (
    <section id="CTA" className="py-8">
      <div className="flex flex-col items-start sm:flex-row justify-between bg-black-gradient-2 rounded-lg p-8  space-y-8">
        <div className="flex flex-col ">
          <p className="font-poppins font-semibold text-white text-2xl max-w-[310px] leading-normal">
            Let's try our service now!
          </p>
          <p className="text-[#909196] text-[12px] font-poppins font-normal max-w-[330px] leading-5 mt-4">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <button
          type="button"
          className="py-3 px-4 max-w-fit font-poppins font-medium text-xs text-primary bg-blue-gradient rounded-md outline-none mt-8"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CTA;
