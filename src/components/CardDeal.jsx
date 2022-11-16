import React from "react";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section
      id="product"
      className="flex flex-col sm:flex-row justify-between items-center py-8 space-y-8 sm:space-y-0"
    >
      <div className="flex flex-col ">
        <p className="font-poppins font-semibold text-white text-2xl max-w-[300px] leading-normal">
          Find a better card deal in few easy steps.
        </p>
        <p className="text-[#909196] text-[12px] font-poppins font-normal max-w-[330px] leading-5 mt-4">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <div className=" items-center sm:items-baseline  xs:w-8/12 ss:w-1/2 w-10/12">
        <img src={card} alt="imgErr" className="sm:w-10/12 w-10/12 mx-auto" />
      </div>
    </section>
  );
};

export default CardDeal;
