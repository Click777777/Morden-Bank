import React from "react";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section id="clients" className="  py-8 ">
      <div className="grid sm:grid-cols-4 grid-cols-2 place-items-center gap-8">
        {clients.map((i) => (
          <div key={i.id} className="w-[110px]  flex items-center ">
            <img src={i.logo} alt="errImg" className=" object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
