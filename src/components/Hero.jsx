import React from "react";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex sm:justify-between sm:flex-row flex-col relative space-y-8 sm:space-y-0 items-center ">
        {/* Left */}
        <div className="flex flex-col space-y-4">
          <div className="bg-[#1A1921] flex items-center space-x-3 rounded-md px-3 py-1 w-max">
            <div className={`w-[26px] h-[26px]`}>
              <img src={discount} className=" object-cover" alt="errImg" />
            </div>
            <div className="text-white font-poppins font-normal text-[11px]">
              20% <span className=" text-[#A2A2A5]">DISCOUNT FOR</span> 1 MONTH{" "}
              <span className=" text-[#A2A2A5]">ACCOUNT</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex space-x-8  items-center">
              <div className="flex flex-col  space-y-4 ">
                <div className="font-poppins font-semibold text-4xl text-white">
                  The Next
                </div>
                <div className="text-gradient font-poppins font-semibold text-4xl">
                  Generation
                </div>
              </div>
              <div className="sm:flex hidden items-col border border-solid border-[#8DEAED] py-5 px-4 rounded-full">
                <GetStarted />
              </div>
            </div>

            <div className="font-poppins font-semibold sm:text-4xl text-3xl text-white">
              Payment Method.
            </div>
          </div>

          <div>
            <p className="text-[#909196] text-[12px] font-poppins font-normal max-w-[330px] leading-5 mt-4">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
        </div>

        {/* Right */}

        <div className="relative xs:w-8/12 ss:w-1/2 w-10/12 ">
          <div className=" ">
            <img src={robot} alt="imgErr" className="" />
            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
