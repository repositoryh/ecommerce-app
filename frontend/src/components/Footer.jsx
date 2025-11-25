import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            We Are Glad To See You Here We Hope Positive Response 
            From You Inshallah We Will Provide Satisfying Results.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">AD7Store</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Founder : ADNAN CHOUDHARY</li>
            <li>Developer , Designer , Website Management : ZAID ASHIQ</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+92326-1067710</li>
            <li>ad7store.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ ad7store.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
