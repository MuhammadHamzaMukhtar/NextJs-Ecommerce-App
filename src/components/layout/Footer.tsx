import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "/public/Logo.webp";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { companyItems, contactItems, supportItems } from "@/utils/mock";

const Footer = () => {
  return (
    <footer className="mt-24 grid grid-cols-12">
      <div className="space-y-10 col-span-4 pr-5">
        <div>
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={180} />
          </Link>
        </div>
        <p className="text-gray-700 text-xl">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
        <div className="flex gap-x-5">
          <span className="w-11 h-11 rounded-xl flex items-center justify-center bg-gray-300 cursor-pointer">
            <TwitterIcon />
          </span>
          <span className="w-11 h-11 rounded-xl flex items-center justify-center bg-gray-300 cursor-pointer">
            <FacebookIcon />
          </span>
          <span className="w-11 h-11 rounded-xl flex items-center justify-center bg-gray-300 cursor-pointer">
            <LinkedinIcon />
          </span>
        </div>
      </div>
      <div className="space-y-5 col-span-3">
        <h2 className="font-semibold text-gray-700 text-2xl tracking-wide">
          Company
        </h2>
        {companyItems.map((item, index) => (
          <p key={index} className="text-gray-700 text-lg cursor-pointer">
            {item}
          </p>
        ))}
      </div>
      <div className="space-y-5 col-span-3">
        <h2 className="font-semibold text-gray-700 text-2xl tracking-wide">
          Support
        </h2>
        {supportItems.map((item, index) => (
          <p key={index} className="text-gray-700 text-lg cursor-pointer">
            {item}
          </p>
        ))}
      </div>
      <div className="space-y-5 col-span-2">
        <h2 className="font-semibold text-gray-700 text-2xl tracking-wide">
          Contact
        </h2>
        {contactItems.map((item, index) => (
          <p key={index} className="text-gray-700 text-lg cursor-pointer">
            {item}
          </p>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
