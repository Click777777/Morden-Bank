import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section id="footer" className="py-8">
      <div className=" flex sm:flex-row flex-col text-white space-y-8 sm:space-y-0 ">
        <div className="flex-[1] flex flex-col justify-start">
          <div>
            <img src={logo} alt="imgErr" className="w-40" />
          </div>
          <div>
            <p className="text-[#909196] text-[12px] font-poppins font-normal w-fit sm:max-w-[210px] leading-5 mt-4">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap ">
          {footerLinks.map((link) => (
            <div key={link.title} className="min-w-fit space-y-4 p-4 pl-0  ">
              <h4 className="font-poppins">{link.title}</h4>
              <ul className="space-y-2">
                {link.links.map((links) => (
                  <li
                    className="text-[#909196] text-[12px] font-poppins font-normal leading-5 cursor-pointer"
                    key={links.link}
                  >
                    {links.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center sm:flex-row flex-col space-y-4 sm:space-y-0 py-6">
        <p className="text-[#909196] text-[12px] font-poppins font-normal leading-5">
          Copyright &copy; 2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          {socialMedia.map((i) => (
            <img
              key={i.id}
              src={i.icon}
              alt="imgErr"
              className="w-4 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
