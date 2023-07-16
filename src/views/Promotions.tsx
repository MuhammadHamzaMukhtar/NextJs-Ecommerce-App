import React from "react";
import e1 from "public/event1.webp";
import e2 from "public/event2.webp";
import e3 from "public/event3.webp";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const Promotions = () => {
  return (
    <div className="lg:py-8  py-20">
      <h2 className="scroll-m-20 pb-2 text-xl text-center text-blue-700 font-semibold tracking-tight transition-colors first:mt-0 ">
        Promotions
      </h2>
      <h2 className="scroll-m-20 pb-7 text-3xl text-center font-extrabold tracking-tight transition-colors first:mt-0">
        Our Promotions Events
      </h2>
      <div className="lg:flex lg:items-center lg:justify-center gap-8 space-y-4">
        <div className="flex flex-col gap-5">
          <div className="flex bg-[#d6d6d8]">
            <div className="flex flex-col justify-center pl-3">
              <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight transition-colors first:mt-0">
                GET UP TO 60%
              </h2>
              <p className="leading-7">For the summer season</p>
            </div>
            <Image src={e1} alt="Event 1" />
          </div>
          <div className="flex flex-col bg-black justify-center items-center text-white p-9">
            <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight transition-colors first:mt-0 pb-5">
              GET 30% Off
            </h2>
            <p className="leading-7">USE PROMO CODE</p>
            <Badge className="bg-gray-700 text-md px-8">HAMZAWEEKENDSALE</Badge>
          </div>
        </div>
        <div className="bg-[#efe1c7] lg:flex-col flex items-center justify-center ">
          <div className="px-10 ">
            <p className="leading-7 pt-4">Flex Sweatshirt</p>
            <p className="leading-7">
              <span className="line-through">$100.00</span>{" "}
              <span className="font-semibold text-lg">$75.00</span>{" "}
            </p>
          </div>
          <Image src={e2} alt="Event 2" className="pt-5" />
        </div>
        <div className="bg-[#d7d7d9]">
          <div className="px-10">
            <p className="leading-7 pt-4">Flex Push Button Bomber</p>
            <p className="leading-7">
              <span className="line-through">$225.00</span>{" "}
              <span className="font-semibold text-lg">$190.00</span>{" "}
            </p>
          </div>
          <Image src={e3} alt="Event 3" className="pt-4" />
        </div>
      </div>
    </div>
  );
};

export default Promotions;
