import React from "react";
import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <section
      id="product"
      className="flex flex-col sm:flex-row justify-between items-center py-8 space-y-8 sm:space-y-0"
    >
      <div className=" items-center sm:items-baseline  xs:w-8/12 ss:w-1/2 w-10/12 relative">
        <img src={bill} alt="imgErr" className="sm:w-10/12 w-10/12 mx-auto" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>
      <div className="flex flex-col">
        <p className="font-poppins font-semibold text-white text-2xl max-w-[300px] leading-normal">
          Easily control your billing & invoicing.
        </p>
        <p className="text-[#909196] text-[12px] font-poppins font-normal max-w-[330px] leading-5 mt-4">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="w-8/12 mt-4">
          <div className="flex space-x-4">
            <div>
              <img src={apple} alt="imgErr" />
            </div>
            <div>
              <img src={google} alt="imgErr" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;
