"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import logo from "/public/Logo.webp";
import Link from "next/link";
import { Search, AlignCenter, XCircle } from "lucide-react";
import { NavItems } from "@/utils/mock";
import CartIcon from "../CartIcon";
import UserAuth from "../UserAuth";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white text-black py-3 sticky top-0 z-10">
      <div className="flex space-x-8 px-4 items-center lg:px-8">
        {!navbar && (
          <div className="flex items-center justify-start   lg:block">
            {/* LOGO */}
            <Link href={"/"} className=" flex">
              <Image src={logo} alt={"logo"} height={100} width={100} />
            </Link>
          </div>
        )}
        <div
          className={`flex-1 lg:justify-self-center justify-center  lg:block  
               ${
                 navbar
                   ? "p-12 lg:p-0 block  animate-fade-in-right origin-right"
                   : "hidden"
               }`}
        >
          <ul className="h-screen lg:h-auto items-center justify-center text-black lg:flex ">
            {NavItems.map((item, index) => (
              <li
                key={index}
                className="text-lg font-lg py-2  lg:px-6 text-center border-b-2 lg:border-b-0 lg:hover:bg-transparent"
              >
                <Link onClick={() => setNavbar(false)} href={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center gap-x-8">
          {!navbar && (
            <>
              <div className="border pl-10 relative">
                <div className="absolute left-[7px] top-[4px]">
                  <Search size={15} />
                </div>
                <input type="text" placeholder="What are you looking for?" />
              </div>
              <div
                className={` flex  justify-end   items-center space-x-2 text-xs  `}
              >
                <Link href={"/cart"}>
                  <CartIcon />
                </Link>
                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className="lg:hidden">
                  <div
                    className="p-2 text-gray-700 rounded-lg outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? <XCircle size={30} /> : <AlignCenter size={30} />}
                  </div>
                </div>
              </div>
              <UserAuth />
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
